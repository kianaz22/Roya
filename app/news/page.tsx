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
  timestamp: number;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Is There Hope for the Future of the Startup Ecosystem? | Hadi Farnoud | Founder of Kamva and Pakat",
    titleFa: "امیدی به آینده‌ی اکوسیستم استارتاپی هست؟ | هادی فرنود | موسس کاموا و پاکت",
    description: "A video interview discussing the future of Iran's startup ecosystem with Hadi Farnoud, founder of Kamva and Pakat.",
    descriptionFa: "گفت‌وگوی ویدیویی با هادی فرنود، موسس کاموا و پاکت، درباره آینده اکوسیستم استارتاپی ایران",
    date: "January 15, 2025",
    dateFa: "۲۵ دی ۱۴۰۳",
    category: "interviews",
    link: "https://www.youtube.com/watch?v=oz6sQGYOz-Q",
    timestamp: new Date("2025-01-15").getTime()
  },
  {
    id: 2,
    title: "Hadi Farnoud Discusses Hamahang's Impact on Business Meetings",
    titleFa: "هادی فرنود درباره تأثیر هماهنگ بر جلسات کاری",
    description: "Hadi Farnoud shares insights about how Hamahang is revolutionizing the way businesses schedule and manage their meetings.",
    descriptionFa: "هادی فرنود درباره چگونگی انقلابی که هماهنگ در نحوه برنامه‌ریزی و مدیریت جلسات کاری ایجاد کرده است، صحبت می‌کند.",
    date: "February 1, 2024",
    dateFa: "۱۲ بهمن ۱۴۰۲",
    category: "interviews",
    link: "https://dmboard.media/professional/interviews/hadifarnoud-intervew-about-hamahang/",
    timestamp: new Date("2024-02-01").getTime()
  },
  {
    id: 3,
    title: "Interview with Hadi Farnoud | Why Did You Return to Iran?",
    titleFa: "🎙 گفت‌وگو با هادی فرنود | آخه چرا برگشتی ایران",
    description: "An in-depth interview with Hadi Farnoud discussing his return to Iran and his vision for the country's tech industry.",
    descriptionFa: "گفت‌وگوی عمیق با هادی فرنود درباره بازگشت به ایران و دیدگاه او درباره صنعت فناوری کشور",
    date: "December 20, 2024",
    dateFa: "۲۹ آذر ۱۴۰۳",
    category: "interviews",
    link: "https://www.youtube.com/watch?v=9wxDsfrEtYk",
    timestamp: new Date("2024-12-20").getTime()
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
    link: "https://www.jamejamdaily.ir/Newspaper/item/138623",
    timestamp: new Date("2022-04-28").getTime()
  },
  {
    id: 5,
    title: "Episode 23 - Country's Progress | Hadi Farnoud",
    titleFa: "Episode 23 - پیشرفت کشور | هادی فرنود",
    description: "A discussion about the country's progress and development in the technology sector.",
    descriptionFa: "گفت‌وگویی درباره پیشرفت و توسعه کشور در بخش فناوری",
    date: "November 15, 2023",
    dateFa: "۲۴ آبان ۱۴۰۲",
    category: "interviews",
    link: "https://www.youtube.com/watch?v=XWFVVTldmnU",
    timestamp: new Date("2023-11-15").getTime()
  },
  {
    id: 6,
    title: "Kamva Email Marketing Rebrands to Pakat",
    titleFa: "تغییر نام ایمیل مارکتینگ کاموا به پاکت",
    description: "Announcement of the rebranding of Kamva Email Marketing service to Pakat.",
    descriptionFa: "اعلام تغییر نام سرویس ایمیل مارکتینگ کاموا به پاکت",
    date: "March 4, 2020",
    dateFa: "۱۴ اسفند ۱۳۹۸",
    category: "press",
    link: "https://pakat.net/1398/12/14/pakat-rebranding/",
    timestamp: new Date("2020-03-04").getTime()
  },
  {
    id: 7,
    title: "Hamahang Meeting Management Service Launched",
    titleFa: "سرویس مدیریت جلسات «هماهنگ» راه‌اندازی شد",
    description: "Launch of Hamahang, a new service for managing and coordinating business meetings.",
    descriptionFa: "راه‌اندازی هماهنگ، سرویس جدید مدیریت و هماهنگی جلسات کاری",
    date: "September 1, 2021",
    dateFa: "۱۰ شهریور ۱۴۰۰",
    category: "press",
    link: "https://startup360.ir/%D8%B3%D8%B1%D9%88%DB%8C%D8%B3-%D9%85%D8%AF%DB%8C%D8%B1%DB%8C%D8%AA-%D8%AC%D9%84%D8%B3%D8%A7%D8%AA-%D9%87%D9%85%D8%A7%D9%87%D9%86%DA%AF-%D8%B1%D8%A7%D9%87%E2%80%8C%D8%A7%D9%86%D8%AF%D8%A7/",
    timestamp: new Date("2021-09-01").getTime()
  },
  {
    id: 8,
    title: "How to Build Loyal Customers with Email Marketing",
    titleFa: "چطور با ایمیل مارکتینگ، مشتری‌های وفادار بسازیم؟",
    description: "A webinar about building customer loyalty through effective email marketing strategies.",
    descriptionFa: "وبیناری درباره ساخت مشتریان وفادار از طریق استراتژی‌های موثر ایمیل مارکتینگ",
    date: "June 15, 2021",
    dateFa: "۲۵ خرداد ۱۴۰۰",
    category: "events",
    link: "https://eseminar.tv/webinar/%D8%A7%D8%B3%D8%AA%D9%81%D8%A7%D8%AF%D9%87-%D8%A7%D8%B2-%D9%BE%D9%88%D8%B4-%D9%BE%DB%8C%D8%A7%D9%85%DA%A9-%D9%88-%D8%A7%DB%8C%D9%85%DB%8C%D9%84-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%AD%D9%81%D8%B8-%D9%88-%D8%A8%D8%A7%D8%B2%DA%AF%D8%B4%D8%AA-%D9%85%D8%B4%D8%AA%D8%B1%DB%8C",
    timestamp: new Date("2021-06-15").getTime()
  },
  {
    id: 9,
    title: "Hamahang: A Product for Meeting Coordination",
    titleFa: "هماهنگ، محصولی برای هماهنگی جلسات",
    description: "Detailed coverage of Hamahang's features and benefits for meeting coordination.",
    descriptionFa: "پوشش دقیق ویژگی‌ها و مزایای هماهنگ برای هماهنگی جلسات",
    date: "March 10, 2023",
    dateFa: "۱۹ اسفند ۱۴۰۱",
    category: "press",
    link: "https://hamyarekarafarin.com/news/18066/%D9%87%D9%85%D8%A7%D9%87%D9%86%DA%AF%D8%8C-%D9%85%D8%AD%D8%B5%D9%88%D9%84%DB%8C-%D8%A8%D8%B1%D8%A7%DB%8C-%D9%87%D9%85%D8%A7%D9%87%D9%86%DA%AF%DB%8C-%D8%AC%D9%84%D8%B3%D8%A7%D8%AA/",
    timestamp: new Date("2023-03-10").getTime()
  },
  {
    id: 10,
    title: "Iran's Digital Marketing Path in 2025: From Challenges to Smart Opportunities",
    titleFa: "مسیر بازاریابی دیجیتال ایران در سال ۱۴۰۴؛ از چالش‌ها تا فرصت‌های هوشمند",
    description: "An article by Hadi Farnoud, CEO of Pakat, about the future of digital marketing in Iran.",
    descriptionFa: "یادداشتی به قلم هادی فرنود، مدیرعامل پاکت، درباره آینده بازاریابی دیجیتال در ایران",
    date: "January 5, 2024",
    dateFa: "۱۵ دی ۱۴۰۲",
    category: "press",
    link: "https://dmboard.media/professional/pick/hadi-farnoud-pakat/",
    timestamp: new Date("2024-01-05").getTime()
  },
  {
    id: 11,
    title: "Hadi Farnoud: Pakat to Launch SMS Marketing Service Soon",
    titleFa: "هادی فرنود: پاکت بزودی سرویس بازاریابی پیامکی ارائه می‌دهد",
    description: "Announcement of Pakat's upcoming SMS marketing service by CEO Hadi Farnoud.",
    descriptionFa: "اعلام سرویس جدید بازاریابی پیامکی پاکت توسط هادی فرنود، مدیرعامل",
    date: "October 20, 2023",
    dateFa: "۲۸ مهر ۱۴۰۲",
    category: "press",
    link: "https://dmboard.media/news/pakat-ceo-and-new-services/",
    timestamp: new Date("2023-10-20").getTime()
  },
  {
    id: 12,
    title: "Management Interview: Hadi Farnoud (Founder of Kamva Website Builder)",
    titleFa: "گفتگوی مدیریتی : هادی فرنود (موسس سایت ساز کاموا)",
    description: "An in-depth interview with Hadi Farnoud about his journey from graduating from Surrey University to founding Kamva and his entrepreneurial experiences in both UK and Iran.",
    descriptionFa: "گفتگوی عمیق با هادی فرنود درباره مسیر او از فارغ‌التحصیلی از دانشگاه ساری تا تأسیس کاموا و تجربیات کارآفرینی او در انگلستان و ایران",
    date: "April 29, 2016",
    dateFa: "۹ اردیبهشت ۱۳۹۵",
    category: "interviews",
    link: "https://www.masirezehni.com/tv/01-interview-farnoud/",
    timestamp: new Date("2016-04-29").getTime()
  },
  {
    id: 13,
    title: "Zoomit Report: 12th Startup Grind Isfahan",
    titleFa: "گزارش زومیت از دوازدهمین رویداد استارتاپ گرایند اصفهان",
    description: "Coverage of the 12th Startup Grind event in Isfahan, featuring discussions about the startup ecosystem and entrepreneurship.",
    descriptionFa: "پوشش دوازدهمین رویداد استارتاپ گرایند اصفهان، با تمرکز بر اکوسیستم استارتاپی و کارآفرینی",
    date: "July 19, 2016",
    dateFa: "۲۹ تیر ۱۳۹۵",
    category: "events",
    link: "https://www.zoomit.ir/report/133373-zoomit-report-isfahan-12th-startup-grind/",
    timestamp: new Date("2016-07-19").getTime()
  },
  {
    id: 14,
    title: "Interview with Hadi Farnoud on Aparat",
    titleFa: "گفتگو با هادی فرنود در آپارات",
    description: "A video interview discussing entrepreneurship and technology in Iran.",
    descriptionFa: "گفتگوی ویدیویی درباره کارآفرینی و فناوری در ایران",
    date: "March 15, 2023",
    dateFa: "۲۴ اسفند ۱۴۰۱",
    category: "interviews",
    link: "https://www.aparat.com/v/k932mib",
    timestamp: new Date("2023-03-15").getTime()
  },
  {
    id: 15,
    title: "Hadi Farnoud on Digital Marketing",
    titleFa: "هادی فرنود درباره بازاریابی دیجیتال",
    description: "Expert insights on digital marketing strategies and trends.",
    descriptionFa: "نظرات کارشناسی درباره استراتژی‌ها و روندهای بازاریابی دیجیتال",
    date: "February 20, 2023",
    dateFa: "۱ اسفند ۱۴۰۱",
    category: "interviews",
    link: "https://www.aparat.com/v/v46z48i",
    timestamp: new Date("2023-02-20").getTime()
  },
  {
    id: 16,
    title: "Startup Ecosystem Discussion",
    titleFa: "گفتگو درباره اکوسیستم استارتاپی",
    description: "A panel discussion about the current state and future of Iran's startup ecosystem.",
    descriptionFa: "گفتگوی میزگرد درباره وضعیت فعلی و آینده اکوسیستم استارتاپی ایران",
    date: "January 10, 2023",
    dateFa: "۲۰ دی ۱۴۰۱",
    category: "events",
    link: "https://www.aparat.com/v/v06785y",
    timestamp: new Date("2023-01-10").getTime()
  },
  {
    id: 17,
    title: "Technology Innovation in Iran",
    titleFa: "نوآوری فناوری در ایران",
    description: "Exploring innovative technology solutions and their impact on business development.",
    descriptionFa: "بررسی راه‌حل‌های نوآورانه فناوری و تأثیر آنها بر توسعه کسب و کار",
    date: "December 5, 2022",
    dateFa: "۱۴ آذر ۱۴۰۱",
    category: "press",
    link: "https://www.aparat.com/v/x6248b0",
    timestamp: new Date("2022-12-05").getTime()
  },
  {
    id: 18,
    title: "Entrepreneurship Journey",
    titleFa: "مسیر کارآفرینی",
    description: "Personal experiences and lessons learned in the entrepreneurial journey.",
    descriptionFa: "تجربیات شخصی و درس‌های آموخته شده در مسیر کارآفرینی",
    date: "November 20, 2022",
    dateFa: "۲۹ آبان ۱۴۰۱",
    category: "interviews",
    link: "https://www.aparat.com/v/0Zwt8",
    timestamp: new Date("2022-11-20").getTime()
  },
  {
    id: 19,
    title: "Digital Transformation",
    titleFa: "تحول دیجیتال",
    description: "Discussion about digital transformation in Iranian businesses.",
    descriptionFa: "گفتگو درباره تحول دیجیتال در کسب و کارهای ایرانی",
    date: "October 15, 2022",
    dateFa: "۲۳ مهر ۱۴۰۱",
    category: "events",
    link: "https://www.aparat.com/v/e97k869",
    timestamp: new Date("2022-10-15").getTime()
  },
  {
    id: 20,
    title: "Future of E-commerce",
    titleFa: "آینده تجارت الکترونیک",
    description: "Analysis of e-commerce trends and future developments.",
    descriptionFa: "تحلیل روندهای تجارت الکترونیک و تحولات آینده",
    date: "September 10, 2022",
    dateFa: "۱۹ شهریور ۱۴۰۱",
    category: "press",
    link: "https://www.aparat.com/v/a45ejf1",
    timestamp: new Date("2022-09-10").getTime()
  },
  {
    id: 21,
    title: "Tech Startup Success Stories",
    titleFa: "داستان‌های موفقیت استارتاپ‌های فناوری",
    description: "Showcasing successful tech startups and their growth stories.",
    descriptionFa: "معرفی استارتاپ‌های فناوری موفق و داستان‌های رشد آنها",
    date: "August 5, 2022",
    dateFa: "۱۴ مرداد ۱۴۰۱",
    category: "press",
    link: "https://www.aparat.com/v/L4ZY0",
    timestamp: new Date("2022-08-05").getTime()
  },
  {
    id: 22,
    title: "Innovation in Business",
    titleFa: "نوآوری در کسب و کار",
    description: "Exploring innovative approaches to business development and growth.",
    descriptionFa: "بررسی رویکردهای نوآورانه در توسعه و رشد کسب و کار",
    date: "July 20, 2022",
    dateFa: "۲۹ تیر ۱۴۰۱",
    category: "events",
    link: "https://www.aparat.com/v/yvtl9xc",
    timestamp: new Date("2022-07-20").getTime()
  }
];

