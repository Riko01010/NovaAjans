import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Kullanım Şartları | NOVA AJANS AI',
  description: 'NOVA AJANS AI Simge Perçin Yücel kullanım şartları ve koşulları hakkında bilgiler.',
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h1 className="text-3xl font-bold text-indigo-900 mb-6">Kullanım Şartları</h1>
            <p className="text-gray-600 mb-4">Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
            
            <div className="prose prose-indigo max-w-none">
              <p className="mb-4">
                Bu Kullanım Şartları, NOVA AJANS AI web sitesini ve hizmetlerini kullanımınızı düzenleyen koşulları belirler. Web sitemizi ziyaret ederek veya hizmetlerimizi kullanarak, bu şartları kabul etmiş sayılırsınız.
              </p>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">1. Hizmet Kullanımı</h2>
              <p className="mb-4">
                NOVA AJANS AI web sitesini ve hizmetlerini kullanırken:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Tüm geçerli yasalara ve düzenlemelere uyacağınızı kabul edersiniz.</li>
                <li>Web sitemizin güvenliğini tehlikeye atacak herhangi bir eylemde bulunmayacağınızı kabul edersiniz.</li>
                <li>Hizmetlerimizi kötüye kullanmayacağınızı veya hizmet dışı bırakmayacağınızı kabul edersiniz.</li>
                <li>Diğer kullanıcıların hizmetlerimizi kullanmasını engellemeyeceğinizi kabul edersiniz.</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">2. Hesap Sorumluluğu</h2>
              <p className="mb-4">
                Eğer bir hesap oluşturursanız:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Doğru, güncel ve eksiksiz bilgi sağlamakla sorumlusunuz.</li>
                <li>Hesap bilgilerinizin gizliliğini korumakla sorumlusunuz.</li>
                <li>Hesabınız altında gerçekleşen tüm etkinliklerden sorumlusunuz.</li>
                <li>Hesabınızla ilgili herhangi bir güvenlik ihlalini derhal bize bildirmelisiniz.</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">3. Fikri Mülkiyet</h2>
              <p className="mb-4">
                Web sitemiz ve içeriği, NOVA AJANS AI'nin veya lisans verenlerin mülkiyetindedir ve telif hakkı, ticari marka ve diğer fikri mülkiyet yasaları tarafından korunmaktadır. Web sitemizdeki içeriği, önceden yazılı izin almadan ticari amaçlarla kullanamaz, kopyalayamaz, dağıtamaz veya değiştiremezsiniz.
              </p>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">4. Kullanıcı İçeriği</h2>
              <p className="mb-4">
                Web sitemize içerik gönderdiğinizde:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Bu içeriği kullanma, değiştirme, kopyalama, dağıtma ve görüntüleme hakkını bize vermiş olursunuz.</li>
                <li>İçeriğin yasal olduğunu ve üçüncü tarafların haklarını ihlal etmediğini garanti edersiniz.</li>
                <li>İçeriğinizin doğruluğundan ve uygunluğundan sorumlu olduğunuzu kabul edersiniz.</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">5. Hizmet Değişiklikleri</h2>
              <p className="mb-4">
                NOVA AJANS AI, herhangi bir zamanda ve herhangi bir nedenle web sitesini veya hizmetlerini değiştirme, askıya alma veya sonlandırma hakkını saklı tutar. Bu tür değişikliklerden kaynaklanan herhangi bir kayıp veya zarardan sorumlu olmayacağız.
              </p>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">6. Sorumluluk Sınırlaması</h2>
              <p className="mb-4">
                NOVA AJANS AI ve bağlı kuruluşları, web sitemizin veya hizmetlerimizin kullanımından kaynaklanan doğrudan, dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan sorumlu tutulamaz. Web sitemizi ve hizmetlerimizi "olduğu gibi" ve "mevcut olduğu gibi" sunuyoruz ve herhangi bir garanti vermiyoruz.
              </p>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">7. Tazminat</h2>
              <p className="mb-4">
                Bu Kullanım Şartlarını ihlal etmenizden veya web sitemizi uygunsuz kullanmanızdan kaynaklanan tüm iddia, talep, zarar, yükümlülük ve masraflara karşı NOVA AJANS AI'yi, yöneticilerini, çalışanlarını ve temsilcilerini savunacak, tazmin edecek ve zarar görmemelerini sağlayacaksınız.
              </p>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">8. Geçerli Yasa</h2>
              <p className="mb-4">
                Bu Kullanım Şartları, Türkiye Cumhuriyeti yasalarına tabidir ve bu yasalara göre yorumlanacaktır. Bu şartlarla ilgili herhangi bir anlaşmazlık, Türkiye'deki yetkili mahkemelerde çözülecektir.
              </p>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">9. Değişiklikler</h2>
              <p className="mb-4">
                Bu Kullanım Şartlarını herhangi bir zamanda değiştirme hakkını saklı tutarız. Değişiklikler yapıldığında, güncellenmiş şartları web sitemizde yayınlayacağız. Web sitemizi kullanmaya devam etmeniz, değiştirilmiş şartları kabul ettiğiniz anlamına gelir.
              </p>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">10. İletişim</h2>
              <p className="mb-4">
                Bu Kullanım Şartları hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:
              </p>
              <ul className="list-none pl-6 mb-4 space-y-2">
                <li><strong>E-posta:</strong> info@novaajansai.com</li>
                <li><strong>Adres:</strong> Beşiktaş, İstanbul, Türkiye</li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  ← Ana Sayfaya Dön
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 