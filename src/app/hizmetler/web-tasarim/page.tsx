import React from 'react';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Zap, Code, Palette, Smartphone, Rocket, Award } from 'lucide-react';

export const metadata = {
  title: 'AI Destekli Web Tasarım Hizmetleri - NOVA AJANS',
  description: 'Yapay zeka teknolojileri ile güçlendirilmiş, yenilikçi ve etkileyici web tasarım hizmetlerimizle işletmenizi dijital dünyada öne çıkarın.',
};

export default function WebTasarimPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] bg-repeat"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Destekli Web Tasarım</h1>
              <p className="text-xl mb-8">
                Yapay zeka teknolojileri ile güçlendirilmiş, yenilikçi ve etkileyici web tasarım hizmetlerimizle 
                işletmenizi dijital dünyada öne çıkarın.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#nasil-calisir" className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-md font-semibold transition-colors">
                  Nasıl Çalışır?
                </Link>
                <Link href="/#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-md font-semibold transition-colors">
                  Teklif Alın
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Avantajlar Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AI Destekli Web Tasarımın Avantajları</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Zap size={28} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Daha Hızlı Geliştirme</h3>
                <p className="text-gray-600">
                  Yapay zeka teknolojileri sayesinde web tasarım süreçlerimiz geleneksel yöntemlere göre %60 daha hızlı. 
                  Projenizi daha kısa sürede hayata geçiriyoruz.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Award size={28} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Üstün Kalite</h3>
                <p className="text-gray-600">
                  AI algoritmaları, tasarım trendlerini analiz ederek en güncel ve etkileyici tasarımları oluşturmamıza 
                  yardımcı oluyor. Her zaman en yüksek kalitede sonuçlar elde ediyoruz.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-indigo-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Rocket size={28} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Maliyet Avantajı</h3>
                <p className="text-gray-600">
                  Yapay zeka destekli süreçlerimiz sayesinde geliştirme maliyetlerini düşürüyor ve bu avantajı 
                  müşterilerimize yansıtıyoruz. Rekabetçi fiyatlarla premium hizmet sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nasıl Çalışır Section */}
        <section id="nasil-calisir" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">AI Destekli Web Tasarım Nasıl Çalışır?</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12">
                  {/* Item 1 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-indigo-600">İhtiyaç Analizi</h3>
                      <p className="text-gray-600 mt-2">
                        İşletmenizin hedeflerini ve ihtiyaçlarını anlamak için detaylı bir analiz yapıyoruz. 
                        AI algoritmalarımız, sektörünüzdeki başarılı web sitelerini analiz ederek en etkili 
                        stratejileri belirliyor.
                      </p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full md:mx-4">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div className="flex-1 md:pl-8 hidden md:block"></div>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-8 hidden md:block"></div>
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full md:mx-4">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div className="flex-1 md:pl-8 mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-indigo-600">AI Destekli Tasarım</h3>
                      <p className="text-gray-600 mt-2">
                        Yapay zeka araçlarımız, markanıza özel tasarım önerileri sunuyor. Renk paletleri, 
                        tipografi ve düzen seçenekleri arasından en uygun kombinasyonları belirliyoruz.
                      </p>
                    </div>
                  </div>
                  
                  {/* Item 3 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-indigo-600">Hızlı Prototipleme</h3>
                      <p className="text-gray-600 mt-2">
                        AI destekli araçlarımızla, web sitenizin prototipini saatler içinde oluşturuyoruz. 
                        Bu sayede fikirlerinizi hızla somut bir ürüne dönüştürüyor ve erken geri bildirim 
                        almanızı sağlıyoruz.
                      </p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full md:mx-4">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div className="flex-1 md:pl-8 hidden md:block"></div>
                  </div>
                  
                  {/* Item 4 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-8 hidden md:block"></div>
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full md:mx-4">
                      <span className="text-white font-bold">4</span>
                    </div>
                    <div className="flex-1 md:pl-8 mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-indigo-600">Geliştirme ve Optimizasyon</h3>
                      <p className="text-gray-600 mt-2">
                        Modern teknolojiler kullanarak web sitenizi geliştiriyoruz. AI destekli kod analizi 
                        araçlarımız, performans ve güvenlik açısından en iyi uygulamaları sağlıyor.
                      </p>
                    </div>
                  </div>
                  
                  {/* Item 5 */}
                  <div className="relative flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-indigo-600">Test ve Lansman</h3>
                      <p className="text-gray-600 mt-2">
                        AI destekli test araçlarımız, web sitenizin tüm cihazlarda ve tarayıcılarda mükemmel 
                        çalıştığından emin oluyor. Kullanıcı deneyimi analizleri ile son rötuşları yapıyoruz.
                      </p>
                    </div>
                    <div className="z-10 flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full md:mx-4">
                      <span className="text-white font-bold">5</span>
                    </div>
                    <div className="flex-1 md:pl-8 hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Özellikler Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Web Tasarım Hizmetlerimiz</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Code size={32} className="text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Kurumsal Web Siteleri</h3>
                <p className="text-gray-600 mb-4">
                  Profesyonel, markanızı yansıtan ve potansiyel müşterilerinizi etkileyecek kurumsal web siteleri 
                  tasarlıyoruz. AI destekli içerik önerileri ile mesajınızı etkili bir şekilde iletiyoruz.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Responsive tasarım
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> SEO dostu yapı
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Hızlı yükleme süresi
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Smartphone size={32} className="text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">E-Ticaret Çözümleri</h3>
                <p className="text-gray-600 mb-4">
                  Satışlarınızı artıracak, kullanıcı dostu e-ticaret siteleri geliştiriyoruz. AI destekli ürün 
                  önerileri ve kişiselleştirilmiş alışveriş deneyimi sunuyoruz.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Güvenli ödeme sistemleri
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Stok yönetimi
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Mobil uyumlu tasarım
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Palette size={32} className="text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Özel Web Uygulamaları</h3>
                <p className="text-gray-600 mb-4">
                  İşletmenizin özel ihtiyaçlarına yönelik web uygulamaları geliştiriyoruz. AI destekli analiz 
                  araçları ile iş süreçlerinizi optimize ediyoruz.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Özelleştirilmiş çözümler
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Entegrasyon imkanları
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span> Ölçeklenebilir mimari
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Web Sitenizi Yenilemeye Hazır mısınız?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              AI destekli web tasarım hizmetlerimizle işletmenizi dijital dünyada bir adım öne çıkarın. 
              Hemen bizimle iletişime geçin ve ücretsiz danışmanlık alın.
            </p>
            <Link href="/#contact" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-block">
              Ücretsiz Teklif Alın
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 