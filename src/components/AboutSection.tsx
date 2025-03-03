"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, Users, Briefcase, Calendar, Award } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: <Users className="h-8 w-8 text-white" />, value: "500+", label: "Mutlu Müşteri", color: "bg-gradient-to-r from-blue-600 to-indigo-700" },
    { icon: <Briefcase className="h-8 w-8 text-white" />, value: "1000+", label: "Tamamlanan Proje", color: "bg-gradient-to-r from-indigo-600 to-indigo-800" },
    { icon: <Calendar className="h-8 w-8 text-white" />, value: "15+", label: "Yıllık Tecrübe", color: "bg-gradient-to-r from-blue-700 to-indigo-700" },
    { icon: <Award className="h-8 w-8 text-white" />, value: "5+", label: "Uzman Ekip", color: "bg-gradient-to-r from-indigo-700 to-blue-700" }
  ];

  return (
    <section id="about" className="pt-20 pb-10 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className={`${stat.color} rounded-xl shadow-lg overflow-hidden`}
              >
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-white/90 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-indigo-700 opacity-20 z-10"></div>
              <Image
                src="/ai-agent.jpg"
                alt="NOVA AJANS AI Ekibi"
                fill
                style={{ objectFit: 'cover' }}
                className="z-0"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-base text-indigo-700 font-semibold tracking-wide uppercase">Hakkımızda</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl drop-shadow-sm">
              Yapay Zeka Destekli Dijital Ajansınız
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              NOVA AJANS AI olarak, yapay zeka teknolojilerini kullanarak işletmelerin dijital varlıklarını güçlendiriyoruz. 
              Modern web tasarımı, AI destekli pazarlama stratejileri ve veri odaklı yaklaşımımızla markanızı bir adım öne taşıyoruz.
            </p>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-indigo-800 mb-4">Neden Biz?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-700 mr-2 flex-shrink-0 drop-shadow-sm" />
                  <span className="text-gray-600">Yapay zeka teknolojileri ile desteklenmiş yenilikçi çözümler</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-700 mr-2 flex-shrink-0 drop-shadow-sm" />
                  <span className="text-gray-600">Deneyimli ve uzman ekip</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-700 mr-2 flex-shrink-0 drop-shadow-sm" />
                  <span className="text-gray-600">Müşteri odaklı yaklaşım ve kişiselleştirilmiş hizmetler</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-700 mr-2 flex-shrink-0 drop-shadow-sm" />
                  <span className="text-gray-600">Veri odaklı stratejiler ve ölçülebilir sonuçlar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-700 mr-2 flex-shrink-0 drop-shadow-sm" />
                  <span className="text-gray-600">Sürekli destek ve danışmanlık hizmetleri</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-indigo-800 mb-4">Vizyonumuz</h4>
              <p className="text-gray-600">
                Yapay zeka teknolojilerini kullanarak işletmelerin dijital dönüşümüne öncülük etmek ve 
                müşterilerimizin rekabet avantajı elde etmelerini sağlamak.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 