import React from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Target, TrendingUp, Users, BarChart, Brain, Lightbulb } from 'lucide-react';

export const metadata = {
  title: 'AI Destekli Pazarlama Hizmetleri - NOVA AJANS',
  description: 'Yapay zeka teknolojileri ile güçlendirilmiş, veri odaklı ve kişiselleştirilmiş pazarlama stratejileri ile işletmenizin büyümesini hızlandırın.',
};

export default function AIPazarlamaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Destekli Pazarlama</h1>
              <p className="text-xl mb-8">
                Yapay zeka teknolojileri ile güçlendirilmiş, veri odaklı ve kişiselleştirilmiş pazarlama 
                stratejileri ile işletmenizin büyümesini hızlandırın.
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
            <h2 className="text-3xl font-bold text-center mb-12">AI Destekli Pazarlamanın Avantajları</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Target size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hassas Hedefleme</h3>
                <p className="text-gray-600">
                  Yapay zeka algoritmaları, müşteri verilerini analiz ederek en değerli potansiyel müşterilerinizi 
                  belirlemenize yardımcı olur. Pazarlama bütçenizi doğru kitleye harcayarak ROI'nizi artırın.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <TrendingUp size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Daha Yüksek Dönüşüm</h3>
                <p className="text-gray-600">
                  AI destekli içerik ve teklif optimizasyonu ile dönüşüm oranlarınızı artırın. Yapay zeka, 
                  hangi mesajların ve tekliflerin en iyi sonuçları verdiğini belirler.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Kişiselleştirilmiş Deneyim</h3>
                <p className="text-gray-600">
                  Her müşteriye özel içerik ve teklifler sunarak etkileşimi artırın. AI, müşteri davranışlarını 
                  analiz ederek kişiselleştirilmiş pazarlama stratejileri oluşturur.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nasıl Çalışır Section */}
        <section id="nasil-calisir" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AI Destekli Pazarlama Nasıl Çalışır?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-blue-50 p-6 rounded-lg mb-8 relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-700">Veri Toplama ve Analiz</h3>
                  <p className="text-gray-700">
                    AI sistemlerimiz, müşteri davranışları, demografik bilgiler, satın alma geçmişi ve pazar 
                    trendleri gibi çeşitli kaynaklardan veri toplar. Bu veriler, pazarlama stratejinizin 
                    temelini oluşturur.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-8 relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-700">Müşteri Segmentasyonu</h3>
                  <p className="text-gray-700">
                    Yapay zeka algoritmaları, müşterilerinizi davranışlarına, tercihlerine ve değerlerine göre 
                    segmentlere ayırır. Bu, her müşteri grubuna özel stratejiler geliştirmenizi sağlar.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-700">İçerik Optimizasyonu</h3>
                  <p className="text-gray-700">
                    AI, hangi içerik türlerinin, başlıkların ve görsellerin hedef kitleniz için en etkili 
                    olduğunu belirler. Bu sayede, daha yüksek etkileşim oranları elde edersiniz.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="bg-blue-50 p-6 rounded-lg mb-8 relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-700">Otomatik Kampanya Yönetimi</h3>
                  <p className="text-gray-700">
                    AI sistemlerimiz, reklam kampanyalarınızı otomatik olarak optimize eder, bütçenizi en 
                    etkili kanallara ve zamanlara dağıtır. Bu, pazarlama harcamalarınızdan maksimum getiri 
                    almanızı sağlar.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg mb-8 relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-700">Kişiselleştirilmiş Pazarlama</h3>
                  <p className="text-gray-700">
                    Her müşteriye özel içerik, teklif ve iletişim stratejileri geliştiririz. AI, müşteri 
                    yolculuğunun her aşamasında kişiselleştirilmiş deneyimler sunar.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg relative">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-700">Sürekli Öğrenme ve İyileştirme</h3>
                  <p className="text-gray-700">
                    AI sistemlerimiz, kampanyalarınızın performansını sürekli izler ve öğrenir. Zaman içinde, 
                    stratejileriniz daha da etkili hale gelir ve pazarlama ROI'niz artar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hizmetler Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AI Destekli Pazarlama Hizmetlerimiz</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <BarChart size={32} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Veri Odaklı Pazarlama Stratejisi</h3>
                <p className="text-gray-600 mb-4">
                  Müşteri verilerinizi ve pazar trendlerini analiz ederek, işletmeniz için özelleştirilmiş 
                  pazarlama stratejileri geliştiriyoruz. AI destekli analizler, en etkili pazarlama kanallarını 
                  ve mesajları belirlemenize yardımcı olur.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Pazar analizi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Rekabet analizi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Kanal optimizasyonu
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Brain size={32} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">AI Destekli İçerik Pazarlaması</h3>
                <p className="text-gray-600 mb-4">
                  Yapay zeka teknolojileri kullanarak, hedef kitlenizi etkileyecek ve dönüşüm oranlarını 
                  artıracak içerikler üretiyoruz. AI, hangi içerik türlerinin en iyi performansı gösterdiğini 
                  analiz eder ve içerik stratejinizi optimize eder.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> SEO odaklı içerik üretimi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> İçerik performans analizi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Otomatik içerik optimizasyonu
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Lightbulb size={32} className="text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Kişiselleştirilmiş Müşteri Deneyimi</h3>
                <p className="text-gray-600 mb-4">
                  Her müşteriye özel pazarlama stratejileri geliştirerek, müşteri memnuniyetini ve sadakatini 
                  artırıyoruz. AI, müşteri davranışlarını analiz ederek, her müşteri için en etkili iletişim 
                  stratejisini belirler.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Davranışsal hedefleme
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Dinamik içerik
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Otomatik e-posta pazarlaması
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    E
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">E-Ticaret Markası</h3>
                    <p className="text-gray-600">Moda & Aksesuar</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "NOVA AJANS'ın AI destekli pazarlama stratejileri sayesinde, dönüşüm oranlarımızı %35 artırdık 
                  ve müşteri edinme maliyetimizi %20 düşürdük. Kişiselleştirilmiş e-posta kampanyaları, müşteri 
                  sadakatimizi önemli ölçüde artırdı."
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 ml-2">Müşteri memnuniyeti</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                    B
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">B2B Yazılım Şirketi</h3>
                    <p className="text-gray-600">SaaS Çözümleri</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "AI destekli içerik pazarlama stratejisi, organik trafik ve lead oluşturma konusunda inanılmaz 
                  sonuçlar verdi. 6 ay içinde web sitemize gelen organik trafik %80 arttı ve lead maliyetimiz 
                  %40 düştü."
                </p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 ml-2">Müşteri memnuniyeti</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Pazarlama Stratejinizi Dönüştürmeye Hazır mısınız?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              AI destekli pazarlama hizmetlerimizle işletmenizin büyümesini hızlandırın. 
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