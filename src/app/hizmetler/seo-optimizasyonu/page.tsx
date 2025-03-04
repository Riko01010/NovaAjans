import React from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Search, BarChart2, TrendingUp, LineChart, Target, Award } from 'lucide-react';

export const metadata = {
  title: 'AI Destekli SEO Optimizasyonu Hizmetleri - NOVA AJANS',
  description: 'Yapay zeka teknolojileri ile güçlendirilmiş SEO optimizasyonu hizmetlerimizle arama motorlarında üst sıralara çıkın.',
};

export default function SeoOptimizasyonuPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Destekli SEO Optimizasyonu</h1>
              <p className="text-xl mb-8">
                Yapay zeka teknolojileri ile güçlendirilmiş SEO optimizasyonu hizmetlerimizle arama motorlarında 
                üst sıralara çıkın.
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
            <h2 className="text-3xl font-bold text-center mb-12">AI Destekli SEO Optimizasyonunun Avantajları</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Search size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Akıllı Anahtar Kelime Analizi</h3>
                <p className="text-gray-600">
                  Yapay zeka algoritmaları, en etkili anahtar kelimeleri belirler. Rekabet analizi ve 
                  kullanıcı niyeti odaklı anahtar kelime stratejileri geliştirin.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BarChart2 size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Veri Odaklı Stratejiler</h3>
                <p className="text-gray-600">
                  AI destekli SEO stratejilerimiz, veriye dayalı analizlerle güçlendirilmiştir. Arama 
                  motorlarında daha iyi performans için veri odaklı kararlar alın.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <TrendingUp size={28} className="text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sürekli Optimizasyon</h3>
                <p className="text-gray-600">
                  Yapay zeka sistemlerimiz, SEO performansınızı sürekli olarak izler ve optimize eder. 
                  Değişen algoritmalara hızla adapte olun.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nasıl Çalışır Section */}
        <section id="nasil-calisir" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AI Destekli SEO Optimizasyonu Nasıl Çalışır?</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-green-600 text-white p-8 rounded-lg md:w-1/3 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <Search size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Analiz ve Araştırma</h3>
                    <p>Kapsamlı site analizi ve anahtar kelime araştırması</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold text-green-700 mb-2">AI Destekli SEO Analizi</h4>
                    <p className="text-gray-700 mb-4">
                      Yapay zeka algoritmalarımız, web sitenizi, rakiplerinizi ve anahtar kelimeleri analiz eder. 
                      Bu analizler, SEO stratejinizin temelini oluşturur.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Kapsamlı site analizi ve teknik SEO denetimi</li>
                      <li>Rakip analizi ve benchmark çalışması</li>
                      <li>Anahtar kelime araştırması ve kullanıcı niyeti analizi</li>
                      <li>İçerik boşluğu analizi</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-green-600 text-white p-8 rounded-lg md:w-1/3 flex flex-col items-center text-center md:order-2">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <Target size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Strateji Geliştirme</h3>
                    <p>Veriye dayalı SEO stratejisi oluşturma</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold text-green-700 mb-2">AI Destekli SEO Stratejisi</h4>
                    <p className="text-gray-700 mb-4">
                      Analiz sonuçlarına dayanarak, yapay zeka algoritmalarımız web siteniz için özelleştirilmiş 
                      bir SEO stratejisi geliştirir. Bu strateji, teknik SEO, içerik optimizasyonu ve bağlantı 
                      kurma stratejilerini içerir.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Teknik SEO iyileştirmeleri</li>
                      <li>İçerik stratejisi ve optimizasyonu</li>
                      <li>Bağlantı kurma stratejisi</li>
                      <li>Yerel SEO stratejisi (gerekirse)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-green-600 text-white p-8 rounded-lg md:w-1/3 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <LineChart size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Uygulama ve İzleme</h3>
                    <p>SEO stratejisinin uygulanması ve performans izleme</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold text-green-700 mb-2">AI Destekli Uygulama ve İzleme</h4>
                    <p className="text-gray-700 mb-4">
                      SEO stratejinizi uygular ve sonuçları sürekli olarak izleriz. Yapay zeka sistemlerimiz, 
                      performans verilerini analiz ederek stratejinizi sürekli olarak optimize eder ve 
                      sıralamanızı iyileştirir.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>SEO iyileştirmelerinin uygulanması</li>
                      <li>Performans izleme ve raporlama</li>
                      <li>Sürekli optimizasyon ve strateji güncellemeleri</li>
                      <li>Algoritma güncellemelerine hızlı adaptasyon</li>
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
                  <h3 className="text-xl font-bold p-4 relative z-10">Teknik SEO</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Web sitenizin teknik altyapısını optimize ederek arama motorlarının sitenizi daha iyi 
                  anlamasını sağlıyoruz. AI destekli analizlerle teknik sorunları tespit edip çözüyoruz.
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
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 opacity-20 rounded-md"></div>
                  <h3 className="text-xl font-bold p-4 relative z-10">İçerik Optimizasyonu</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Arama motorlarında üst sıralarda yer almanızı sağlayacak içerikler üretiyoruz. AI destekli 
                  içerik stratejileri ile hedef kitlenizi etkileyin.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> SEO odaklı içerik üretimi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Mevcut içerik optimizasyonu
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> İçerik takvimi oluşturma
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 opacity-20 rounded-md"></div>
                  <h3 className="text-xl font-bold p-4 relative z-10">Bağlantı Kurma</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Web sitenizin otoritesini artıracak kaliteli bağlantılar oluşturuyoruz. AI destekli bağlantı 
                  stratejileri ile sitenizin güvenilirliğini artırın.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Kaliteli bağlantı kaynakları bulma
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> İçerik pazarlama stratejileri
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Rakip bağlantı analizi
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Başarı Hikayeleri */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Başarı Hikayeleri</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <Award className="text-green-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">E-Ticaret Sitesi</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Bir e-ticaret sitesi için geliştirdiğimiz AI destekli SEO stratejisi ile 6 ay içinde:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-600 mb-2">%200</p>
                  <p className="text-gray-700">Organik Trafik Artışı</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-600 mb-2">%85</p>
                  <p className="text-gray-700">Dönüşüm Oranı Artışı</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-600 mb-2">%120</p>
                  <p className="text-gray-700">Gelir Artışı</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "NOVA AJANS'ın AI destekli SEO hizmetleri sayesinde arama motorlarında üst sıralara çıktık ve 
                organik trafiğimiz önemli ölçüde arttı. Bu da satışlarımıza doğrudan yansıdı."
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">SEO Stratejinizi Güçlendirmeye Hazır mısınız?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              AI destekli SEO optimizasyonu hizmetlerimizle arama motorlarında üst sıralara çıkın. 
              Hemen bizimle iletişime geçin ve ücretsiz danışmanlık alın.
            </p>
            <Link href="/#contact" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-block">
              Ücretsiz Teklif Alın
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 