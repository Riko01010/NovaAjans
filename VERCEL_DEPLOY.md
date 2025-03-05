# Vercel Deployment Rehberi

Bu rehber, NOVA AJANS AI web sitesini Vercel'e deploy etmek için gerekli adımları içerir.

## Gerekli Çevre Değişkenleri

Vercel'de projenizi deploy etmeden önce, aşağıdaki çevre değişkenlerini ayarlamanız gerekir:

### EmailJS Yapılandırması (İletişim Formu için)

İletişim formunun çalışması için EmailJS hesabınızdan aşağıdaki bilgileri almanız ve Vercel'de çevre değişkeni olarak ayarlamanız gerekir:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: EmailJS servis ID'niz
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: EmailJS şablon ID'niz
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: EmailJS public key'iniz

### EmailJS Hesabı Oluşturma ve Ayarlama

1. [EmailJS](https://www.emailjs.com/) adresine gidin ve bir hesap oluşturun (ücretsiz plan ayda 200 e-posta göndermenize izin verir).
2. Bir e-posta servisi ekleyin (Gmail, Outlook, vb.).
3. Bir e-posta şablonu oluşturun ve aşağıdaki parametreleri içerdiğinden emin olun:
   - `user_name`: Gönderenin adı
   - `user_email`: Gönderenin e-posta adresi
   - `user_phone`: Gönderenin telefon numarası
   - `user_subject`: E-postanın konusu
   - `message`: E-posta mesajı
4. Servis ID, Şablon ID ve Public Key bilgilerinizi alın.

## Vercel'de Çevre Değişkenlerini Ayarlama

1. Vercel Dashboard'a giriş yapın.
2. Projenizi seçin.
3. "Settings" sekmesine tıklayın.
4. "Environment Variables" bölümüne gidin.
5. Yukarıda listelenen çevre değişkenlerini ekleyin.
6. "Save" düğmesine tıklayın.
7. Projenizi yeniden deploy edin.

## Diğer API Anahtarları (İsteğe Bağlı)

Eğer aşağıdaki özellikleri kullanmak istiyorsanız, ilgili API anahtarlarını da eklemeniz gerekir:

- Firebase (Kimlik doğrulama ve veritabanı için)
  - `NEXT_PUBLIC_FIREBASE_API_KEY`
  - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
  - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
  - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
  - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
  - `NEXT_PUBLIC_FIREBASE_APP_ID`

- AI Servisleri
  - `OPENAI_API_KEY`
  - `ANTHROPIC_API_KEY`
  - `REPLICATE_API_KEY`
  - `DEEPGRAM_API_KEY`
  - `GROQ_API_KEY`

## Sorun Giderme

Eğer iletişim formu çalışmıyorsa:

1. Tarayıcı konsolunda hata mesajlarını kontrol edin.
2. Vercel'de çevre değişkenlerinin doğru ayarlandığından emin olun.
3. EmailJS hesabınızın aktif olduğunu ve aylık gönderim limitinizi aşmadığınızı kontrol edin.
4. Şablonunuzun doğru parametreleri içerdiğinden emin olun.

## İletişim

Herhangi bir sorunuz veya sorununuz varsa, lütfen bizimle iletişime geçin:

- E-posta: info@novaajansai.com
- WhatsApp: 0 555 520 34 51 