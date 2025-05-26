'use client';

import { useLanguage } from '../context/LanguageContext';
import Layout from '../components/Layout';
import { useState } from 'react';

interface NewsItem {
  id: number;
  title: string;
  titleFa: string;
  description: string;
  descriptionFa: string;
  date: string;
  dateFa: string;
  category: 'interviews' | 'events' | 'press';
  link: string;
}

const newsItems: NewsItem[] = [
  {
    id: 2,
    title: "Hadi Farnoud Discusses Hamahang's Impact on Business Meetings",
    titleFa: "هادی فرنود درباره تأثیر هماهنگ بر جلسات کاری",
    description: "Hadi Farnoud shares insights about how Hamahang is revolutionizing the way businesses schedule and manage their meetings.",
    descriptionFa: "هادی فرنود درباره چگونگی انقلابی که هماهنگ در نحوه برنامه‌ریزی و مدیریت جلسات کاری ایجاد کرده است، صحبت می‌کند.",
    date: "February 1, 2024",
    dateFa: "۱۲ بهمن ۱۴۰۲",
    category: "interviews",
    link: "https://dmboard.media/professional/interviews/hadifarnoud-intervew-about-hamahang/"
  },
  {
    id: 4,
    title: "Roya E-commerce: Iranian Digital Business Experience",
    titleFa: "تجارت الکترونیک رویا تجربه کسب‌وکار دیجیتال ایرانی",
    description: "A comprehensive coverage in Jame Jam newspaper about Roya E-commerce's three main products: Kamva, Pakat, and Hamahang, and their impact on Iran's digital business landscape.",
    descriptionFa: "گزارش جامع روزنامه جام جم درباره سه محصول اصلی تجارت الکترونیک رویا: کاموا، پاکت و هماهنگ، و تأثیر آنها بر فضای کسب و کار دیجیتال ایران.",
    date: "April 28, 2022",
    dateFa: "۸ اردیبهشت ۱۴۰۱",
    category: "press",
    link: "https://www.jamejamdaily.ir/Newspaper/item/138623"
  }
];

export default function NewsPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'interviews' | 'events' | 'press'>('all');

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <Layout>
      <section className="min-h-screen pt-16 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-white"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 to-transparent"></div>
        </div>

        <div className="container mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
                  {t('news.title')}
                </h1>
                <p className="text-xl text-zinc-600 max-w-3xl leading-relaxed">
                  {t('news.description')}
                </p>
              </div>
            
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {t('news.categories.all')}
              </button>
              <button
                onClick={() => setActiveCategory('interviews')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'interviews'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {t('news.categories.interviews')}
              </button>
              <button
                onClick={() => setActiveCategory('events')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'events'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {t('news.categories.events')}
              </button>
              <button
                onClick={() => setActiveCategory('press')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'press'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {t('news.categories.press')}
              </button>
            </div>

            {/* News List */}
            <div className="space-y-8">
              {filteredNews.length > 0 ? (
                filteredNews.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="relative overflow-hidden">
                      {/* Category Badge */}
                      <div className="absolute top-0 right-0 z-10">
                        <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-bl-lg">
                          {t(`news.categories.${item.category}`)}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 bg-gradient-to-br from-zinc-50 to-white rounded-2xl border border-zinc-200/50 hover:border-zinc-300/50 transition-all duration-300">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          {/* Date */}
                          <div className="flex-shrink-0">
                            <div className="text-sm text-zinc-500 font-medium">
                              {language === 'en' ? item.date : item.dateFa}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-grow">
                            <h3 className="text-2xl font-bold mb-4 text-zinc-900 group-hover:text-blue-600 transition-colors">
                              {language === 'en' ? item.title : item.titleFa}
                            </h3>
                            <p className="text-lg text-zinc-600 group-hover:text-zinc-700 transition-colors leading-relaxed mb-6">
                              {language === 'en' ? item.description : item.descriptionFa}
                            </p>
                            <div className="flex items-center text-blue-600 font-medium">
                              {t('news.readMore')}
                              <svg
                                className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-zinc-600 text-lg">{t('news.noNews')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 