'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GroqTestPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [rawResponse, setRawResponse] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mesajları en alta kaydır
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Mesaj gönderme fonksiyonu
  const sendMessage = async () => {
    if (!input.trim()) return;
    
    // Kullanıcı mesajını ekle
    const userMessage = { role: 'user', content: input, parts: [{ type: 'text', text: input }] };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);
    setApiResponse(null);
    setRawResponse('');

    try {
      // API'ye istek gönder
      const response = await fetch('/api/groq/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          id: Date.now().toString(),
        }),
      });

      // Ham yanıtı kaydet
      const responseText = await response.text();
      setRawResponse(responseText);

      if (!response.ok) {
        throw new Error(`API error: ${response.status} - ${responseText}`);
      }

      // Stream yanıtını işle
      const reader = responseText.split('\n\n');
      let fullText = '';

      for (const line of reader) {
        if (line.startsWith('data: ')) {
          const data = line.substring(6);
          if (data === '[DONE]') {
            break;
          }
          
          try {
            const parsed = JSON.parse(data);
            if (parsed.text) {
              fullText += parsed.text;
              setApiResponse((prev: any) => ({
                ...prev,
                text: fullText,
              }));
            }
            if (parsed.error) {
              setError(parsed.error);
            }
          } catch (e: unknown) {
            console.error('JSON parse error:', e, data);
          }
        }
      }

      // Asistan mesajını ekle
      if (fullText) {
        setMessages((prev) => [...prev, { role: 'assistant', content: fullText }]);
      }
    } catch (err: any) {
      setError(err.message || 'Bir hata oluştu');
      console.error('Error sending message:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <h1 className="text-2xl font-bold mb-6">Groq API Test Sayfası</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>API Yanıtı</CardTitle>
          </CardHeader>
          <CardContent>
            {apiResponse ? (
              <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-60">
                {JSON.stringify(apiResponse, null, 2)}
              </pre>
            ) : (
              <p className="text-gray-500">Henüz yanıt yok</p>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Ham Yanıt</CardTitle>
          </CardHeader>
          <CardContent>
            {rawResponse ? (
              <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-60">
                {rawResponse}
              </pre>
            ) : (
              <p className="text-gray-500">Henüz ham yanıt yok</p>
            )}
          </CardContent>
        </Card>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <p className="font-bold">Hata!</p>
          <p>{error}</p>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                msg.role === 'user' ? 'bg-blue-100 ml-auto max-w-[80%]' : 'bg-gray-100 mr-auto max-w-[80%]'
              }`}
            >
              <p className="text-sm font-semibold">{msg.role === 'user' ? 'Sen' : 'Asistan'}</p>
              <p>{msg.content}</p>
              {msg.parts && (
                <details className="mt-2">
                  <summary className="text-xs text-gray-500 cursor-pointer">Parts detayları</summary>
                  <pre className="text-xs bg-gray-50 p-2 mt-1 rounded overflow-auto max-h-40">
                    {JSON.stringify(msg.parts, null, 2)}
                  </pre>
                </details>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && sendMessage()}
            placeholder="Bir mesaj yazın..."
            disabled={loading}
            className="flex-1"
          />
          <Button onClick={sendMessage} disabled={loading}>
            {loading ? 'Gönderiliyor...' : 'Gönder'}
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Debug Bilgileri</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">Gönderilen Mesajlar:</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-60 mb-4">
            {JSON.stringify(messages, null, 2)}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
} 