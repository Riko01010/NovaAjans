import React from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Share2, BarChart2, Users, TrendingUp, MessageCircle, Award, Target } from 'lucide-react';

export const metadata = {
  title: 'AI Destekli Sosyal Medya Yönetimi Hizmetleri - NOVA AJANS',
  description: 'Yapay zeka teknolojileri ile güçlendirilmiş sosyal medya yönetimi hizmetlerimizle markanızı dijital dünyada öne çıkarın.',
};

export default function SosyalMedyaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Destekli Sosyal Medya Yönetimi</h1>
              <p className="text-xl mb-8">
                Yapay zeka teknolojileri ile güçlendirilmiş sosyal medya yönetimi hizmetlerimizle markanızı 
                dijital dünyada öne çıkarın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#nasil-calisir" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors">
                  Nasıl Çalışır?
                </Link>
                <Link href="/#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-semibold transition-colors">
                  Teklif Alın
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Avantajlar Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AI Destekli Sosyal Medya Yönetiminin Avantajları</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BarChart2 size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Veri Odaklı Stratejiler</h3>
                <p className="text-gray-600">
                  Yapay zeka algoritmaları, sosyal medya verilerinizi analiz ederek en etkili stratejileri 
                  belirler. Veriye dayalı kararlarla sosyal medya performansınızı artırın.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hedef Kitle Analizi</h3>
                <p className="text-gray-600">
                  AI destekli analizlerle hedef kitlenizi daha iyi tanıyın. Kitlenizin ilgi alanlarına ve 
                  davranışlarına göre özelleştirilmiş içerikler oluşturun.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <TrendingUp size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Sürekli Optimizasyon</h3>
                <p className="text-gray-600">
                  Yapay zeka sistemlerimiz, sosyal medya performansınızı sürekli olarak izler ve optimize eder. 
                  Değişen trendlere ve algoritmalara hızla adapte olun.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nasıl Çalışır Section */}
        <section id="nasil-calisir" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AI Destekli Sosyal Medya Yönetimi Nasıl Çalışır?</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-blue-600 text-white p-8 rounded-lg md:w-1/3 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <Target size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Analiz ve Strateji</h3>
                    <p>Hedef kitle ve rakip analizi ile strateji geliştirme</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold text-blue-700 mb-2">AI Destekli Sosyal Medya Analizi</h4>
                    <p className="text-gray-700 mb-4">
                      Yapay zeka algoritmalarımız, sosyal medya hesaplarınızı, hedef kitlenizi ve rakiplerinizi 
                      analiz eder. Bu analizler, sosyal medya stratejinizin temelini oluşturur.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Mevcut sosyal medya performans analizi</li>
                      <li>Hedef kitle analizi ve segmentasyon</li>
                      <li>Rakip analizi ve benchmark çalışması</li>
                      <li>Platform bazlı strateji geliştirme</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-blue-600 text-white p-8 rounded-lg md:w-1/3 flex flex-col items-center text-center md:order-2">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <Share2 size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">İçerik Üretimi ve Paylaşım</h3>
                    <p>AI destekli içerik üretimi ve optimum paylaşım zamanlaması</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold text-blue-700 mb-2">AI Destekli İçerik Stratejisi</h4>
                    <p className="text-gray-700 mb-4">
                      Analiz sonuçlarına dayanarak, yapay zeka algoritmalarımız markanız için özelleştirilmiş 
                      içerikler üretir ve en etkili paylaşım zamanlarını belirler.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Platforma özel içerik üretimi</li>
                      <li>Optimum paylaşım zamanı analizi</li>
                      <li>İçerik takvimi oluşturma</li>
                      <li>Otomatik paylaşım sistemleri</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-blue-600 text-white p-8 rounded-lg md:w-1/3 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <MessageCircle size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Etkileşim ve İzleme</h3>
                    <p>Topluluk yönetimi ve performans izleme</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold text-blue-700 mb-2">AI Destekli Topluluk Yönetimi</h4>
                    <p className="text-gray-700 mb-4">
                      Yapay zeka sistemlerimiz, sosyal medya etkileşimlerinizi yönetir ve performansınızı 
                      sürekli olarak izler. Gerçek zamanlı analizlerle stratejinizi sürekli olarak optimize ederiz.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Yorum ve mesaj yönetimi</li>
                      <li>Kriz yönetimi ve müdahale planları</li>
                      <li>Performans izleme ve raporlama</li>
                      <li>Sürekli optimizasyon ve strateji güncellemeleri</li>
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
            <h2 className="text-3xl font-bold text-center mb-12">Sosyal Medya Yönetimi Hizmetlerimiz</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 rounded-md"></div>
                  <h3 className="text-xl font-bold p-4 relative z-10">Sosyal Medya Stratejisi</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Markanız için özelleştirilmiş, veriye dayalı sosyal medya stratejileri geliştiriyoruz. 
                  AI destekli analizlerle hedeflerinize ulaşın.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-500">✓</span> Marka konumlandırma
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-500">✓</span> Platform seçimi ve optimizasyonu
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-500">✓</span> İçerik stratejisi geliştirme
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 rounded-md"></div>
                  <h3 className="text-xl font-bold p-4 relative z-10">İçerik Üretimi ve Yönetimi</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Markanız için etkileyici ve etkileşim odaklı içerikler üretiyoruz. AI destekli içerik 
                  önerileri ile takipçilerinizi etkileyin.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-500">✓</span> Görsel ve video içerik üretimi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-500">✓</span> İçerik takvimi oluşturma
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-500">✓</span> Otomatik paylaşım sistemleri
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 rounded-md"></div>
                  <h3 className="text-xl font-bold p-4 relative z-10">Topluluk Yönetimi</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Sosyal medya topluluğunuzu profesyonel bir şekilde yönetiyoruz. AI destekli sistemlerle 
                  etkileşimlerinizi artırın.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-500">✓</span> Yorum ve mesaj yönetimi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-500">✓</span> Kriz yönetimi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-500">✓</span> Takipçi etkileşimi ve büyüme
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
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Award className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">E-Ticaret Markası</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Bir e-ticaret markası için geliştirdiğimiz AI destekli sosyal medya stratejisi ile 3 ay içinde:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">%150</p>
                  <p className="text-gray-700">Etkileşim Artışı</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">%80</p>
                  <p className="text-gray-700">Takipçi Artışı</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">%65</p>
                  <p className="text-gray-700">Satış Artışı</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "NOVA AJANS'ın AI destekli sosyal medya yönetimi hizmetleri sayesinde markamızın dijital varlığı 
                tamamen dönüştü. Etkileşimlerimiz ve satışlarımız önemli ölçüde arttı."
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Sosyal Medya Stratejinizi Güçlendirmeye Hazır mısınız?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              AI destekli sosyal medya yönetimi hizmetlerimizle markanızı dijital dünyada öne çıkarın. 
              Hemen bizimle iletişime geçin ve ücretsiz danışmanlık alın.
            </p>
            <Link href="/#contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-block">
              Ücretsiz Teklif Alın
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 