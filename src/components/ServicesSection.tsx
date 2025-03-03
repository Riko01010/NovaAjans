"use client";

import { motion } from 'framer-motion';
import { Globe, Cpu, Search, PenTool, Instagram, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-10 w-10 text-indigo-700 drop-shadow-sm" />,
    title: "Web Tasarım & Geliştirme",
    description: "Modern, duyarlı ve kullanıcı dostu web siteleri tasarlıyor ve geliştiriyoruz. SEO dostu, hızlı yüklenen ve tüm cihazlarda mükemmel görünen siteler."
  },
  {
    icon: <Cpu className="h-10 w-10 text-indigo-700 drop-shadow-sm" />,
    title: "AI Destekli Pazarlama",
    description: "Yapay zeka teknolojileri ile pazarlama stratejilerinizi optimize ediyoruz. Kişiselleştirilmiş içerik, akıllı hedefleme ve veri odaklı kampanyalar."
  },
  {
    icon: <Search className="h-10 w-10 text-indigo-700 drop-shadow-sm" />,
    title: "SEO Optimizasyonu",
    description: "Arama motorlarında üst sıralarda yer almanızı sağlıyoruz. Anahtar kelime araştırması, içerik optimizasyonu ve teknik SEO hizmetleri."
  },
  {
    icon: <PenTool className="h-10 w-10 text-indigo-700 drop-shadow-sm" />,
    title: "İçerik Üretimi",
    description: "Markanızı yansıtan, hedef kitlenizi etkileyen ve dönüşüm sağlayan içerikler üretiyoruz. Blog yazıları, sosyal medya içerikleri ve daha fazlası."
  },
  {
    icon: <Instagram className="h-10 w-10 text-indigo-700 drop-shadow-sm" />,
    title: "Sosyal Medya Yönetimi",
    description: "Sosyal medya varlığınızı güçlendiriyoruz. İçerik planlaması, topluluk yönetimi ve etkileşim artırma stratejileri."
  },
  {
    icon: <BarChart className="h-10 w-10 text-indigo-700 drop-shadow-sm" />,
    title: "Analitik & Raporlama",
    description: "Veriye dayalı kararlar almanızı sağlıyoruz. Detaylı analitik, performans takibi ve düzenli raporlama hizmetleri."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="pt-10 pb-20 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base text-indigo-700 font-semibold tracking-wide uppercase">Hizmetlerimiz</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl drop-shadow-sm">
              Yapay Zeka Destekli Dijital Çözümler
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              İşletmenizi büyütmek için ihtiyacınız olan tüm dijital hizmetleri sunuyoruz.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="mb-5">{service.icon}</div>
              <h4 className="text-xl font-bold text-indigo-800 mb-3">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
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
          {/* Tüm Hizmetlerimizi Keşfedin butonu kaldırıldı */}
        </motion.div>
      </div>
    </section>
  );
} 