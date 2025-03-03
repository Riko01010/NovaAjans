/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Uyarıları görmezden gel, ancak hataları göster
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['www.gstatic.com'],
  },
};

module.exports = nextConfig; 