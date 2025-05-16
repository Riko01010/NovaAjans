"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function DijitalReklamBlogPost() {
  // Animasyon için state'ler
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  // Paylaşım URL'leri için gerekli bilgiler
  const pageTitle = "Dijital Reklamın Önemi ve Etkili Stratejiler | NOVA AJANS";
  const pageUrl = "https://novaajans.com/blog/dijital-reklamin-onemi";
  
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-purple-700 to-pink-800 opacity-90">
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
              Dijital <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-300">Reklamın</span> Önemi ve Stratejileri
            </h1>
            
            <div className="flex flex-wrap items-center text-blue-100 gap-6 mb-8">
              <span className="flex items-center backdrop-blur-sm bg-white/10 rounded-full px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                29 Haziran 2024
              </span>
              
              <span className="flex items-center backdrop-blur-sm bg-white/10 rounded-full px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                NOVA AI Pazarlama Ekibi
              </span>
              
              <span className="backdrop-blur-sm bg-gradient-to-r from-pink-500/70 to-purple-500/70 text-white font-medium px-4 py-2 rounded-full">
                Dijital Pazarlama & AI
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
                src="/images/blog/bblog3.jpg" 
                alt="Dijital Reklam & Pazarlama" 
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/70"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  Teknoloji ile dönüşen dijital reklam stratejileri
                </h2>
              </div>
          </div>
          
            {/* İçerik grupları */}
            <div className="p-8">
              <section id="intro" className="mb-16">
            <div className="prose prose-lg max-w-none">
                  <p className="text-xl lead font-medium text-gray-800">
            Dijital teknolojilerin yaygınlaşmasıyla birlikte, reklam dünyası da köklü bir dönüşüm geçirdi. 
                    Geleneksel reklam kanalları yerini dijital platformlara bırakırken, 
                    işletmeler için dijital reklamın önemi her geçen gün artıyor.
          </p>
              
                  <div className="my-10 p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 rounded-r-xl">
                    <p className="text-lg font-semibold text-purple-800 italic">
                  "Dijital reklam, hedef kitlenize doğru zamanda, doğru yerde ve doğru mesajla ulaşmanın en etkili yoludur."
                </p>
              </div>
                </div>
              </section>
              
              {/* Animasyonlu içerik kartları */}
              <section id="avantajlar" className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-purple-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  Dijital Reklamın Avantajları
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-pink-100 hover:scale-[1.02] transform">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-400"></div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-800">Hassas Hedefleme</h3>
                      <p className="text-gray-600">
                        Dijital reklamlar, demografik özellikler, ilgi alanları, davranışlar ve konum gibi faktörlere 
                        göre çok daha hassas bir şekilde hedeflenebilir.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-blue-100 hover:scale-[1.02] transform">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-800">Ölçülebilirlik</h3>
                      <p className="text-gray-600">
                        Dijital reklamların performansı gerçek zamanlı olarak izlenebilir, 
                        bu da kampanyaların hızla optimize edilmesine olanak tanır.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-green-100 hover:scale-[1.02] transform">
                    <div className="h-2 bg-gradient-to-r from-green-500 to-teal-400"></div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-800">Maliyet Etkinliği</h3>
                      <p className="text-gray-600">
                        Dijital reklamlar, geleneksel reklam kanallarına göre genellikle daha düşük maliyetlidir ve 
                        daha yüksek ROI (Yatırım Getirisi) sağlar.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-orange-100 hover:scale-[1.02] transform">
                    <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-400"></div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-800">Etkileşim İmkanı</h3>
                      <p className="text-gray-600">
                        Dijital reklamlar, tüketicilerle doğrudan etkileşim kurma fırsatı sunar ve markanızla 
                        daha güçlü bağlar oluşturmanızı sağlar.
                      </p>
                    </div>
                  </div>
                </div>
          
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white my-10 transform transition-transform hover:scale-[1.01] shadow-xl">
                  <h3 className="text-xl font-bold mb-4">NOVA AI Dijital Reklam Çözümleri</h3>
                  <p className="mb-6">
                    NOVA AJANS olarak, AI destekli dijital reklam çözümlerimizle kampanyalarınızı güçlendiriyor, 
                    hedefleme hassasiyetini artırıyor ve daha yüksek dönüşümler sağlıyoruz.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="block text-3xl font-bold mb-2">320%</span>
                      <span className="text-sm">Daha Fazla Etkileşim</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="block text-3xl font-bold mb-2">180%</span>
                      <span className="text-sm">ROI Artışı</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="block text-3xl font-bold mb-2">45%</span>
                      <span className="text-sm">Düşük CPC</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="block text-3xl font-bold mb-2">98%</span>
                      <span className="text-sm">Müşteri Memnuniyeti</span>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Dijital Reklam Kanalları */}
              <section id="reklam-kanallari" className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-purple-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                  Etkili Dijital Reklam Kanalları
                </h2>
                
                <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-8 rounded-xl border border-purple-100 mb-10">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="md:w-1/3">
                      <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-4 text-purple-900">AI ile Güçlendirilmiş Reklam Kanalları</h3>
                      <p className="text-gray-700 mb-4">
                        Başarılı bir dijital reklam stratejisi için, doğru kanalları seçmek ve bu kanalları etkin bir şekilde 
                        kullanmak önemli. NOVA AI olarak, yapay zeka destekli reklam kanal optimizasyonu sunuyoruz.
                      </p>
                      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                        <h4 className="font-semibold text-purple-800 mb-2">Arama Motoru Reklamları (SEM)</h4>
                        <p className="text-gray-700">
                          AI destekli anahtar kelime analizi ve teklif optimizasyonu ile Google Ads kampanyalarınızdan 
                          maksimum dönüşüm elde edin.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-semibold text-purple-800 mb-2">Sosyal Medya Reklamları</h4>
                        <p className="text-gray-700">
                          Yapay zeka algoritmalarımızla, hedef kitlenize en uygun sosyal medya platformlarını belirler ve 
                          içerik stratejinizi optimize ederiz.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
          
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
                    <h3 className="text-xl font-bold mb-3 text-blue-600">Görüntülü Reklamlar</h3>
                    <p className="text-gray-600">
            Google Display Network ve diğer reklam ağları aracılığıyla, web sitelerinde, uygulamalarda ve 
            videolarda görsel reklamlar gösterebilirsiniz. Bu reklamlar, marka bilinirliğini artırmak için 
            özellikle etkilidir.
          </p>
                </div>
          
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-red-300 transition-colors">
                    <h3 className="text-xl font-bold mb-3 text-red-600">Video Reklamları</h3>
                    <p className="text-gray-600">
            YouTube ve diğer video platformlarında gösterilen reklamlar, karmaşık mesajları iletmek ve duygusal 
            bağ kurmak için mükemmel bir araçtır. Video içeriği, tüketicilerin dikkatini çekmede ve akılda 
            kalıcılığı artırmada oldukça etkilidir.
          </p>
                </div>
              </div>
              </section>
              
              {/* Dijital Reklam Stratejileri */}
              <section id="dijital-stratejiler" className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-purple-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                  Etkili Dijital Reklam Stratejileri
                </h2>
                
                <div className="relative rounded-xl overflow-hidden shadow-lg mb-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90"></div>
                  <div className="relative p-10 text-white">
                    <h3 className="text-2xl font-bold mb-6">AI Destekli Reklam Stratejileri</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                      {/* Strateji maddeleri */}
                      <div className="flex items-start">
                        <div className="bg-white/20 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="22" y1="12" x2="18" y2="12"></line>
                            <line x1="6" y1="12" x2="2" y2="12"></line>
                            <line x1="12" y1="6" x2="12" y2="2"></line>
                            <line x1="12" y1="22" x2="12" y2="18"></line>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Hassas Hedef Kitle Analizi</h4>
                          <p className="text-blue-50">
                            Yapay zeka algoritmaları ile hedef kitlenizi mikro segmentlere ayırarak maksimum kişiselleştirme
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white/20 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 20v-6M6 20V10M18 20V4"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Dinamik İçerik Optimizasyonu</h4>
                          <p className="text-blue-50">
                            Kullanıcı davranışına göre gerçek zamanlı olarak değişen ve optimize olan reklam içerikleri
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white/20 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Çok Kanallı Entegrasyon</h4>
                          <p className="text-blue-50">
                            Tüm dijital kanallarınızı koordine eden ve sinerji yaratan entegre pazarlama stratejileri
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white/20 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Hikaye Anlatımı ve İçerik Stratejisi</h4>
                          <p className="text-blue-50">
                            AI ile oluşturulan, hedef kitlenizle duygusal bağ kuran içerik ve hikaye stratejileri
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="nova-cozumler" className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-purple-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  NOVA AJANS'ın AI Destekli Dijital Reklam Çözümleri
                </h2>
                
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="p-8 bg-gradient-to-br from-purple-600 to-pink-700 text-white">
                      <h3 className="text-2xl font-bold mb-4">Neden NOVA AI?</h3>
                      <p className="mb-6">
                        Yapay zeka destekli dijital reklam çözümlerimizle markanızı rakiplerinizden öne çıkarıyoruz.
                      </p>
                      <div className="flex justify-center">
                        <Image 
                          src="/images/blog/bblog3.jpg" 
                          alt="NOVA AI Dijital Reklam" 
                          width={200}
                          height={200}
                          className="rounded-xl object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">AI Destekli Dijital Reklam Hizmetlerimiz</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-gray-200 rounded-lg p-4 transition-colors hover:border-purple-500 hover:bg-purple-50">
                          <h4 className="font-semibold text-purple-700 mb-2">Akıllı SEM Yönetimi</h4>
                          <p className="text-gray-600 text-sm">
                            Yapay zeka ile optimize edilen ve sürekli öğrenen arama motoru pazarlama kampanyaları
                          </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 transition-colors hover:border-purple-500 hover:bg-purple-50">
                          <h4 className="font-semibold text-purple-700 mb-2">Kişiselleştirilmiş Sosyal Medya Reklamları</h4>
                          <p className="text-gray-600 text-sm">
                            Her bir kullanıcı segmenti için özel olarak tasarlanmış sosyal medya içerikleri ve reklamları
                          </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 transition-colors hover:border-purple-500 hover:bg-purple-50">
                          <h4 className="font-semibold text-purple-700 mb-2">Programatik Reklam Yönetimi</h4>
                          <p className="text-gray-600 text-sm">
                            Gerçek zamanlı veri ve yapay zeka algoritmaları ile otomatik optimizasyon sağlayan reklam sistemleri
                          </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 transition-colors hover:border-purple-500 hover:bg-purple-50">
                          <h4 className="font-semibold text-purple-700 mb-2">Gelişmiş Performans Analizi</h4>
                          <p className="text-gray-600 text-sm">
                            Kampanya verilerinizi derinlemesine analiz eden ve actionable insights sunan AI raporlama sistemleri
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <Link href="/hizmetler/ai-dijital-reklam" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-2 px-6 rounded-full hover:shadow-lg transition-all">
                          AI Dijital Reklam Hizmetlerimiz
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4">Bu içerik size faydalı olduysa paylaşın!</h3>
              <div className="flex flex-wrap gap-3">
                <button onClick={shareOnFacebook} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook'ta Paylaş
                </button>
                <button onClick={shareOnX} className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                  </svg>
                  X'de Paylaş
                </button>
                <button onClick={shareOnLinkedIn} className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn'de Paylaş
                </button>
              </div>
            </div>
          </article>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Diğer Blog Yazılarımız</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/gelecek-ai-yazilimlar" className="group">
                <div className="bg-gray-50 rounded-xl p-4 transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-md">
                  <h4 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Geleceğin AI Kullanarak Oluşturulan Yazılımları</h4>
                  <p className="text-gray-600 text-sm">Yapay zeka teknolojilerinin yazılım geliştirme süreçlerini nasıl dönüştürdüğünü ve geleceğin yazılım dünyasını...</p>
                </div>
              </Link>
              <Link href="/blog/teknolojik-yenilikler-sirketler" className="group">
                <div className="bg-gray-50 rounded-xl p-4 transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-md">
                  <h4 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Teknolojik Yenilikleri Yakalayan Şirketlerin Geleceği</h4>
                  <p className="text-gray-600 text-sm">Teknolojik dönüşüme ayak uyduran şirketlerin rekabet avantajı ve gelecekte nasıl öne çıkacakları...</p>
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