export default function NewsPage() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'interviews' | 'events' | 'press'>('all');

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  // Sort news items by timestamp in descending order (newest first)
  const sortedNews = [...filteredNews].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <Layout>
      <section className="min-h-screen pt-16 pb-16 md:pb-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-white"></div>
        <div className="absolute inset-0">
        </div>

        <div className="container mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-semi-bold mb-4 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
                  {t('news.title')}
                </h1>
                <p className="text-xl text-black max-w-3xl leading-relaxed">
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
                    : 'bg-zinc-100 text-black hover:bg-zinc-200'
                }`}
              >
                {t('news.categories.all')}
              </button>
              <button
                onClick={() => setActiveCategory('interviews')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'interviews'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-zinc-100 text-black hover:bg-zinc-200'
                }`}
              >
                {t('news.categories.interviews')}
              </button>
              <button
                onClick={() => setActiveCategory('events')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'events'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-zinc-100 text-black hover:bg-zinc-200'
                }`}
              >
                {t('news.categories.events')}
              </button>
              <button
                onClick={() => setActiveCategory('press')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'press'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-zinc-100 text-black hover:bg-zinc-200'
                }`}
              >
                {t('news.categories.press')}
              </button>
            </div>

            {/* News List */}
            <div className="space-y-8">
              {sortedNews.length > 0 ? (
                sortedNews.map((item) => (
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
                            <div className="text-sm text-black font-medium">
                              {language === 'en' ? item.date : item.dateFa}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-grow">
                            <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-blue-600 transition-colors">
                              {language === 'en' ? item.title : item.titleFa}
                            </h3>
                            <p className="text-lg text-black group-hover:text-zinc-700 transition-colors leading-relaxed mb-6">
                              {language === 'en' ? item.description : item.descriptionFa}
                            </p>
                            <div className="flex items-center text-blue-600 font-medium">
                              {t('news.readMore')}
                              <svg
                                className={`w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform ${language === 'fa' ? 'rotate-180' : ''}`}
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
                  <p className="text-black text-lg">{t('news.noNews')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 