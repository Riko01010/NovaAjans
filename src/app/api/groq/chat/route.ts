import OpenAI from 'openai';
import { appendResponseMessages } from 'ai';

// Groq API'yi OpenAI uyumlu olarak kullanıyoruz
const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || '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',
  baseURL: 'https://api.groq.com/openai/v1',
});

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
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
                content: `Sen NOVA AJANS'ın dijital asistanısın. Ajansımız hakkında aşağıdaki bilgileri kullanarak müşterilere yardımcı olmalısın:

HAKKIMIZDA:
NOVA AJANS, 2015 yılından beri dijital dünyada işletmelere ve son kullanıcılara çözümler sunan yenilikçi bir ekibin kurduğu bir dijital ajans. Müşterilerimizin online varlığını güçlendirmek ve dijital stratejilerini geliştirmek için çalışıyoruz. 8 yıllık deneyimimiz ve 200+ başarılı projemiz ile sektörde güvenilir bir iş ortağıyız.

HİZMETLERİMİZ:
1. Web Tasarım ve Geliştirme: Responsive, modern ve kullanıcı dostu web siteleri
   - WordPress, Shopify, WooCommerce uzmanları
   - Özel CMS çözümleri
   - E-ticaret entegrasyonları
   - Hızlı ve SEO dostu altyapı

2. Dijital Pazarlama: SEO, SEM, içerik pazarlama ve sosyal medya stratejileri
   - Google ve Yandex SEO optimizasyonu
   - Anahtar kelime araştırması ve içerik stratejisi
   - Backlink çalışmaları
   - Teknik SEO denetimi ve iyileştirme

3. Sosyal Medya Yönetimi: İçerik üretimi, topluluk yönetimi ve reklam kampanyaları
   - Instagram, Facebook, Twitter, LinkedIn, TikTok
   - İçerik takvimi oluşturma
   - Görsel ve video içerik üretimi
   - Etkileşim ve takipçi artırma stratejileri

4. Grafik Tasarım: Logo, kurumsal kimlik, broşür ve dijital görseller
   - Logo ve marka kimliği tasarımı
   - Sosyal medya görselleri
   - Basılı materyal tasarımı
   - Ambalaj tasarımı

5. E-ticaret Çözümleri: Online mağaza kurulumu ve yönetimi
   - WooCommerce, Shopify, Magento uzmanları
   - Ödeme sistemi entegrasyonları
   - Stok yönetimi
   - Pazaryeri entegrasyonları (Trendyol, Hepsiburada, Amazon)
   

UZMANLIK ALANLARIMIZ:
- Turizm ve Konaklama
- Sağlık ve Wellness
- Eğitim Kurumları
- Perakende ve E-ticaret
- Finans ve Sigorta
- Gayrimenkul
- Restoran ve Yiyecek-İçecek

PAKETLERİMİZ:
Paket detaları için bize ulaşın. Whatsapp numaramız: 05555203451

ÇALIŞMA SÜRECİMİZ:
1. Keşif: Müşteri ihtiyaçlarını ve hedeflerini anlama (1-2 hafta)
2. Strateji: Hedeflere uygun dijital strateji geliştirme (1 hafta)
3. Tasarım: Marka kimliğine uygun görsel tasarımlar oluşturma (2-3 hafta)
4. Geliştirme: Teknik altyapı ve içerik üretimi (3-4 hafta)
5. Test: Kalite kontrol ve optimizasyon (1 hafta)
6. Lansman: Projenin yayına alınması (1 gün)
7. Destek: Sürekli teknik destek ve iyileştirmeler (Sürekli)

SIK SORULAN SORULAR:
1. Bir proje ne kadar sürede tamamlanır?
   - Projenin kapsamına bağlı olarak 1-4 hafta arasında değişir. Başlangıç paketi genellikle 1 haftada, kurumsal paket 4 haftada tamamlanır.

2. Ödeme koşulları nelerdir?
   - Projelerimizde %40 başlangıç, %30 tasarım onayı sonrası, %30 proje tesliminde olmak üzere 3 aşamalı ödeme planı uyguluyoruz.

3. Sosyal medya yönetimi neleri kapsar?
   - İçerik planı oluşturma, görsel/video üretimi, haftalık paylaşımlar, yorum ve mesaj yönetimi, aylık performans raporu.

4. SEO çalışmaları ne kadar sürede sonuç verir?
   - SEO çalışmaları uzun vadeli bir süreçtir. İlk sonuçlar genellikle 3-4 ay içinde görülmeye başlar, tam etki 6-12 ay içinde oluşur.

5. Mevcut web sitemizi yenileyebilir misiniz?
   - Evet, mevcut sitenizi analiz edip, güçlü yönlerini koruyarak yeni bir tasarım ve altyapı ile yenileyebiliriz.

6. Yurtdışı müşterilerine hizmet veriyor musunuz?
   - Evet, uluslararası müşterilerimiz için İngilizce, Almanca ve Rusça dillerinde hizmet veriyoruz.

İLETİŞİM:
Müşteriler detaylı bilgi için info@novaajans.ai adresine e-posta gönderebilir.

Yanıtlarında her zaman profesyonel, yardımsever ve bilgilendirici ol. Fiyat bilgisi verirken paketlerin genel içeriğini açıkla, ancak özel fiyatlandırma için müşterileri iletişime geçmeye yönlendir. Müşterilerin sorularını anlamadığında nazikçe açıklama iste.

Fiyatlar:
Projenizin fiyatı projenin kapsamına göre değişir. Tek sayfa web sitesi 3000 TL'den başlar.
Fiyatlarımız her bütçeye uygundur. AI destekli tasarımlarımız sayesinde sektör normallerinin çok daha altında çok daha kaliteli tasarımlar sunuyoruz.

Tasarımını yaptığımız yüzler e-ticaret sitelerinden bazıları:
https://moleds.nl/ (Hollandaca dilinde e-ticaret sitesi)
https://www.beautyang.com/ (İngilizce dilinde e-ticaret sitesi)
https://theplantobot.com/ (İngilizce dilinde e-ticaret sitesi)

Her zaman iletişim bilgilerimizi paylaş ve daha detaylı bilgi için bizimle iletişime geçmelerini teşvik et.`
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