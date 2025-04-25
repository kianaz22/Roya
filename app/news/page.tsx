'use client';

import { useLanguage } from '../context/LanguageContext';
import Layout from '../components/Layout';

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

  return (
    <Layout>
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-8 md:px-16">
          <div className="mb-20 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
              {t('news.title')}
            </h1>
            <p className="text-xl text-zinc-600 max-w-3xl leading-relaxed">
              {t('news.description')}
            </p>
          </div>

          {/* News List */}
          <div className="max-w-6xl mx-auto space-y-8">
            {newsItems.length > 0 ? (
              newsItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="p-8 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                    <div className="relative z-10">
                      <div className="text-sm text-zinc-500 mb-4">
                        {language === 'en' ? item.date : item.dateFa}
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-zinc-900 group-hover:text-zinc-800 transition-colors">
                        {language === 'en' ? item.title : item.titleFa}
                      </h3>
                      <p className="text-lg text-zinc-700 group-hover:text-zinc-600 transition-colors leading-relaxed mb-6">
                        {language === 'en' ? item.description : item.descriptionFa}
                      </p>
                      <div className="flex items-center text-zinc-900 font-medium">
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
                </a>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-zinc-600">{t('news.noNews')}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
} 