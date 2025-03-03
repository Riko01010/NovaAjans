"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-700">NOVA</span>
              <span className="text-2xl font-bold text-gray-800">AJANS</span>
              <span className="text-2xl font-bold text-indigo-700">.AI</span>
              
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-gray-600 hover:text-indigo-700 px-3 py-2 text-sm font-medium transition-colors">
              Hizmetlerimiz
            </Link>
            <Link href="/#about" className="text-gray-600 hover:text-indigo-700 px-3 py-2 text-sm font-medium transition-colors">
              Hakkımızda
            </Link>
            <Link href="/#contact" className="text-gray-600 hover:text-indigo-700 px-3 py-2 text-sm font-medium transition-colors">
              İletişim
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-indigo-700 px-3 py-2 text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-800 transition-colors shadow-sm">
              Teklif Al
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/#services" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Hizmetlerimiz
            </Link>
            <Link href="/#about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Hakkımızda
            </Link>
            <Link href="/#contact" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              İletişim
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-700 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/#contact" className="block px-3 py-2 text-base font-medium bg-indigo-700 text-white hover:bg-indigo-800 rounded-md shadow-sm" onClick={() => setIsMenuOpen(false)}>
              Teklif Al
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 