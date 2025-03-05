"use client";

import { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // EmailJS'yi başlat
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // API anahtarlarını kontrol et
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    
    // API anahtarları eksikse hata göster
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS yapılandırması eksik');
      setSubmitError('E-posta gönderme hizmeti şu anda kullanılamıyor. Lütfen doğrudan bizimle iletişime geçin.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // EmailJS ile e-posta gönderme
      const result = await emailjs.sendForm(
        serviceId as string,
        templateId as string,
        formRef.current as HTMLFormElement,
        {
          publicKey: publicKey as string,
        }
      );
      
      console.log('E-posta gönderildi!', result.text);
      
      // Form sıfırlama ve başarı mesajı gösterme
      setFormData({
        user_name: '',
        user_email: '',
        user_phone: '',
        user_subject: '',
        message: ''
      });
      setSubmitSuccess(true);
      
      // 5 saniye sonra başarı mesajını gizle
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('E-posta gönderme hatası:', error);
      setSubmitError('Bir hata oluştu. Lütfen WhatsApp veya telefon üzerinden bizimle iletişime geçin.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base text-indigo-700 font-semibold tracking-wide uppercase">İLETİŞİM</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl drop-shadow-sm">
              Bizimle İletişime Geçin
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Projeniz veya sorularınız için bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
            </p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
          >
            <h4 className="text-2xl font-bold text-indigo-800 mb-6">İletişim Bilgilerimiz</h4>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-700 mr-3 mt-1 drop-shadow-sm" />
                <div>
                  <h5 className="text-lg font-semibold text-indigo-800">Adres</h5>
                  <p className="text-gray-600 mt-1">
                    Yenimahalle Fırın Sokak No:24/4<br />
                    Beşiktaş, İstanbul, Türkiye
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-700 mr-3 mt-1 drop-shadow-sm" />
                <div>
                  <h5 className="text-lg font-semibold text-indigo-800">Telefon / WhatsApp</h5>
                  <p className="text-gray-600 mt-1">
                    <a 
                      href="https://wa.me/905555203451" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-indigo-700 transition-colors"
                    >
                      0 555 520 34 51
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512" 
                        className="h-4 w-4 ml-2 text-green-500 fill-current"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-700 mr-3 mt-1 drop-shadow-sm" />
                <div>
                  <h5 className="text-lg font-semibold text-indigo-800">E-posta</h5>
                  <p className="text-gray-600 mt-1">info@novaajansai.com</p>
                  <p className="text-gray-600">destek@novaajansai.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-semibold text-indigo-800 mb-4">Çalışma Saatlerimiz</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-indigo-800">Pazartesi - Cuma</h5>
                  <p className="text-gray-600">09:00 - 18:00</p>
                </div>
                <div>
                  <h5 className="font-medium text-indigo-800">Cumartesi</h5>
                  <p className="text-gray-600">10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-700 focus:border-indigo-700 text-gray-900"
                  />
                </div>
                
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta Adresiniz *
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-700 focus:border-indigo-700 text-gray-900"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon Numaranız
                  </label>
                  <input
                    type="tel"
                    id="user_phone"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-700 focus:border-indigo-700 text-gray-900"
                  />
                </div>
                
                <div>
                  <label htmlFor="user_subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Firma Adı *
                  </label>
                  <input
                    type="text"
                    id="user_subject"
                    name="user_subject"
                    value={formData.user_subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-700 focus:border-indigo-700 text-gray-900"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Bize projeniz hakkında biraz bilgi verir misiniz *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-700 focus:border-indigo-700 text-gray-900"
                ></textarea>
              </div>
              
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4">
                  Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
                  {submitError}
                </div>
              )}
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 transition-colors shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Mesajı Gönder
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 