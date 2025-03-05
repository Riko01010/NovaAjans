import React from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Search, TrendingUp, BarChart2, Globe, Cpu, LineChart } from 'lucide-react';

export const metadata = {
  title: 'AI Destekli SEO Optimizasyonu Hizmetleri - NOVA AJANS',
  description: 'Yapay zeka teknolojileri ile güçlendirilmiş SEO optimizasyonu hizmetlerimizle arama motorlarında üst sıralarda yer alın ve organik trafiğinizi artırın.',
};

export default function SEOOptimizasyonuPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/pattern-circuit.svg')] bg-repeat"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Destekli SEO Optimizasyonu</h1>
              <p className="text-xl mb-8">
                Yapay zeka teknolojileri ile güçlendirilmiş SEO optimizasyonu hizmetlerimizle arama motorlarında 
                üst sıralarda yer alın ve organik trafiğinizi artırın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#nasil-calisir" className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors">
                  Nasıl Çalışır?
                </Link>
                <Link href="/#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 px-6 py-3 rounded-md font-semibold transition-colors">
                  Teklif Alın
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Avantajlar Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AI Destekli SEO'nun Avantajları</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Search size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Daha Akıllı Anahtar Kelime Analizi</h3>
                <p className="text-gray-600">
                  Yapay zeka algoritmaları, sektörünüzdeki en değerli anahtar kelimeleri belirler ve rekabet 
                  analizini otomatik olarak yapar. Bu sayede, en yüksek dönüşüm potansiyeline sahip anahtar 
                  kelimelere odaklanabilirsiniz.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <TrendingUp size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Daha Hızlı Sonuçlar</h3>
                <p className="text-gray-600">
                  Geleneksel SEO yöntemlerine göre, AI destekli SEO stratejilerimiz daha hızlı sonuç verir. 
                  Sürekli öğrenen algoritmalarımız, arama motorlarındaki değişikliklere anında adapte olur.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BarChart2 size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Veri Odaklı Optimizasyon</h3>
                <p className="text-gray-600">
                  AI sistemlerimiz, web sitenizin performansını sürekli izler ve iyileştirme önerileri sunar. 
                  Veri odaklı yaklaşımımız, SEO stratejinizin sürekli olarak optimize edilmesini sağlar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nasıl Çalışır Section */}
        <section id="nasil-calisir" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AI Destekli SEO Nasıl Çalışır?</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-green-600 text-white p-8 rounded-lg md:w-1/3 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <Search size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Kapsamlı Analiz</h3>
                    <p>Web sitenizin ve rakiplerinizin detaylı analizi</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold text-green-700 mb-2">AI Destekli Site Analizi</h4>
                    <p className="text-gray-700 mb-4">
                      Yapay zeka algoritmalarımız, web sitenizin teknik yapısını, içerik kalitesini ve kullanıcı 
                      deneyimini analiz eder. Aynı zamanda, rakiplerinizin SEO stratejilerini inceleyerek, 
                      sektörünüzdeki en iyi uygulamaları belirler.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Teknik SEO sorunlarının tespiti</li>
                      <li>İçerik kalitesi ve alaka düzeyi analizi</li>
                      <li>Rakip analizi ve benchmark çalışması</li>
                      <li>Kullanıcı deneyimi ve site hızı değerlendirmesi</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-green-600 text-white p-8 rounded-lg md:w-1/3 flex flex-col items-center text-center md:order-2">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <Globe size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Strateji Geliştirme</h3>
                    <p>Veriye dayalı SEO stratejisi oluşturma</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold text-green-700 mb-2">AI Destekli SEO Stratejisi</h4>
                    <p className="text-gray-700 mb-4">
                      Analiz sonuçlarına dayanarak, yapay zeka algoritmalarımız işletmeniz için özelleştirilmiş 
                      bir SEO stratejisi geliştirir. Bu strateji, anahtar kelime hedefleme, içerik planlaması, 
                      teknik iyileştirmeler ve bağlantı kurma taktiklerini içerir.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Anahtar kelime fırsat analizi</li>
                      <li>İçerik stratejisi ve yol haritası</li>
                      <li>Teknik SEO iyileştirme planı</li>
                      <li>Bağlantı kurma stratejisi</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-green-600 text-white p-8 rounded-lg md:w-1/3 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <Cpu size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Uygulama ve Optimizasyon</h3>
                    <p>Stratejinin uygulanması ve sürekli iyileştirme</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold text-green-700 mb-2">AI Destekli Uygulama ve İzleme</h4>
                    <p className="text-gray-700 mb-4">
                      SEO stratejinizi uygular ve sonuçları sürekli olarak izleriz. Yapay zeka sistemlerimiz, 
                      performans verilerini analiz ederek stratejinizi sürekli olarak optimize eder ve arama 
                      motorlarındaki değişikliklere hızla adapte olur.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Teknik SEO iyileştirmelerinin uygulanması</li>
                      <li>İçerik optimizasyonu ve üretimi</li>
                      <li>Bağlantı kurma çalışmaları</li>
                      <li>Performans izleme ve raporlama</li>
                      <li>Sürekli optimizasyon ve adaptasyon</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hizmetler Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">SEO Optimizasyonu Hizmetlerimiz</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 opacity-20 rounded-md"></div>
                  <h3 className="text-xl font-bold p-4 relative z-10">Teknik SEO Optimizasyonu</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Web sitenizin teknik altyapısını optimize ederek, arama motorlarının sitenizi daha iyi 
                  anlamasını ve indekslemesini sağlıyoruz. AI destekli araçlarımız, teknik SEO sorunlarını 
                  otomatik olarak tespit eder ve çözüm önerileri sunar.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Site hızı optimizasyonu
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Mobil uyumluluk iyileştirmeleri
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Yapısal veri işaretlemesi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Crawl bütçesi optimizasyonu
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 opacity-20 rounded-md"></div>
                  <h3 className="text-xl font-bold p-4 relative z-10">İçerik Optimizasyonu</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  AI destekli içerik analizi araçlarımızla, hedef kitlenizi etkileyecek ve arama motorlarında 
                  üst sıralarda yer alacak içerikler üretiyoruz. Semantik SEO yaklaşımımız, içeriklerinizin 
                  alaka düzeyini ve kalitesini artırır.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Anahtar kelime araştırması
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> İçerik optimizasyonu
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> SEO odaklı içerik üretimi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Semantik SEO stratejileri
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 opacity-20 rounded-md"></div>
                  <h3 className="text-xl font-bold p-4 relative z-10">Bağlantı Kurma Stratejileri</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  AI destekli bağlantı analizi araçlarımızla, web sitenizin otoritesini artıracak kaliteli 
                  bağlantı fırsatlarını belirliyoruz. Doğal ve sürdürülebilir bağlantı kurma stratejilerimiz, 
                  sitenizin arama motorlarındaki sıralamasını yükseltir.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Bağlantı profili analizi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Rakip bağlantı analizi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Kaliteli bağlantı fırsatları
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> İçerik pazarlama stratejileri
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sonuçlar Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Ölçülebilir Sonuçlar</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-700">Veri Odaklı SEO Yaklaşımı</h3>
                <p className="text-gray-700 mb-6">
                  AI destekli SEO hizmetlerimiz, ölçülebilir sonuçlar sunar. Her adımda performansı izler ve 
                  stratejinizi sürekli olarak optimize ederiz. Düzenli raporlarla, SEO çalışmalarınızın 
                  ROI'sini net bir şekilde görebilirsiniz.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                      <LineChart size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Organik Trafik Artışı</h4>
                      <p className="text-gray-600">Müşterilerimiz ortalama %150 organik trafik artışı yaşıyor</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                      <LineChart size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Dönüşüm Oranı İyileştirmesi</h4>
                      <p className="text-gray-600">Organik trafikten gelen dönüşümlerde %40'a varan artış</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                      <LineChart size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Anahtar Kelime Sıralamaları</h4>
                      <p className="text-gray-600">Hedef anahtar kelimelerde ilk sayfaya çıkma oranı %70</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="relative h-64 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat opacity-20 rounded-lg"></div>
                  <div className="text-white text-center relative z-10 p-6">
                    <h3 className="text-2xl font-bold mb-2">Ortalama Sonuçlar</h3>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div>
                        <div className="text-4xl font-bold">150%</div>
                        <div className="text-sm">Organik Trafik Artışı</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold">40%</div>
                        <div className="text-sm">Dönüşüm Artışı</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold">70%</div>
                        <div className="text-sm">İlk Sayfa Sıralaması</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold">30%</div>
                        <div className="text-sm">Maliyet Düşüşü</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-500 text-sm">* Sonuçlar sektöre ve başlangıç durumuna göre değişiklik gösterebilir</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Organik Trafiğinizi Artırmaya Hazır mısınız?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              AI destekli SEO optimizasyonu hizmetlerimizle arama motorlarında üst sıralarda yer alın. 
              Hemen bizimle iletişime geçin ve ücretsiz SEO analizi alın.
            </p>
            <Link href="/#contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-block">
              Ücretsiz SEO Analizi Alın
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 