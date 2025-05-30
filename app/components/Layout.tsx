'use client';

import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
  lightMode?: boolean;
}

export default function Layout({ children, lightMode = false }: LayoutProps) {
  const { t, language, setLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen ${lightMode ? 'bg-white text-black' : 'bg-zinc-900 text-white'} ${language === 'fa' ? 'font-[var(--font-vazirmatn)]' : ''}`} dir={language === 'fa' ? 'rtl' : 'ltr'}>
      {/* Navigation Header */}
      <header className={`${lightMode ? 'bg-white' : 'bg-black'}  md:py-4`}>
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <Link href="/" className="relative w-10 md:w-16 h-8 mr-2 md:mr-0.5">
                  <Image
                    src="/logo.svg"
                    alt={t('company.name')}
                    fill
                    className="object-contain"
                    priority
                  />
                </Link>
                <Link href="/" className={`text-lg md:text-xl font-semi-bold font-space-grotesk ${lightMode ? 'text-black hover:text-black' : 'text-white hover:text-gray-300'} transition-all duration-300 whitespace-nowrap`}>
                  {t('company.name')}
                </Link>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/#products" className={`text-sm ${lightMode ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400'} transition-colors relative group`}>
                  {t('nav.products')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all group-hover:w-full"></span>
                </Link>
                <Link href="/about" className={`text-sm ${lightMode ? 'text-black hover:text-blue-600' : 'text-white hover:text-blue-400'} transition-colors relative group`}>
                  {t('nav.about')}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all group-hover:w-full"></span>
                </Link>
                <div className="relative group">
                  <button className={`text-sm ${lightMode ? 'text-black hover:text-purple-600' : 'text-white hover:text-purple-400'} transition-colors relative group flex items-center gap-1`}>
                    {t('nav.contact')}
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all group-hover:w-full"></span>
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 rounded-xl shadow-lg bg-white/95 backdrop-blur-sm ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform origin-top">
                    <div className="py-2">
                      <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors">
                        {t('nav.contact')}
                      </Link>
                      <Link href="/news" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors">
                        {t('nav.news')}
                      </Link>
                      <Link href="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-purple-600 transition-colors">
                        {t('nav.careers')}
                      </Link>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
                  className={`flex items-center gap-2 px-4 py-1 rounded-full border-2 ${lightMode ? 'border-zinc-900 text-black hover:border-zinc-600' : 'border-white text-white hover:border-gray-300'} transition-colors`}
                >
                  <span className="text-sm font-medium">
                    {language === "en" ? "فارسی" : "English"}
                  </span>
                </button>
              </nav>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg ${lightMode ? 'hover:bg-zinc-100 text-black' : 'hover:bg-zinc-800 text-white'} transition-colors`}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto px-8 h-full">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-8 p-2 rounded-lg hover:bg-zinc-100 text-black transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col items-center justify-center h-full space-y-8">
           
            <nav className="flex flex-col items-center space-y-8">
              <Link 
                href="/#products" 
                className="text-xl text-black hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.products')}
              </Link>
              <Link 
                href="/about" 
                className="text-xl text-black hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/contact" 
                className="text-xl text-black hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <Link 
                href="/news" 
                className="text-xl text-black hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.news')}
              </Link>
              <Link 
                href="/careers" 
                className="text-xl text-black hover:text-purple-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.careers')}
              </Link>
              <button
                onClick={() => {
                  setLanguage(language === 'en' ? 'fa' : 'en');
                  setIsMobileMenuOpen(false);
                }}
                className="text-black px-6 py-2 rounded-full border border-zinc-900 hover:border-zinc-600 hover:bg-zinc-100 transition-all duration-300 text-lg font-bold"
              >
                {language === 'en' ? 'فارسی' : 'English'}
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#161616]  to-[#0a0a0a]">
        <div className="container mx-auto px-8 md:px-16 py-12 ">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="relative w-8 h-8">
                    <Image
                      src="/logo.svg"
                      alt={t('company.name')}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t('company.name')}
                  </h3>
                </div>
                <p className="text-white text-xs leading-relaxed">
                  {t('footer.company.description')}
                </p>
              </div>

              {/* Company */}
              <div className="space-y-4">
                {/* <h4 className="text-lg font-semibold text-white">{t('footer.sections.company')}</h4> */}
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-white hover:text-blue-400 transition-colors text-sm">{t('nav.about')}</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-white hover:text-purple-400 transition-colors text-sm">{t('nav.contact')}</Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-white hover:text-pink-400 transition-colors text-sm">{t('nav.careers')}</Link>
                  </li>
                 
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                {/* <h4 className="text-lg font-semibold text-white">{t('footer.sections.contact')}</h4> */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:royaecommerce.engineering@gmail.com" className="text-white hover:text-white transition-colors text-sm">
                      {language === 'en' ? 'royaecommerce.engineering@gmail.com' : 'royaecommerce.engineering@gmail.com'}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-white text-sm">
                      {language === 'en' ? 'Enghelab Street, Balavar Alley, No. 7' : 'خیابان انقلاب، کوچه بالاور، پلاک ۷'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:021-91015383" className="text-white hover:text-white transition-colors text-sm">
                      {language === 'en' ? '021-91015383' : '۰۲۱۹۱۰۱۵۳۸۳'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section - Full Width Border */}
         <div className="border-t border-zinc-700 mt-8">
          <div className="container mx-auto px-8 md:px-16 py-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <p className="text-black text-xs">
                  {t('footer.copyright')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
} 