"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Globe, Code, BarChart } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Background decoration */}
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div className="relative h-full max-w-screen-xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-indigo-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" className="text-indigo-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl drop-shadow-sm"
              >
                <span className="block">Dijital Dünyada</span>
                <span className="block text-indigo-700">Markanızı Parlatın</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-3 text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl"
              >
                NOVA AJANS olarak, AI destekli çözümlerimizle markanızı dijital dünyada öne çıkarıyoruz. 
                Web tasarımdan sosyal medya yönetimine, SEO&apos;dan içerik üretimine kadar tüm dijital ihtiyaçlarınız için yanınızdayız.
              </motion.p>
              
              <div className="mt-5 sm:flex sm:justify-center lg:justify-start md:mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 md:py-4 md:text-lg md:px-10 transition-colors shadow-md"
                  >
                    Hemen Başlayın
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-3 sm:mt-0 sm:ml-3"
                >
                  <a
                    href="#services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors shadow-sm border-gray-200"
                  >
                    Hizmetlerimiz
                  </a>
                </motion.div>
              </div>
              
              {/* Feature badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-2"
              >
                <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm p-3 rounded-lg shadow-sm border border-gray-100 flex items-center">
                  <Zap className="h-6 w-6 text-indigo-700 mr-2 drop-shadow-sm" />
                  <span className="text-sm font-medium text-gray-700">Hızlı Teslimat</span>
                </div>
                <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm p-3 rounded-lg shadow-sm border border-gray-100 flex items-center">
                  <Globe className="h-6 w-6 text-indigo-700 mr-2 drop-shadow-sm" />
                  <span className="text-sm font-medium text-gray-700">Global Standartlar</span>
                </div>
              </motion.div>
            </div>
            
            {/* Hero visual - Sadece büyük ekranlarda görünecek */}
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center hidden md:block">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative block w-full h-64 sm:h-72 md:h-96 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '20px 20px' }}></div>
                    
                    {/* 3D Floating elements */}
                    <motion.div 
                      animate={{ 
                        y: [0, -15, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="absolute top-10 left-10 w-20 h-20 bg-white rounded-lg shadow-xl flex items-center justify-center"
                    >
                      <Code className="h-10 w-10 text-indigo-700" />
                    </motion.div>
                    
                    <motion.div 
                      animate={{ 
                        y: [0, 15, 0],
                        rotate: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 7,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 0.5
                      }}
                      className="absolute bottom-10 right-10 w-16 h-16 bg-indigo-300 rounded-full shadow-xl flex items-center justify-center"
                    >
                      <BarChart className="h-8 w-8 text-indigo-900" />
                    </motion.div>
                    
                    <motion.div 
                      animate={{ 
                        y: [0, 10, 0],
                        x: [0, 10, 0]
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1
                      }}
                      className="absolute top-1/2 right-5 transform -translate-y-1/2 w-12 h-12 bg-yellow-300 rounded-lg shadow-xl flex items-center justify-center rotate-12"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-800" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                      </svg>
                    </motion.div>
                    
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center"
                    >
                      <div className="text-3xl font-bold mb-2">NOVA AI</div>
                      <div className="text-lg font-medium">Dijital Çözümler</div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -right-10 top-1/4 bg-white rounded-lg shadow-lg p-4 border border-gray-100 hidden lg:block"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">%100 Müşteri Memnuniyeti</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -left-10 bottom-1/4 bg-white rounded-lg shadow-lg p-4 border border-gray-100 hidden lg:block"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">AI Destekli Çözümler</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 