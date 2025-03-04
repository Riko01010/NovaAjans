import OpenAI from 'openai';
import { appendResponseMessages } from 'ai';
import { NOVA_SYSTEM_PROMPT } from '@/lib/constants';

// API anahtarı var mı kontrol et
const isGroqConfigured = process.env.GROQ_API_KEY && process.env.GROQ_API_KEY.length > 0;

// Groq API'yi OpenAI uyumlu olarak kullanıyoruz
const openai = isGroqConfigured
  ? new OpenAI({
      apiKey: process.env.GROQ_API_KEY || '',
      baseURL: 'https://api.groq.com/openai/v1',
    })
  : null;

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    // API anahtarı yoksa hata döndür
    if (!isGroqConfigured || !openai) {
      return new Response(
        JSON.stringify({
          error: "Groq API anahtarı yapılandırılmamış. Lütfen Vercel'de GROQ_API_KEY çevre değişkenini ekleyin.",
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // İstek içeriğini alıyoruz
    const body = await req.json();
    const { messages, id } = body;
    
    console.log('Gelen istek ID:', id);
    console.log('Gelen mesajlar (ham):', JSON.stringify(messages));

    if (!messages || !Array.isArray(messages)) {
      throw new Error('Geçersiz mesaj formatı: messages dizisi bulunamadı');
    }

    // Mesaj formatını düzenliyoruz - sadece role ve content özelliklerini alıyoruz
    const formattedMessages = messages.map((message: any) => {
      if (!message || typeof message !== 'object') {
        console.error('Geçersiz mesaj formatı:', message);
        return { role: 'user', content: 'Mesaj okunamadı' };
      }

      // Role kontrolü
      const role = message.role && typeof message.role === 'string' 
        ? message.role 
        : 'user';

      // Content kontrolü
      let content = '';
      
      if (message.content === undefined || message.content === null) {
        // Content yoksa parts'a bakıyoruz (Vercel AI SDK bazen bu formatta gönderebilir)
        if (message.parts && Array.isArray(message.parts)) {
          content = message.parts
            .map((part: any) => {
              if (typeof part === 'string') return part;
              if (part && typeof part === 'object') {
                if (part.text) return part.text;
                if (part.type === 'text' && part.text) return part.text;
              }
              return JSON.stringify(part);
            })
            .filter(Boolean) // Boş değerleri filtrele
            .join(' ');
        } else {
          content = 'Boş mesaj';
        }
      } else if (typeof message.content === 'string') {
        content = message.content;
      } else if (Array.isArray(message.content)) {
        content = message.content
          .map((item: any) => (typeof item === 'string' ? item : JSON.stringify(item)))
          .join(' ');
      } else {
        content = String(message.content);
      }
      
      // Boş içerik kontrolü
      if (!content.trim()) {
        content = 'Boş mesaj';
      }
      
      return { role, content };
    });
    
    console.log('Formatlanmış mesajlar:', JSON.stringify(formattedMessages));
    
    // Vercel AI SDK'nın beklediği formatı oluşturmak için encoder
    const encoder = new TextEncoder();
    
    // Stream yanıtı için ReadableStream oluşturuyoruz
    const stream = new ReadableStream({
      async start(controller) {
        try {
          // Groq API'ye istek gönderiyoruz
          const completion = await openai.chat.completions.create({
            model: 'qwen-2.5-32b',
            messages: [
              {
                role: 'system',
                content: NOVA_SYSTEM_PROMPT
              },
              ...formattedMessages
            ],
            stream: true,
          });
          
          // Yanıt mesajlarını tutacak değişken
          let responseContent = '';
          
          // Stream'i işliyoruz - Vercel AI SDK'nın data stream protokolüne uygun olarak
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              // Yanıt içeriğini biriktiriyoruz
              responseContent += content;
              
              // Text part formatı: 0:"metin"\n
              controller.enqueue(encoder.encode(`0:${JSON.stringify(content)}\n`));
            }
          }
          
          // Stream'in bittiğini belirtiyoruz
          controller.close();
          
          // Eğer bir chat ID varsa ve yanıt içeriği oluştuysa, bu yanıtı loglamak veya
          // sunucu tarafında saklamak için burada işlem yapılabilir
          if (id && responseContent) {
            console.log(`Chat ID ${id} için yanıt tamamlandı.`);
            // Burada sunucu tarafında yanıtı saklamak için bir veritabanı işlemi yapılabilir
            // Örneğin: await saveChatResponse(id, responseContent);
          }
          
        } catch (error) {
          console.error('Stream error:', error);
          // Hata durumunda client'a bilgi gönderiyoruz - Error part formatı: 3:"hata mesajı"\n
          controller.enqueue(encoder.encode(`3:${JSON.stringify(String(error))}\n`));
          controller.close();
        }
      },
    });

    // Stream yanıtını dönüyoruz
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'x-vercel-ai-data-stream': 'v1', // Vercel AI SDK'ya data stream protokolü kullandığımızı belirtiyoruz
      },
    });
    
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'An error occurred during your request.', 
        details: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined
      }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
} 