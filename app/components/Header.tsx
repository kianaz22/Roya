import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function Header() {
  const { t } = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000000] !bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt={t('company.name')}
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/products" className="text-white hover:text-gray-300 transition-colors">
              {t('nav.products')}
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              {t('nav.about')}
            </Link>
            <Link href="/careers" className="text-white hover:text-gray-300 transition-colors">
              {t('nav.careers')}
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
              {t('nav.contact')}
            </Link>
            <Link href="/feedback" className="text-white hover:text-gray-300 transition-colors">
              {t('nav.feedback')}
            </Link>
            <Link href="/news" className="text-white hover:text-gray-300 transition-colors">
              {t('nav.news')}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#000000] !bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-white hover:text-gray-300">
              {t('nav.home')}
            </Link>
            <Link href="/products" className="block px-3 py-2 text-white hover:text-gray-300">
              {t('nav.products')}
            </Link>
            <Link href="/about" className="block px-3 py-2 text-white hover:text-gray-300">
              {t('nav.about')}
            </Link>
            <Link href="/careers" className="block px-3 py-2 text-white hover:text-gray-300">
              {t('nav.careers')}
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-white hover:text-gray-300">
              {t('nav.contact')}
            </Link>
            <Link href="/feedback" className="block px-3 py-2 text-white hover:text-gray-300">
              {t('nav.feedback')}
            </Link>
            <Link href="/news" className="block px-3 py-2 text-white hover:text-gray-300">
              {t('nav.news')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 