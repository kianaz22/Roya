'use client';

import { useLanguage } from '../../context/LanguageContext';
import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function HamahangPage() {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="min-h-[calc(100vh-5rem)] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-white"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-zinc-200/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-zinc-200/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center space-y-12 max-w-2xl mx-auto px-8">
            <div className="relative w-64 h-40 mx-auto">
              <Image
                src="/hamahang-black.08de284b.svg"
                alt="Hamahang Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-xl text-zinc-600 leading-relaxed">
              {t('products.hamahang.description')}
            </p>
            <Link 
              href="https://hamahang.net" 
              target="_blank"
              className="inline-flex items-center gap-3 bg-zinc-900 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-zinc-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>Enter Hamahang</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
} 