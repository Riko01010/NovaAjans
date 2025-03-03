"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  {
    title: "E-Ticaret Platformu",
    category: "Web Geliştirme",
    description: "Modern bir e-ticaret platformu tasarımı ve geliştirmesi. Kullanıcı dostu arayüz, hızlı ödeme sistemi ve mobil uyumlu tasarım.",
    imageSrc: "https://placehold.co/600x400/indigo/white?text=E-Ticaret+Projesi",
    link: "/portfolio/e-commerce"
  },
  {
    title: "Yapay Zeka Chatbot",
    category: "AI Çözümleri",
    description: "Müşteri hizmetleri için geliştirilmiş yapay zeka destekli chatbot. 7/24 müşteri desteği ve otomatik yanıtlama sistemi.",
    imageSrc: "https://placehold.co/600x400/indigo/white?text=AI+Chatbot",
    link: "/portfolio/ai-chatbot"
  },
  {
    title: "Sosyal Medya Kampanyası",
    category: "Dijital Pazarlama",
    description: "Büyük bir marka için hazırlanmış kapsamlı sosyal medya kampanyası. Etkileşim artırma ve marka bilinirliği stratejileri.",
    imageSrc: "https://placehold.co/600x400/indigo/white?text=Sosyal+Medya+Kampanyası",
    link: "/portfolio/social-media-campaign"
  },
  {
    title: "Mobil Uygulama",
    category: "Uygulama Geliştirme",
    description: "iOS ve Android için geliştirilmiş kullanıcı dostu mobil uygulama. Sezgisel arayüz ve hızlı performans.",
    imageSrc: "https://placehold.co/600x400/indigo/white?text=Mobil+Uygulama",
    link: "/portfolio/mobile-app"
  },
  {
    title: "Kurumsal Kimlik Tasarımı",
    category: "Marka Tasarımı",
    description: "Yeni bir şirket için tasarlanmış kapsamlı kurumsal kimlik. Logo, kartvizit, antetli kağıt ve daha fazlası.",
    imageSrc: "https://placehold.co/600x400/indigo/white?text=Kurumsal+Kimlik",
    link: "/portfolio/corporate-identity"
  },
  {
    title: "SEO Optimizasyonu",
    category: "SEO",
    description: "E-ticaret sitesi için yapılan SEO çalışması. Organik trafik %150 artırıldı ve dönüşüm oranları iyileştirildi.",
    imageSrc: "https://placehold.co/600x400/indigo/white?text=SEO+Projesi",
    link: "/portfolio/seo-project"
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base text-indigo-700 font-semibold tracking-wide uppercase">Portfolyo</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl drop-shadow-sm">
              Son Projelerimiz
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Müşterilerimiz için geliştirdiğimiz başarılı projelerden bazıları.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="relative h-60 w-full">
                <Image 
                  src={item.imageSrc} 
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-700 bg-indigo-50 mb-2">
                  {item.category}
                </span>
                <h4 className="text-xl font-bold text-indigo-800 mb-2">{item.title}</h4>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link href={item.link} className="text-indigo-700 hover:text-indigo-800 font-medium inline-flex items-center">
                  Detayları Gör
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-indigo-700 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors shadow-sm"
          >
            Tüm Projelerimizi Görüntüleyin
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 