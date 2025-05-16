import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
        {/* Hero Section - Dark Mode Compatible */}
        <section className="relative bg-gradient-to-br from-purple-600 to-indigo-700 dark:from-purple-800 dark:to-indigo-900 py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Destekli Dijital Pazarlama
              </h1>
              <p className="text-lg md:text-xl text-purple-100 dark:text-purple-200 mb-8">
                Yapay zeka teknolojileri ile güçlendirilmiş, veri odaklı ve sonuç garantili 
                dijital pazarlama stratejileri ile markanızı bir adım öne taşıyın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#nasil-calisir" className="bg-white dark:bg-white hover:bg-purple-50 dark:hover:bg-purple-50 text-purple-700 dark:text-purple-800 font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Nasıl Çalışır?
                </Link>
                <Link href="/iletisim" className="bg-purple-500 dark:bg-purple-400 hover:bg-purple-600 dark:hover:bg-purple-500 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Teklif Alın
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Avantajlar Section - Dark Mode Compatible */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              AI Destekli Dijital Pazarlama Avantajları
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-3">
                  Hassas Hedefleme
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  Yapay zeka algoritmaları ile müşteri verilerini analiz ederek, 
                  doğru hedef kitleye doğru zamanda ulaşmanızı sağlıyoruz. Pazarlama bütçenizi doğru kitleye harcayarak ROI'nizi artırın.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20V10M18 20V4M6 20v-6"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-3">
                  Veri Odaklı Stratejiler
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  Büyük veri analitiği ve makine öğrenimi ile pazarlama 
                  stratejilerinizi sürekli optimize ediyor, ROI'nizi artırıyoruz.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-pink-100 dark:bg-pink-900/50 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-pink-600 dark:text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-3">
                  Otomatik Optimizasyon
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  Kampanyalarınız AI tarafından gerçek zamanlı olarak izleniyor ve 
                  performansı artırmak için otomatik olarak optimize ediliyor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nasıl Çalışır Section - Dark Mode Compatible */}
        <section id="nasil-calisir" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                AI Destekli Dijital Pazarlama Nasıl Çalışır?
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500 z-0"></div>

              {/* Step 1 */}
              <div className="relative mb-20">
                <div className="flex items-center justify-center z-10 relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-full shadow-lg text-white font-bold">
                    1
                  </div>
                </div>
                
                <div className="mt-8 md:flex items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Veri Toplama ve Analiz</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Müşteri davranışları, pazar trendleri ve rekabet analizi için kapsamlı veri toplama ve 
                        AI destekli analiz yapıyoruz. Bu veriler stratejimizin temelini oluşturuyor.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-20">
                <div className="flex items-center justify-center z-10 relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-600 dark:bg-indigo-500 rounded-full shadow-lg text-white font-bold">
                    2
                  </div>
                </div>
                
                <div className="mt-8 md:flex items-start">
                  <div className="md:w-1/2"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">Stratejik Planlama</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Yapay zeka algoritmalarımız, toplanan verileri kullanarak markanıza özel, 
                        hedef kitlenize uygun ve bütçenizi en verimli şekilde kullanacak stratejiler geliştiriyor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-20">
                <div className="flex items-center justify-center z-10 relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-pink-600 dark:bg-pink-500 rounded-full shadow-lg text-white font-bold">
                    3
                  </div>
                </div>
                
                <div className="mt-8 md:flex items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">İçerik Üretimi</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        AI destekli içerik üretim araçlarımızla, hedef kitlenize özel, SEO dostu ve 
                        dönüşüm odaklı içerikler oluşturuyoruz. Görsel, metin ve video içeriklerinizi optimize ediyoruz.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative mb-20">
                <div className="flex items-center justify-center z-10 relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full shadow-lg text-white font-bold">
                    4
                  </div>
                </div>
                
                <div className="mt-8 md:flex items-start">
                  <div className="md:w-1/2"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Kampanya Yönetimi</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Dijital reklamlarınızı AI destekli sistemlerimizle yönetiyor, gerçek zamanlı 
                        optimizasyonlar yapıyor ve bütçenizi en verimli şekilde kullanmanızı sağlıyoruz.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="flex items-center justify-center z-10 relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-teal-600 dark:bg-teal-500 rounded-full shadow-lg text-white font-bold">
                    5
                  </div>
                </div>
                
                <div className="mt-8 md:flex items-start">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-block">
                      <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">Analiz ve Raporlama</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Kampanyalarınızın performansını detaylı olarak analiz ediyor, 
                        anlaşılır raporlar sunuyor ve sürekli iyileştirmeler için öneriler geliştiriyoruz.
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hizmetler Section - Dark Mode Compatible */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              AI Destekli Dijital Pazarlama Hizmetlerimiz
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                  SEO Optimizasyonu
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  AI destekli SEO stratejileri ile web sitenizin arama motorlarında 
                  üst sıralarda yer almasını sağlıyoruz. Anahtar kelime analizi, 
                  içerik optimizasyonu ve teknik SEO çalışmaları yapıyoruz.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">AI destekli anahtar kelime analizi</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">İçerik optimizasyonu</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Teknik SEO iyileştirmeleri</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600 dark:text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M18 12a6 6 0 0 0-6-6 6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6z"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                  Sosyal Medya Pazarlaması
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Yapay zeka destekli sosyal medya stratejileri ile markanızın 
                  sosyal medyada etkin bir şekilde yer almasını sağlıyoruz. 
                  İçerik üretimi, topluluk yönetimi ve reklam kampanyaları yönetiyoruz.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">AI destekli içerik üretimi</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Topluluk yönetimi</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Reklam kampanyaları</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-pink-100 dark:bg-pink-900/50 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-pink-600 dark:text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                  E-posta Pazarlaması
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  AI destekli e-posta pazarlama stratejileri ile müşterilerinizle 
                  etkili iletişim kurmanızı sağlıyoruz. Kişiselleştirilmiş içerikler, 
                  otomatik kampanyalar ve performans analizi yapıyoruz.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Kişiselleştirilmiş içerikler</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">Otomatik kampanyalar</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">A/B testleri</span>
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

        {/* CTA Section - Dark Mode Compatible */}
        <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-700 dark:from-purple-800 dark:to-indigo-900">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Dijital Pazarlama Stratejinizi Güçlendirmeye Hazır mısınız?
            </h2>
            <p className="text-xl text-purple-100 dark:text-purple-200 mb-8 max-w-3xl mx-auto">
              AI destekli dijital pazarlama hizmetlerimizle markanızı bir adım öne taşıyın. 
              Hemen bizimle iletişime geçin ve ücretsiz danışmanlık alın.
            </p>
            <Link href="/iletisim" className="inline-block bg-white dark:bg-white hover:bg-purple-50 dark:hover:bg-purple-50 text-purple-700 dark:text-purple-800 font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Ücretsiz Teklif Alın
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 