import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">NOVA<span className="text-blue-300">AJANS</span><span className="text-blue-300 drop-shadow-sm"> AI</span></h3>
            <p className="text-indigo-100 mb-4">
              Yapay zeka destekli reklam ve web hizmetleri ajansınız. Markanızı dijital dünyada öne çıkarıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-indigo-200 hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-indigo-200 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-indigo-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-indigo-200 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetler/web-tasarim" className="text-indigo-200 hover:text-white transition-colors">
                  Web Tasarım
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/ai-pazarlama" className="text-indigo-200 hover:text-white transition-colors">
                  AI Destekli Pazarlama
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/seo-optimizasyonu" className="text-indigo-200 hover:text-white transition-colors">
                  SEO Optimizasyonu
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/icerik-uretimi" className="text-indigo-200 hover:text-white transition-colors">
                  İçerik Üretimi
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/sosyal-medya" className="text-indigo-200 hover:text-white transition-colors">
                  Sosyal Medya Yönetimi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-300 mr-2 mt-1 flex-shrink-0 drop-shadow-sm" />
                <span className="text-indigo-100">
                  Beşiktaş, İstanbul, Türkiye
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-300 mr-2 flex-shrink-0 drop-shadow-sm" />
                <span className="text-indigo-100">0 555 520 34 51</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-300 mr-2 flex-shrink-0 drop-shadow-sm" />
                <span className="text-indigo-100">info@novaajansai.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-indigo-200 text-sm">
              &copy; {new Date().getFullYear()} NOVA AJANS AI. Tüm hakları saklıdır.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/privacy-policy" className="text-indigo-200 hover:text-white text-sm transition-colors">
                    Gizlilik Politikası
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-indigo-200 hover:text-white text-sm transition-colors">
                    Kullanım Şartları
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 