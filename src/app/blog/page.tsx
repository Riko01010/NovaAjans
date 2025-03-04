import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'NOVA AJANS - Blog',
  description: 'Dijital dünya, web tasarım, yapay zeka ve teknoloji hakkında güncel bilgiler.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      slug: 'gelecek-ai-yazilimlar',
      title: 'Geleceğin AI Kullanarak Oluşturulan Yazılımları',
      excerpt: 'Yapay zeka teknolojilerinin yazılım geliştirme süreçlerini nasıl dönüştürdüğünü ve geleceğin yazılım dünyasını nasıl şekillendireceğini keşfedin.',
      date: '15 Haziran 2024',
      imageUrl: '/images/blog/ai-software.jpg',
    },
    {
      id: 2,
      slug: 'teknolojik-yenilikler-sirketler',
      title: 'Teknolojik Yenilikleri Yakalayan Şirketlerin Geleceği',
      excerpt: 'Teknolojik dönüşüme ayak uyduran şirketlerin rekabet avantajı ve gelecekte nasıl öne çıkacakları hakkında detaylı bir analiz.',
      date: '22 Haziran 2024',
      imageUrl: '/images/blog/tech-innovation.jpg',
    },
    {
      id: 3,
      slug: 'dijital-reklamin-onemi',
      title: 'Dijital Reklamın Önemi ve Etkili Stratejiler',
      excerpt: 'Modern iş dünyasında dijital reklamın kritik rolü ve markanızı öne çıkaracak etkili dijital reklam stratejileri.',
      date: '29 Haziran 2024',
      imageUrl: '/images/blog/digital-advertising.jpg',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 pt-24">
        <h1 className="text-4xl font-bold text-center mb-12">NOVA AJANS Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{post.title.split(' ')[0]}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
                  Devamını Oku
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
} 