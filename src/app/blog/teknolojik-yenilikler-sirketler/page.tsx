"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function TeknolojikYeniliklerBlogPost() {
  // Animasyon için state'ler
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  // Paylaşım URL'leri için gerekli bilgiler
  const pageTitle = "Teknolojik Yenilikleri Yakalayan Şirketlerin Geleceği | NOVA AJANS";
  const pageUrl = "https://novaajans.com/blog/teknolojik-yenilikler-sirketler";
  
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-cyan-700 to-teal-800 opacity-90">
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
              Teknolojik <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Yenilikleri</span> Yakalayan Şirketlerin Geleceği
            </h1>
            
            <div className="flex flex-wrap items-center text-blue-100 gap-6 mb-8">
              <span className="flex items-center backdrop-blur-sm bg-white/10 rounded-full px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                22 Haziran 2024
              </span>
              
              <span className="flex items-center backdrop-blur-sm bg-white/10 rounded-full px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                NOVA AI İnovasyon Ekibi
              </span>
              
              <span className="backdrop-blur-sm bg-gradient-to-r from-teal-500/70 to-cyan-500/70 text-white font-medium px-4 py-2 rounded-full">
                Teknoloji & İnovasyon
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
                src="/images/blog/bblog2.jpg" 
                alt="Teknolojik Dönüşüm & İş Dünyası" 
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/70"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  Dijital çağda inovasyon ve teknolojik adaptasyon
                </h2>
              </div>
          </div>
          
            {/* İçerik grupları */}
            <div className="p-8">
              <section id="intro" className="mb-16">
            <div className="prose prose-lg max-w-none">
                  <p className="text-xl lead font-medium text-gray-800">
            İş dünyası hızla değişiyor ve bu değişimin merkezinde teknolojik yenilikler yer alıyor. 
            Günümüzde şirketlerin başarısı, teknolojik gelişmeleri takip etme ve bu yenilikleri iş 
                    süreçlerine entegre etme yeteneklerine bağlı.
                  </p>
                  
                  <div className="my-10 p-6 bg-gradient-to-r from-cyan-50 to-teal-50 border-l-4 border-cyan-500 rounded-r-xl">
                    <p className="text-lg font-semibold text-cyan-800 italic">
                      "Teknolojik dönüşüm, bir seçenek değil, modern iş dünyasında hayatta kalmanın zorunlu bir koşuludur."
                    </p>
                  </div>
                </div>
              </section>
              
              {/* Animasyonlu içerik kartları */}
              <section id="teknoloji-etkisi" className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-cyan-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <path d="M18 20V10M12 20V4M6 20v-6"></path>
                  </svg>
                  Teknolojik Dönüşümün İş Dünyasındaki Etkisi
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-cyan-100 hover:scale-[1.02] transform">
                    <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-800">Verimlilik Artışı</h3>
                      <p className="text-gray-600">
                        Yapay zeka ve otomasyon teknolojileri iş süreçlerini hızlandırarak verimliliği artırıyor ve 
                        operasyonel maliyetleri düşürüyor.
                      </p>
                    </div>
              </div>
          
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-teal-100 hover:scale-[1.02] transform">
                    <div className="h-2 bg-gradient-to-r from-teal-500 to-green-400"></div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-800">Müşteri Deneyimi</h3>
                      <p className="text-gray-600">
                        Veri analitiği ve kişiselleştirme teknolojileri sayesinde müşteri memnuniyeti ve 
                        sadakati yükseliyor.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-indigo-100 hover:scale-[1.02] transform">
                    <div className="h-2 bg-gradient-to-r from-indigo-500 to-blue-400"></div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-800">Yeni İş Modelleri</h3>
                      <p className="text-gray-600">
                        Dijital teknolojiler, geleneksel iş modellerini dönüştürerek yeni gelir kaynakları ve 
                        pazar fırsatları yaratıyor.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-purple-100 hover:scale-[1.02] transform">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-400"></div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-800">Rekabet Avantajı</h3>
                      <p className="text-gray-600">
                        Teknolojik yenilikleri benimseyen şirketler, pazarda öne çıkarak rekabet 
                        üstünlüğü kazanıyor.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl p-6 text-white my-10 transform transition-transform hover:scale-[1.01] shadow-xl">
                  <h3 className="text-xl font-bold mb-4">NOVA AI Teknolojik Dönüşüm Çözümleri</h3>
                  <p className="mb-6">
                    NOVA AJANS olarak, AI destekli teknolojik dönüşüm çözümlerimizle işletmenizin dijital geleceğe 
                    hazırlanmasına yardımcı oluyoruz.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="block text-3xl font-bold mb-2">250%</span>
                      <span className="text-sm">İnovasyon Hızı</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="block text-3xl font-bold mb-2">75%</span>
                      <span className="text-sm">Süreç Optimizasyonu</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="block text-3xl font-bold mb-2">130%</span>
                      <span className="text-sm">Büyüme Potansiyeli</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <span className="block text-3xl font-bold mb-2">90%</span>
                      <span className="text-sm">Veri Kullanım Verimliliği</span>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Başarı Hikayeleri */}
              <section id="basari-hikayeleri" className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-cyan-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  Teknolojik Dönüşümün Başarı Hikayeleri
                </h2>
                
                <div className="bg-gradient-to-br from-gray-50 to-cyan-50 p-8 rounded-xl border border-cyan-100 mb-10">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="md:w-1/3">
                      <div className="aspect-square bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-4 text-cyan-900">Dönüşüm Liderlerinden İlham Veren Örnekler</h3>
                      <p className="text-gray-700 mb-4">
                        Teknolojik yenilikleri başarıyla benimseyen şirketler, pazarlarını dönüştürerek rekabet avantajı elde ettiler. 
                        Bu şirketlerin ortak özelliği, teknolojiyi iş stratejilerinin merkezine yerleştirmeleri.
                      </p>
                      <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
                        <h4 className="font-semibold text-cyan-800 mb-2">Netflix'in Dijital Dönüşümü</h4>
                        <p className="text-gray-700">
                          DVD kiralama hizmetinden, yapay zeka destekli içerik önerileri sunan 
                          küresel bir streaming platformuna dönüşerek sektörünü tamamen değiştirdi.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-semibold text-cyan-800 mb-2">Amazon'un Teknoloji Yolculuğu</h4>
                        <p className="text-gray-700">
                          Başlangıçta bir online kitapçı iken, bulut bilişim, yapay zeka ve 
                          lojistik teknolojilerine yaptığı yatırımlarla dünyanın en değerli şirketlerinden biri haline geldi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-green-300 transition-colors">
                    <h3 className="text-xl font-bold mb-3 text-green-600">Starbucks'ın Dijital Stratejisi</h3>
                    <p className="text-gray-600">
                      Mobil uygulama ve veri analitiği teknolojilerini kullanarak kişiselleştirilmiş müşteri deneyimi sunarak, 
                      geleneksel bir kahve zincirini dijital bir deneyim platformuna dönüştürdü.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-red-300 transition-colors">
                    <h3 className="text-xl font-bold mb-3 text-red-600">Tesla'nın İnovasyon Yaklaşımı</h3>
                    <p className="text-gray-600">
                      Elektrikli araç teknolojisinin yanı sıra, yapay zeka ve otonom sürüş teknolojileriyle otomotiv 
                      sektörünü dönüştürerek, sadece bir araba üreticisi değil, bir teknoloji şirketi konumuna geldi.
                    </p>
                  </div>
                </div>
              </section>
              
              {/* Teknolojik Dönüşüm Stratejileri */}
              <section id="donusum-stratejileri" className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-cyan-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                  Başarılı Teknolojik Dönüşüm Stratejileri
                </h2>
                
                <div className="relative rounded-xl overflow-hidden shadow-lg mb-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-teal-600 opacity-90"></div>
                  <div className="relative p-10 text-white">
                    <h3 className="text-2xl font-bold mb-6">AI Destekli Dönüşüm Stratejileri</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                      {/* Strateji maddeleri */}
                      <div className="flex items-start">
                        <div className="bg-white/20 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Dijital Kültür Oluşturun</h4>
                          <p className="text-blue-50">
                            Şirket içinde yeniliği ve sürekli öğrenmeyi teşvik eden açık ve adaptif bir kültür yaratın
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white/20 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Teknoloji Yol Haritası</h4>
                          <p className="text-blue-50">
                            İş hedeflerinizle uyumlu, aşamalı ve ölçülebilir bir teknoloji adaptasyon planı oluşturun
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white/20 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Yetenek Yatırımı</h4>
                          <p className="text-blue-50">
                            Dijital yetenekleri işe alın ve mevcut çalışanlarınızı sürekli eğitimle destekleyin
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-white/20 p-2 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-1">Veri Stratejisi</h4>
                          <p className="text-blue-50">
                            Veri toplama, analiz ve kullanma konusunda AI destekli bir stratejik yaklaşım geliştirin
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="nova-cozumler" className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-cyan-800 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  NOVA AJANS'ın AI Destekli Teknolojik Dönüşüm Çözümleri
                </h2>
                
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="p-8 bg-gradient-to-br from-cyan-600 to-teal-700 text-white">
                      <h3 className="text-2xl font-bold mb-4">Neden NOVA AI?</h3>
                      <p className="mb-6">
                        Yapay zeka destekli teknolojik dönüşüm çözümlerimizle işletmenizi geleceğe hazırlıyoruz.
                      </p>
                      <div className="flex justify-center">
                        <Image 
                          src="/images/blog/bblog2.jpg" 
                          alt="NOVA AI Teknolojik Dönüşüm" 
                          width={200}
                          height={200}
                          className="rounded-xl object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 p-8">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">AI Destekli Teknolojik Dönüşüm Hizmetlerimiz</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-gray-200 rounded-lg p-4 transition-colors hover:border-cyan-500 hover:bg-cyan-50">
                          <h4 className="font-semibold text-cyan-700 mb-2">Dijital Dönüşüm Danışmanlığı</h4>
                          <p className="text-gray-600 text-sm">
                            Şirketinize özel teknoloji yol haritası ve aşamalı dönüşüm stratejisi oluşturma
                          </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 transition-colors hover:border-cyan-500 hover:bg-cyan-50">
                          <h4 className="font-semibold text-cyan-700 mb-2">Yapay Zeka Çözümleri</h4>
                          <p className="text-gray-600 text-sm">
                            İş süreçlerinizi optimize eden, verimliliği artıran özel AI modelleri ve uygulamaları
                          </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 transition-colors hover:border-cyan-500 hover:bg-cyan-50">
                          <h4 className="font-semibold text-cyan-700 mb-2">Veri Analizi ve İş Zekası</h4>
                          <p className="text-gray-600 text-sm">
                            Büyük veri setlerinden anlamlı içgörüler çıkaran AI destekli analitik platformlar
                          </p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4 transition-colors hover:border-cyan-500 hover:bg-cyan-50">
                          <h4 className="font-semibold text-cyan-700 mb-2">Dijital Deneyim Dönüşümü</h4>
                          <p className="text-gray-600 text-sm">
                            Müşteri deneyimini iyileştiren, etkileşim ve satışları artıran AI destekli dijital çözümler
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <Link href="/hizmetler/ai-teknolojik-donusum" className="inline-block bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-medium py-2 px-6 rounded-full hover:shadow-lg transition-all">
                          AI Teknolojik Dönüşüm Hizmetlerimiz
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