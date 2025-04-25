'use client';

import { useLanguage } from '../context/LanguageContext';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-sm">
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-500/10 to-transparent blur-[0.5px]"></div>
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/5 to-transparent blur-[1px]"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold font-space-grotesk tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {t('company.name')}
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-zinc-300 hover:text-white transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-zinc-300 hover:text-white transition-colors relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/careers" className="text-zinc-300 hover:text-white transition-colors relative group">
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-zinc-300 hover:text-white transition-colors relative group">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/feedback" className="text-zinc-300 hover:text-white transition-colors relative group">
                Suggestions & Complaints
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </Link>
              <button
                onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
                className="px-4 py-1.5 rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-300 text-sm font-medium"
              >
                {language === 'en' ? 'فارسی' : 'English'}
              </button>
            </nav>
            <button className="md:hidden p-2 rounded-lg hover:bg-zinc-800/50 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-8 md:px-16 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  Roya E-commerce
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Transforming the future of technology with innovative solutions and creative approaches.
                </p>
              </div>

              {/* Products */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Products</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Kamva</a>
                  </li>
                  <li>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Pakat</a>
                  </li>
                  <li>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Hamahang</a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-zinc-400 hover:text-white transition-colors text-sm">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors text-sm">Contact</Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-zinc-400 hover:text-white transition-colors text-sm">Careers</Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:roya.engineering@gmail.com" className="text-zinc-400 hover:text-white transition-colors text-sm">
                      roya.engineering@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-zinc-400 text-sm">
                      Enghelab Street, Balavar Alley, No. 7
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:021-91015383" className="text-zinc-400 hover:text-white transition-colors text-sm">
                      021-91015383
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-zinc-800">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-zinc-400 text-sm">
                  © 2024 Roya E-commerce. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 