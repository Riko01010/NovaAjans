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
      imageUrl: '/images/blog/bblog1.jpg',
      category: 'Yapay Zeka',
    },
    {
      id: 2,
      slug: 'teknolojik-yenilikler-sirketler',
      title: 'Teknolojik Yenilikleri Yakalayan Şirketlerin Geleceği',
      excerpt: 'Teknolojik dönüşüme ayak uyduran şirketlerin rekabet avantajı ve gelecekte nasıl öne çıkacakları hakkında detaylı bir analiz.',
      date: '22 Haziran 2024',
      imageUrl: '/images/blog/bblog2.jpg',
      category: 'Teknoloji',
    },
    {
      id: 3,
      slug: 'dijital-reklamin-onemi',
      title: 'Dijital Reklamın Önemi ve Etkili Stratejiler',
      excerpt: 'Modern iş dünyasında dijital reklamın kritik rolü ve markanızı öne çıkaracak etkili dijital reklam stratejileri.',
      date: '29 Haziran 2024',
      imageUrl: '/images/blog/bblog3.jpg',
      category: 'Dijital Pazarlama',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16 pt-28">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">NOVA AJANS Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Dijital dünya, web tasarım, yapay zeka ve teknoloji hakkında güncel bilgiler ve uzman görüşleri.</p>
          </div>
          
          {/* Featured Post */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image 
                  src={blogPosts[0].imageUrl} 
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full">
                  {blogPosts[0].category}
                </div>
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className="text-sm text-gray-500 mb-2">{blogPosts[0].date}</span>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 line-clamp-2">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6 line-clamp-3">{blogPosts[0].excerpt}</p>
                <Link href={`/blog/${blogPosts[0].slug}`} className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                  Devamını Oku
                </Link>
              </div>
            </div>
          </div>
          
          {/* Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <div className="relative h-56">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500 mb-2 block">{post.date}</span>
                  <h2 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
                    Devamını Oku
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}