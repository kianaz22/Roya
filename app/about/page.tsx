'use client';

import { useLanguage } from '../context/LanguageContext';
import Layout from '../components/Layout';

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Us",
      mainContent: {
        title: "Our Story",
        paragraphs: [
          "Roya E-commerce is a leading technology company dedicated to transforming the future of online business through innovative solutions and creative approaches. Our mission is to make technology not only make lives easier but also creatively and innovatively transform the world into a better place.",
          "Founded with a vision to revolutionize the e-commerce landscape, we have developed a suite of powerful tools and services that empower businesses to thrive in the digital age. Our comprehensive platform includes Kamva for online store management, Pakat for email marketing, and Hamahang for seamless meeting coordination.",
          "At Roya E-commerce, we believe in the power of technology to create meaningful connections and drive business growth. Our team of experts is committed to providing cutting-edge solutions that help businesses succeed in an increasingly competitive digital marketplace.",
          "We take pride in our commitment to excellence, innovation, and customer satisfaction. Our goal is to be at the forefront of technological advancement, continuously developing new solutions that address the evolving needs of modern businesses."
        ]
      },
      stats: {
        title: "Our Impact",
        items: [
          { number: "10K+", label: "Active Users" },
          { number: "500+", label: "Business Partners" },
          { number: "99%", label: "Customer Satisfaction" },
          { number: "24/7", label: "Support Available" }
        ]
      },
      values: {
        title: "Our Values",
        items: [
          {
            title: "Innovation",
            description: "We constantly push boundaries and explore new possibilities to create cutting-edge solutions."
          },
          {
            title: "Excellence",
            description: "We strive for excellence in everything we do, delivering the highest quality products and services."
          },
          {
            title: "Customer Focus",
            description: "Our customers are at the heart of everything we do, and their success is our success."
          }
        ]
      },
      team: {
        title: "Our Team",
        description: "Our diverse team of experts brings together a wealth of experience and expertise in technology, business, and customer service. We work together to create innovative solutions that make a difference."
      },
      cta: {
        title: "Join Us on Our Journey",
        description: "We're always looking for talented individuals who share our passion for innovation and excellence.",
        button: "View Careers"
      }
    },
    fa: {
      title: "درباره ما",
      mainContent: {
        title: "داستان ما",
        paragraphs: [
          "تجارت الکترونیک رویا یک شرکت فناوری پیشرو است که با ارائه راه‌حل‌های نوآورانه و رویکردهای خلاقانه، به دنبال دگرگونی آینده کسب‌وکار آنلاین است. مأموریت ما این است که فناوری را نه تنها برای آسان‌تر کردن زندگی، بلکه برای دگرگونی خلاقانه و نوآورانه جهان به مکانی بهتر به کار گیریم.",
          "با چشم‌اندازی برای انقلابی در عرصه تجارت الکترونیک، ما مجموعه‌ای از ابزارها و خدمات قدرتمند را توسعه داده‌ایم که به کسب‌وکارها کمک می‌کند در عصر دیجیتال رشد کنند. پلتفرم جامع ما شامل کاموا برای مدیریت فروشگاه آنلاین، پاکت برای بازاریابی ایمیلی و هماهنگ برای هماهنگی بی‌نقص جلسات است.",
          "در تجارت الکترونیک رویا، ما به قدرت فناوری در ایجاد ارتباطات معنادار و رشد کسب‌وکار اعتقاد داریم. تیم متخصصان ما متعهد به ارائه راه‌حل‌های پیشرفته‌ای هستند که به کسب‌وکارها در بازار دیجیتال رقابتی کمک می‌کند.",
          "ما به تعهد خود به برتری، نوآوری و رضایت مشتری افتخار می‌کنیم. هدف ما این است که در خط مقدم پیشرفت فناوری باشیم و به طور مداوم راه‌حل‌های جدیدی را توسعه دهیم که نیازهای در حال تحول کسب‌وکارهای مدرن را برآورده می‌کند."
        ]
      },
      stats: {
        title: "تأثیر ما",
        items: [
          { number: "۱۰ هزار+", label: "کاربر فعال" },
          { number: "۵۰۰+", label: "شریک تجاری" },
          { number: "۹۹٪", label: "رضایت مشتری" },
          { number: "۲۴/۷", label: "پشتیبانی" }
        ]
      },
      values: {
        title: "ارزش‌های ما",
        items: [
          {
            title: "نوآوری",
            description: "ما دائماً مرزها را جابجا می‌کنیم و امکانات جدیدی را برای ایجاد راه‌حل‌های پیشرفته کشف می‌کنیم."
          },
          {
            title: "برتری",
            description: "ما در همه کارهایمان به دنبال برتری هستیم و محصولات و خدمات با بالاترین کیفیت را ارائه می‌دهیم."
          },
          {
            title: "تمرکز بر مشتری",
            description: "مشتریان ما در قلب همه کارهای ما هستند و موفقیت آنها موفقیت ماست."
          }
        ]
      },
      team: {
        title: "تیم ما",
        description: "تیم متنوع متخصصان ما تجربه و تخصص گسترده‌ای در زمینه فناوری، کسب‌وکار و خدمات مشتری را گرد هم آورده است. ما با هم کار می‌کنیم تا راه‌حل‌های نوآورانه‌ای ایجاد کنیم که تفاوت ایجاد می‌کنند."
      },
      cta: {
        title: "به سفر ما بپیوندید",
        description: "ما همیشه به دنبال افراد با استعداد هستیم که اشتیاق ما به نوآوری و برتری را به اشتراک می‌گذارند.",
        button: "مشاهده فرصت‌های شغلی"
      }
    }
  };

  const currentContent = language === 'en' ? content.en : content.fa;

  return (
    <Layout>
      <section className="min-h-screen pt-16 pb-16 md:pt-32 md:pb-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-16 text-zinc-900">
              {currentContent.title}
            </h1>

            {/* Main Content */}
            <div className="mb-24">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-8">{currentContent.mainContent.title}</h2>
              <div className="space-y-8 text-zinc-600 leading-relaxed">
                {currentContent.mainContent.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="mb-24">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-12">{currentContent.stats.title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {currentContent.stats.items.map((stat, index) => (
                  <div key={index} className="group text-center">
                    <div className="text-4xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">{stat.number}</div>
                    <div className="text-sm text-zinc-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-24">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-8">{currentContent.team.title}</h2>
              <p className="text-zinc-600 leading-relaxed text-lg max-w-2xl">{currentContent.team.description}</p>
            </div>

            {/* Values Section */}
            <div className="mb-24">
              <h2 className="text-2xl font-semibold text-zinc-900 mb-12">{currentContent.values.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {currentContent.values.items.map((value, index) => (
                  <div key={index} className="group">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4 group-hover:text-purple-600 transition-colors">{value.title}</h3>
                    <p className="text-zinc-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-zinc-50 rounded-3xl p-12">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-zinc-900 mb-6">{currentContent.cta.title}</h2>
                <p className="text-zinc-600 leading-relaxed mb-8 max-w-2xl mx-auto">{currentContent.cta.description}</p>
                <a
                  href="/careers"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300"
                >
                  {currentContent.cta.button}
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 