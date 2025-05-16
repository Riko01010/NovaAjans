import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Gizlilik Politikası | NOVA AJANS AI',
  description: 'NOVA AJANS AI Simge Perçin Yücel gizlilik politikası ve kişisel verilerin korunması hakkında bilgiler.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h1 className="text-3xl font-bold text-indigo-900 mb-6">Gizlilik Politikası</h1>
            <p className="text-gray-600 mb-4">Son Güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
            
            <div className="prose prose-indigo max-w-none">
              <p className="mb-4">
                Bu Gizlilik Politikası, NOVA AJANS AI ("biz", "bizim" veya "bize") tarafından toplanan, kullanılan ve korunan kişisel bilgilerinizi açıklamaktadır. Bu politikayı kabul ederek, bilgilerinizi bu politikaya uygun olarak kullanmamıza izin vermiş olursunuz.
              </p>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">1. Topladığımız Bilgiler</h2>
              <p className="mb-4">
                Biz, aşağıdaki türde bilgileri toplayabiliriz:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Kişisel Bilgiler:</strong> Ad, e-posta adresi, telefon numarası gibi kimliğinizi belirleyebilecek bilgiler.</li>
                <li><strong>Kullanım Verileri:</strong> Web sitemizi nasıl kullandığınıza dair bilgiler (örneğin, IP adresi, tarayıcı türü, ziyaret edilen sayfalar).</li>
                <li><strong>Çerezler:</strong> Web sitemizdeki etkileşimlerinizi izlemek için çerezler kullanabiliriz.</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">2. Bilgilerin Kullanımı</h2>
              <p className="mb-4">
                Topladığımız bilgileri aşağıdaki amaçlarla kullanabiliriz:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Hizmetlerimizi sağlamak ve sürdürmek.</li>
                <li>Kullanıcı deneyimini geliştirmek.</li>
                <li>Müşteri desteği sağlamak.</li>
                <li>Web sitemizin kullanımını analiz etmek.</li>
                <li>Pazarlama ve tanıtım amaçları için iletişim kurmak.</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">3. Bilgilerin Paylaşımı</h2>
              <p className="mb-4">
                Kişisel bilgilerinizi üçüncü şahıslarla paylaşmayacağız, ancak aşağıdaki durumlarda paylaşabiliriz:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Yasal gereklilikler veya mahkeme kararları doğrultusunda.</li>
                <li>Hizmet sağlayıcıları ile işbirliği yaparak (örneğin, analiz hizmetleri).</li>
                <li>İşletmemizin devri veya birleşmesi durumunda.</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">4. Güvenlik</h2>
              <p className="mb-4">
                Kişisel bilgilerinizi korumak için uygun güvenlik önlemleri alıyoruz. Ancak, internet üzerinden veri iletiminin tamamen güvenli olduğunu garanti edemeyiz.
              </p>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">5. Haklarınız</h2>
              <p className="mb-4">
                Kişisel bilgilerinize erişim, düzeltme veya silme hakkına sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
              </p>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">6. Çocukların Gizliliği</h2>
              <p className="mb-4">
                Web sitemiz, 13 yaşından küçük çocuklara yönelik değildir. Bu yaş grubundaki çocuklardan bilerek kişisel bilgi toplamıyoruz. Eğer böyle bir bilgi topladığımızı fark edersek, derhal sileceğiz.
              </p>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">7. Değişiklikler</h2>
              <p className="mb-4">
                Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Değişiklikler yapıldığında, güncellenmiş politikayı web sitemizde yayınlayacağız. Lütfen bu politikayı düzenli olarak kontrol edin.
              </p>
              
              <h2 className="text-xl font-semibold text-indigo-800 mt-8 mb-4">8. İletişim</h2>
              <p className="mb-4">
                Bu Gizlilik Politikası hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:
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