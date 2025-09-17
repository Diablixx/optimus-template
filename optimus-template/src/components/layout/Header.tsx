'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import BlogMegaMenu from './BlogMegaMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBlogMenuOpen, setIsBlogMenuOpen] = useState(false);
  const blogMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Cocon Sémantique', href: '/cocon-semantique' },
    { name: 'Funnel', href: '/funnel' },
  ];

  const handleBlogMouseEnter = () => {
    if (blogMenuTimeoutRef.current) {
      clearTimeout(blogMenuTimeoutRef.current);
    }
    setIsBlogMenuOpen(true);
  };

  const handleBlogMouseLeave = () => {
    blogMenuTimeoutRef.current = setTimeout(() => {
      setIsBlogMenuOpen(false);
    }, 150);
  };

  const closeBlogMenu = () => {
    setIsBlogMenuOpen(false);
    if (blogMenuTimeoutRef.current) {
      clearTimeout(blogMenuTimeoutRef.current);
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Optimus</span>
              <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
              </div>
            </Link>
            <div className="ml-4">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Optimus
              </Link>
            </div>
          </div>
          <div className="ml-10 space-x-4 hidden lg:block">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            {/* Blog Mega Menu */}
            <div
              className="relative inline-block"
              onMouseEnter={handleBlogMouseEnter}
              onMouseLeave={handleBlogMouseLeave}
            >
              <button
                className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200 flex items-center"
                aria-expanded={isBlogMenuOpen}
              >
                Blog
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isBlogMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <BlogMegaMenu isOpen={isBlogMenuOpen} onClose={closeBlogMenu} />
            </div>
          </div>
          <div className="ml-4 flex items-center space-x-4">
            <Link
              href="/login"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Connexion
            </Link>
            <Link
              href="/offre-pdf"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition-colors duration-200"
            >
              Offre PDF
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}