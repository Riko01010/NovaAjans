"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function AIYazilimlarBlogPost() {
  // Animasyon için state'ler
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  // Paylaşım URL'leri için gerekli bilgiler
  const pageTitle = "Geleceğin Yapay Zeka Yazılımları | NOVA AJANS";
  const pageUrl = "https://novaajans.com/blog/gelecek-ai-yazilimlar";
  
  useEffect(() => {
    setIsVisible(true);
    
    // Scroll gözlemcisi oluştur
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });
    
    // Tüm bölümleri izle
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Paylaşım fonksiyonları
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`, '_blank');
  };
  
  const shareOnX = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`, '_blank');
  };
  
  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`, '_blank');
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Bölümü */}
      <div className="relative overflow-hidden">
        {/* Arkaplan desenli gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 opacity-90">
          <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        </div>
        
        <div className="container relative mx-auto px-6 py-28 max-w-6xl">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link href="/blog" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-all hover:gap-2 backdrop-blur-sm bg-white/10 rounded-full py-1 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
              Blog Ana Sayfası
        </Link>
          
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Geleceğin <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300">Yapay Zeka</span> Yazılımları
            </h1>
            
            <div className="flex flex-wrap items-center text-blue-100 gap-6 mb-8">
              <span className="flex items-center backdrop-blur-sm bg-white/10 rounded-full px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                15 Haziran 2024
              </span>
              
              <span className="flex items-center backdrop-blur-sm bg-white/10 rounded-full px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                NOVA AI Araştırma Ekibi
              </span>
              
              <span className="backdrop-blur-sm bg-gradient-to-r from-blue-500/70 to-purple-500/70 text-white font-medium px-4 py-2 rounded-full">
                Yapay Zeka & Web Geliştirme
              </span>
            </div>
          </div>
        </div>
      </div>
        
      {/* İçerik Bölümü */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <article className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Ana görsel */}
            <div className="relative h-[500px] w-full overflow-hidden">
              <Image 
                src="/images/blog/bblog1.jpg" 
                alt="AI & Yazılım Geleceği" 
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/70"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  Yazılım dünyasını dönüştüren AI teknolojileri
                </h2>
              </div>
          </div>
          
            {/* İçerik grupları */}
            <div className="p-8">
              <section id="intro" className="mb-16">
            <div className="prose prose-lg max-w-none">
                  <p className="text-xl lead font-medium text-gray-800">
            Yazılım geliştirme dünyası hızla değişiyor ve yapay zeka (AI) bu dönüşümün merkezinde yer alıyor. 
            Geleneksel yazılım geliştirme süreçleri, AI destekli araçların ve metodolojilerin ortaya çıkmasıyla 
                    köklü bir değişim geçiriyor.
                  </p>
                  
                  <div className="my-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-xl">
                    <p className="text-lg font-semibold text-blue-800 italic">
                      "Yapay zeka, yazılım geliştirme süreçlerini otomatikleştirerek, geliştiricilerin daha yaratıcı ve stratejik görevlere odaklanmasını sağlıyor."
                    </p>
                  </div>
                </div>
              </section>
              
              {/* Animasyonlu içerik kartları */}
              <section id="ai-yazilim" className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-indigo-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                  AI Destekli Kod Üretimi
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-blue-100 hover:scale-[1.02] transform">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-800">Kod Asistanları</h3>
                      <p className="text-gray-600">
                        GitHub Copilot, Amazon CodeWhisperer ve Tabnine gibi AI destekli kod asistanları, 
                        geliştiricilerin kod yazma süreçlerini hızlandırıyor.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-purple-100 hover:scale-[1.02] transform">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-400"></div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-800">Otomatik Optimizasyon</h3>
                      <p className="text-gray-600">
                        AI destekli araçlar, kod kalitesini ve performansını otomatik olarak iyileştirerek, 
                        daha verimli ve hatasız kodlar üretilmesini sağlıyor.
                </p>
              </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl p-6 text-white my-10 transform transition-transform hover:scale-[1.01] shadow-xl">
                  <h3 className="text-xl font-bold mb-4">NOVA AI Kod Üretim Çözümleri</h3>
                  <p className="mb-6">
                    NOVA AJANS olarak, AI destekli kod üretim teknolojilerimizle müşterilerimizin projelerini hızlandırıyor, 
                    kaliteyi artırıyor ve maliyetleri düşürüyoruz.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="block text-3xl font-bold mb-2">85%</span>
                      <span className="text-sm">Daha Hızlı Geliştirme</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="block text-3xl font-bold mb-2">60%</span>
                      <span className="text-sm">Daha Az Hata</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="block text-3xl font-bold mb-2">40%</span>
                      <span className="text-sm">Maliyet Tasarrufu</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="block text-3xl font-bold mb-2">95%</span>
                      <span className="text-sm">Müşteri Memnuniyeti</span>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Diğer bölümler */}
              <section id="kodsuz-platformlar" className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-indigo-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                  Düşük Kodlu ve Kodsuz Platformlar
                </h2>
                
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl border border-blue-100 mb-10">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="md:w-1/3">
                      <div className="aspect-square bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                          <polyline points="13 2 13 9 20 9"></polyline>
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-4 text-indigo-900">Herkes İçin Web Geliştirme</h3>
                      <p className="text-gray-700 mb-4">
            AI teknolojilerinin gelişmesiyle birlikte, düşük kodlu (low-code) ve kodsuz (no-code) platformlar 
            da evrim geçiriyor. Bu platformlar, teknik bilgisi sınırlı olan kullanıcıların bile karmaşık 
                        uygulamalar geliştirmesine olanak tanıyor.
                      </p>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-semibold text-indigo-800 mb-2">NOVA AI No-Code Avantajları:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          <li>Doğal dil komutlarıyla web uygulamaları oluşturma</li>
                          <li>AI destekli kullanıcı arayüzü tasarımı</li>
                          <li>Otomatik veritabanı modelleme ve yönetimi</li>
                          <li>İş süreçlerinin akıllı otomasyonu</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <section id="akilli-test" className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-indigo-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  Akıllı Test ve Kalite Güvencesi
                </h2>
                
                <div className="relative rounded-xl overflow-hidden shadow-lg mb-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
                  <div className="relative p-10 text-white">
                    <h3 className="text-2xl font-bold mb-6">Test Otomasyonunda Devrim</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                      {/* Test avantajları */}
                      <div className="flex items-start">
                        <div className="bg-white/20 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Otomatik Test Senaryoları</h4>
                          <p className="text-blue-50">
                            Kullanıcı deneyiminden yola çıkarak AI tarafından oluşturulan kapsamlı test senaryoları
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white/20 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Proaktif Hata Tespiti</h4>
                          <p className="text-blue-50">
                            Potansiyel hataları ve güvenlik açıklarını daha ortaya çıkmadan belirleyen AI modelleri
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white/20 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">AI Destekli Kod İncelemesi</h4>
                          <p className="text-blue-50">
                            Kod kalitesi ve güvenliğini otomatik olarak değerlendiren akıllı analiz sistemleri
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white/20 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Performans Optimizasyonu</h4>
                          <p className="text-blue-50">
                            Web performansını sürekli izleyen ve iyileştiren otomatik optimizasyon sistemleri
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="nova-cozumler" className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-indigo-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  NOVA AJANS'ın AI Destekli Yazılım Çözümleri
                </h2>
                
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="p-8 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
                      <h3 className="text-2xl font-bold mb-4">Neden NOVA AI?</h3>
                      <p className="mb-6">
                        Yapay zeka destekli web geliştirme çözümlerimizle işinizi geleceğe taşıyoruz.
                      </p>
                      <div className="flex justify-center">
                        <Image 
                          src="/images/blog/bblog1.jpg" 
                          alt="NOVA AI Çözümleri" 
                          width={200}
                          height={200}
                          className="rounded-xl object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">AI Destekli Çözümlerimiz</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-gray-200 rounded-lg p-4 transition-colors hover:border-indigo-500 hover:bg-indigo-50">
                          <h4 className="font-semibold text-indigo-700 mb-2">AI Web Tasarımı</h4>
                          <p className="text-gray-600 text-sm">
                            Marka kimliğinize ve hedef kitlenize özel, AI tarafından optimize edilmiş web tasarımları
                          </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 transition-colors hover:border-indigo-500 hover:bg-indigo-50">
                          <h4 className="font-semibold text-indigo-700 mb-2">AI İçerik Yönetimi</h4>
                          <p className="text-gray-600 text-sm">
                            SEO dostu, dönüşüm odaklı, AI destekli akıllı içerik yönetim sistemleri
                          </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 transition-colors hover:border-indigo-500 hover:bg-indigo-50">
                          <h4 className="font-semibold text-indigo-700 mb-2">Akıllı E-Ticaret</h4>
                          <p className="text-gray-600 text-sm">
                            Kullanıcı davranışlarını analiz eden ve kişiselleştirilmiş alışveriş deneyimi sunan AI çözümleri
                          </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 transition-colors hover:border-indigo-500 hover:bg-indigo-50">
                          <h4 className="font-semibold text-indigo-700 mb-2">AI Chatbot Entegrasyonu</h4>
                          <p className="text-gray-600 text-sm">
                            7/24 müşteri desteği sağlayan, sürekli öğrenen AI chatbot sistemleri
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <Link href="/hizmetler/ai-web-gelistirme" className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium py-2 px-6 rounded-full hover:shadow-lg transition-all">
                          AI Web Geliştirme Hizmetlerimiz
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            
            {/* Paylaşım Bölümü */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Bu içeriği paylaşın</h3>
              <div className="flex flex-wrap gap-3">
                <button onClick={shareOnFacebook} className="flex items-center gap-2 bg-[#1877F2] text-white px-5 py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105 transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
                <button onClick={shareOnX} className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105 transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                  Twitter
                </button>
                <button onClick={shareOnLinkedIn} className="flex items-center gap-2 bg-[#0077B5] text-white px-5 py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105 transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </button>
              </div>
            </div>
          </article>
          
          {/* Diğer Yazılar */}
          <div className="mt-12 mb-8">
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Diğer AI İçeriklerimiz</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/blog/teknolojik-yenilikler-sirketler" className="group">
                <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 group-hover:shadow-xl border border-gray-100">
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden relative">
                    <Image 
                      src="/images/blog/bblog1.jpg" 
                      alt="Teknolojik Yenilikler" 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        Teknoloji
                      </span>
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors">
                    Teknolojik Yenilikleri Yakalayan Şirketlerin Geleceği
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Teknolojik dönüşüme ayak uyduran şirketlerin rekabet avantajı ve gelecekte nasıl öne çıkacakları...
                  </p>
                </div>
              </Link>
              <Link href="/blog/dijital-reklamin-onemi" className="group">
                <div className="bg-gray-50 rounded-xl p-4 transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-md">
                  <h4 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Dijital Reklamın Önemi ve Etkili Stratejiler</h4>
                  <p className="text-gray-600 text-sm">Modern iş dünyasında dijital reklamın kritik rolü ve markanızı öne çıkaracak etkili dijital reklam stratejileri...</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 