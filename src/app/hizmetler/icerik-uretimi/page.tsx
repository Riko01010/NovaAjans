import React from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { PenTool, BookOpen, Edit3, FileText, Layout, Share2 } from 'lucide-react';

export const metadata = {
  title: 'AI Destekli İçerik Üretimi Hizmetleri - NOVA AJANS',
  description: 'Yapay zeka teknolojileri ile güçlendirilmiş içerik üretimi hizmetlerimizle markanızı dijital dünyada öne çıkarın.',
};

export default function IcerikUretimiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Destekli İçerik Üretimi</h1>
              <p className="text-xl mb-8">
                Yapay zeka teknolojileri ile güçlendirilmiş içerik üretimi hizmetlerimizle markanızı dijital 
                dünyada öne çıkarın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#nasil-calisir" className="bg-white text-yellow-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors">
                  Nasıl Çalışır?
                </Link>
                <Link href="/#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-yellow-600 px-6 py-3 rounded-md font-semibold transition-colors">
                  Teklif Alın
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Avantajlar Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AI Destekli İçerik Üretiminin Avantajları</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <PenTool size={28} className="text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Yaratıcı ve Özgün İçerikler</h3>
                <p className="text-gray-600">
                  Yapay zeka algoritmaları, markanız için yaratıcı ve özgün içerikler üretir. İçeriklerinizin 
                  kalitesini artırarak hedef kitlenizi etkileyin.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BookOpen size={28} className="text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Veri Odaklı Stratejiler</h3>
                <p className="text-gray-600">
                  AI destekli içerik stratejilerimiz, veriye dayalı analizlerle güçlendirilmiştir. Hedef kitlenizin 
                  ilgisini çekecek içerikler oluşturun.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-yellow-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Edit3 size={28} className="text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hızlı ve Etkili Üretim</h3>
                <p className="text-gray-600">
                  İçerik üretim süreçlerimiz, yapay zeka teknolojileri sayesinde hızlanır. Daha kısa sürede 
                  daha fazla içerik üretin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nasıl Çalışır Section */}
        <section id="nasil-calisir" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AI Destekli İçerik Üretimi Nasıl Çalışır?</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-yellow-600 text-white p-8 rounded-lg md:w-1/3 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <FileText size={32} className="text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">İçerik Analizi</h3>
                    <p>Hedef kitlenizin ilgi alanlarına göre içerik analizi</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold text-yellow-700 mb-2">AI Destekli İçerik Analizi</h4>
                    <p className="text-gray-700 mb-4">
                      Yapay zeka algoritmalarımız, hedef kitlenizin ilgi alanlarını ve davranışlarını analiz eder. 
                      Bu analizler, içerik stratejinizin temelini oluşturur.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Hedef kitle analizi</li>
                      <li>İçerik türü ve formatı belirleme</li>
                      <li>Rekabet analizi</li>
                      <li>Trend ve fırsatların belirlenmesi</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-yellow-600 text-white p-8 rounded-lg md:w-1/3 flex flex-col items-center text-center md:order-2">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <Layout size={32} className="text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Strateji Geliştirme</h3>
                    <p>Veriye dayalı içerik stratejisi oluşturma</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold text-yellow-700 mb-2">AI Destekli İçerik Stratejisi</h4>
                    <p className="text-gray-700 mb-4">
                      Analiz sonuçlarına dayanarak, yapay zeka algoritmalarımız markanız için özelleştirilmiş 
                      bir içerik stratejisi geliştirir. Bu strateji, içerik türü, formatı ve dağıtım kanallarını 
                      içerir.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>İçerik planlaması ve takvimi</li>
                      <li>İçerik formatı ve türü belirleme</li>
                      <li>Dağıtım kanalları ve platformlar</li>
                      <li>İçerik optimizasyonu ve güncellemeleri</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="bg-yellow-600 text-white p-8 rounded-lg md:w-1/3 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                      <Share2 size={32} className="text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Uygulama ve Dağıtım</h3>
                    <p>İçerik stratejisinin uygulanması ve dağıtımı</p>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="text-lg font-bold text-yellow-700 mb-2">AI Destekli Uygulama ve İzleme</h4>
                    <p className="text-gray-700 mb-4">
                      İçerik stratejinizi uygular ve sonuçları sürekli olarak izleriz. Yapay zeka sistemlerimiz, 
                      performans verilerini analiz ederek stratejinizi sürekli olarak optimize eder ve 
                      içeriklerinizin etkisini artırır.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>İçerik üretimi ve yayınlama</li>
                      <li>Performans izleme ve raporlama</li>
                      <li>İçerik optimizasyonu ve güncellemeleri</li>
                      <li>Sürekli iyileştirme ve adaptasyon</li>
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
            <h2 className="text-3xl font-bold text-center mb-12">İçerik Üretimi Hizmetlerimiz</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 rounded-md"></div>
                  <h3 className="text-xl font-bold p-4 relative z-10">Blog İçerikleri</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Markanızın uzmanlık alanında etkileyici ve bilgilendirici blog içerikleri üretiyoruz. AI 
                  destekli içerik önerileri ile okuyucularınızı etkileyin.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">✓</span> SEO uyumlu içerikler
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">✓</span> Güncel ve ilgi çekici konular
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">✓</span> Uzman görüşleri ve analizler
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 rounded-md"></div>
                  <h3 className="text-xl font-bold p-4 relative z-10">Sosyal Medya İçerikleri</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Sosyal medya platformlarınız için dikkat çekici ve etkileşim odaklı içerikler üretiyoruz. 
                  AI destekli analizlerle en etkili içerik stratejilerini belirliyoruz.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">✓</span> Platforma özel içerikler
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">✓</span> Etkileşim artırıcı stratejiler
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">✓</span> Görsel ve video içerikler
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 rounded-md"></div>
                  <h3 className="text-xl font-bold p-4 relative z-10">Video İçerikleri</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Markanız için etkileyici ve profesyonel video içerikler üretiyoruz. AI destekli senaryo ve 
                  içerik önerileri ile izleyicilerinizi etkileyin.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">✓</span> Senaryo ve içerik geliştirme
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">✓</span> Profesyonel prodüksiyon
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-yellow-500">✓</span> Dağıtım ve tanıtım stratejileri
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">İçerik Stratejinizi Güçlendirmeye Hazır mısınız?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              AI destekli içerik üretimi hizmetlerimizle markanızı dijital dünyada öne çıkarın. 
              Hemen bizimle iletişime geçin ve ücretsiz danışmanlık alın.
            </p>
            <Link href="/#contact" className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-block">
              Ücretsiz Teklif Alın
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 