"use client";

import { useState, useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import { Send, Bot, User, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ChatComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  // Generate a unique chat ID for this user if one doesn't exist
  const [chatId] = useState(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      // Try to get existing chat ID from localStorage
      const storedChatId = localStorage.getItem('nova_chat_id');
      if (storedChatId) return storedChatId;
      
      // If no chat ID exists, create a new one
      const newChatId = `chat_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      localStorage.setItem('nova_chat_id', newChatId);
      return newChatId;
    }
    return 'default_chat_id';
  });

  // Load initial messages from localStorage if they exist
  const initialMessages = typeof window !== 'undefined' 
    ? JSON.parse(localStorage.getItem('nova_chat_messages') || '[]') 
    : [];
  
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/groq/chat',
    id: chatId,
    initialMessages,
  });

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0 && typeof window !== 'undefined') {
      localStorage.setItem('nova_chat_messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Sohbet açıldığında veya yeni mesaj geldiğinde otomatik kaydırma
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // Function to clear chat history
  const clearChatHistory = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('nova_chat_messages');
      // Force reload the page to reset the chat state
      window.location.reload();
    }
  };

  return (
    <>
      {/* Chat butonu - Daha belirgin ve animasyonlu */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="shadow-lg hover:shadow-xl transition-shadow"
        >
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full hover:from-indigo-700 hover:to-blue-700 transition-all z-50 flex items-center justify-center p-0 overflow-hidden"
            aria-label="AI Asistan ile konuşun"
            style={{ width: '70px', height: '70px' }}
          >
            <Image 
              src="/images/ai-asist.png" 
              alt="AI Asistan" 
              width={70}
              height={70}
              className="w-full h-full object-cover"
            />
          </button>
        </motion.div>
      </div>

      {/* Chat penceresi */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <Bot size={20} className="mr-2" />
              <h3 className="font-medium">NOVA AI Asistan</h3>
            </div>
            <div className="flex items-center">
              {messages.length > 0 && (
                <button 
                  onClick={clearChatHistory}
                  className="text-white hover:text-gray-200 mr-3"
                  aria-label="Konuşmayı Temizle"
                  title="Konuşmayı Temizle"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                </button>
              )}
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
                aria-label="Kapat"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          {/* Mesajlar */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
          >
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <Bot size={40} className="mx-auto mb-2 text-indigo-400" />
                <p>Merhaba! Ben NOVA AJANSAI&apos;ın asistanıyım.</p>
                <p className="text-sm mt-1">Ajansımız hakkında bir sorunuz mu var?</p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`
                      max-w-[80%] rounded-lg px-4 py-2 flex items-start gap-2
                      ${message.role === 'user' 
                        ? 'bg-indigo-100 text-gray-800' 
                        : 'bg-gray-100 text-gray-800'}
                    `}
                  >
                    {message.role !== 'user' && (
                      <Bot size={18} className="mt-1 text-indigo-600 flex-shrink-0" />
                    )}
                    <div>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    {message.role === 'user' && (
                      <User size={18} className="mt-1 text-indigo-600 flex-shrink-0" />
                    )}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[80%] flex items-center">
                  <Bot size={18} className="text-indigo-600 mr-2" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Input alanı */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Mesajınızı yazın..."
                className="flex-1 bg-gray-100 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white text-black placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-indigo-600 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors disabled:bg-indigo-400"
                aria-label="Mesajı gönder"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
} 