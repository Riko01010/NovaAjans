"use client";

import Link from 'next/link';

export default function BlogPreviewSection() {
  const blogPosts = [
    {
      id: 1,
      slug: 'gelecek-ai-yazilimlar',
      title: 'Geleceğin AI Kullanarak Oluşturulan Yazılımları',
      excerpt: 'Yapay zeka teknolojilerinin yazılım geliştirme süreçlerini nasıl dönüştürdüğünü ve geleceğin yazılım dünyasını nasıl şekillendireceğini keşfedin.',
      date: '15 Haziran 2024',
    },
    {
      id: 2,
      slug: 'teknolojik-yenilikler-sirketler',
      title: 'Teknolojik Yenilikleri Yakalayan Şirketlerin Geleceği',
      excerpt: 'Teknolojik dönüşüme ayak uyduran şirketlerin rekabet avantajı ve gelecekte nasıl öne çıkacakları hakkında detaylı bir analiz.',
      date: '22 Haziran 2024',
    },
    {
      id: 3,
      slug: 'dijital-reklamin-onemi',
      title: 'Dijital Reklamın Önemi ve Etkili Stratejiler',
      excerpt: 'Modern iş dünyasında dijital reklamın kritik rolü ve markanızı öne çıkaracak etkili dijital reklam stratejileri.',
      date: '29 Haziran 2024',
    },
  ];

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Blog</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                  Devamını Oku →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/blog" className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors shadow-md">
            Tüm Blog Yazılarını Gör
          </Link>
        </div>
      </div>
    </section>
  );
} 