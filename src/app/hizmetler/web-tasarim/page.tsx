"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function WebTasarimPage() {
  return (
    <>
	<Navbar />
	<main className="pt-24">
      {/* Hero Section - Dark Mode Compatible */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Destekli Web Tasarım
            </h1>
            <p className="text-lg md:text-xl text-blue-100 dark:text-blue-200 mb-8">
              Yapay zeka teknolojileri ile güçlendirilmiş, yenilikçi ve etkileyici web tasarım 
              hizmetlerimizle işletmenizi dijital dünyada öne çıkarın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#nasil-calisir" className="bg-white dark:bg-white hover:bg-blue-50 dark:hover:bg-blue-50 text-blue-700 dark:text-blue-800 font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Nasıl Çalışır?
              </Link>
              <Link href="/iletisim" className="bg-blue-500 dark:bg-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Teklif Alın
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Dark Mode Compatible */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            AI Destekli Web Tasarım Avantajları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-3">
                Hızlı Geliştirme
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Yapay zeka teknolojileri sayesinde web tasarım 
                süreçlerimizi geleneksel yöntemlere göre %60 
                daha hızlı, projeleri daha kısa sürede hayata 
                geçiriyoruz.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-3">
                Kişiselleştirilmiş Tasarım
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                AI algoritmalar, tasarım trendlerine analiz 
                ederek en güncel ve etkileyici tasarımları 
                oluşturmamızı yardımcı oluyor. Her zaman en 
                yakıcı kaliteye öncelik elde ediyoruz.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-teal-100 dark:bg-teal-900/50 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-teal-600 dark:text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-3">
                Optimizasyon
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">
                Yapay zeka destekli çözümlerimiz sayesinde 
                geliştirme maliyetlerini düşürüyor ve bu 
                avantajı müşterilerimizle paylaşıyoruz. Mükemmel 
                fiyat/kalite oranına hizmet sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - Dark Mode Compatible - DÜZELTILMIŞ TIMELINE */}
      <section id="nasil-calisir" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              AI Destekli Web Tasarım Nasıl Çalışır?
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line - Z-index düşürüldü */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 z-0"></div>

            {/* Step 1 */}
            <div className="relative mb-20">
              <div className="flex items-center justify-center z-10 relative">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full shadow-lg text-white font-bold">
                  1
                </div>
              </div>
              
              <div className="mt-8 md:flex items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">İhtiyaç Analizi</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      İşletmenizin hedefleri ve ihtiyaçları için detaylı bir analiz yapıyoruz. Web sitenizi 
                      ziyaret edenlerin tipik kullanıcı profilini analiz ederek en doğru stratejileri belirliyoruz.
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
                    <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">AI Destekli Tasarım</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Yapay zekâ algoritmalarımız, kullanıcı deneyimini ön plana çıkaran, markanızla uyumlu ve sektöre 
                      özel tasarım trendlerini içeren kolay kullanılabilir siteler tasarlıyor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative mb-20">
              <div className="flex items-center justify-center z-10 relative">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-full shadow-lg text-white font-bold">
                  3
                </div>
              </div>
              
              <div className="mt-8 md:flex items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-2">Hızlı Prototipleme</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      AI destekli araçlarımızla, sizin onayınız alındıktan sonra prototipleri hızla üretiyoruz. Gerçek 
                      kullanıcı deneyimini en erken aşamada görebilir ve gerekli düzenlemeleri yapabilirsiniz.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative mb-20">
              <div className="flex items-center justify-center z-10 relative">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-600 dark:bg-teal-500 rounded-full shadow-lg text-white font-bold">
                  4
                </div>
              </div>
              
              <div className="mt-8 md:flex items-start">
                <div className="md:w-1/2"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold text-teal-600 dark:text-teal-400 mb-2">Geliştirme ve Optimizasyon</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Modern teknolojiler kullanarak web siteniz geliştirip, her cihazda mükemmel görünmesini, en iyi 
                      performans ve güvenlik şartlarını en iyi şekilde sağlıyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="flex items-center justify-center z-10 relative">
                <div className="flex items-center justify-center w-12 h-12 bg-pink-600 dark:bg-pink-500 rounded-full shadow-lg text-white font-bold">
                  5
                </div>
              </div>
              
              <div className="mt-8 md:flex items-start">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-6 md:mb-0">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-block">
                    <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-2">Test ve Lansman</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      AI destekli test araçlarımız, sitenizi hem kullanıcıların beklentileri hem teknik gereksinimler 
                      açısından titizlikle değerlendiriyor. Her şeyin mükemmel olduğundan emin olup lansmanı yapıyoruz.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid - Dark Mode Compatible */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            AI Destekli Web Hizmetlerimiz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l4 4L3 21l4-4L13 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                Kurumsal Web Tasarımı
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Profesyonel, markanızı yansıtan ve potansiyel 
                müşterilerinizi etkileyecek kurumsal web siteleri 
                tasarlıyoruz. AI destekli çözümlerimiz ile 
                markanıza eklizi bir şekilde değer katıyoruz.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Responsive tasarım</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">SEO dostu yapı</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Hızlı yükleme süresi</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12" y2="18.01" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                Mobil Uyumlu Tasarım
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Siteleri-arası erişirken, kullanım alışkı e-ticaret 
                siteleri geliştiriyoruz. AI destekli ürün önerileri ve 
                kişiselleştirilmiş alışveriş deneyimi sunuyoruz.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Güvenli ödeme sistemleri</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Stok yönetimi</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Özelleştirilmiş çözümler</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Entegrasyon imkanları</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 dark:text-green-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Ölçeklenebilir mimari</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Mode Compatible */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Web Sitenizi Yenilemeye Hazır mısınız?
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto">
            AI destekli web tasarım hizmetlerimizle işletmenizi dijital dünyada bir adım 
            öne çıkarın. Hemen bizimle iletişime geçin ve ücretsiz danışmanlık alın.
          </p>
          <Link href="/iletisim" className="inline-block bg-white dark:bg-white hover:bg-blue-50 dark:hover:bg-blue-50 text-blue-700 dark:text-blue-800 font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Ücretsiz Teklif Alın
          </Link>
        </div>
      </section>
	 </main>
      <Footer />  
    </>
  );
}