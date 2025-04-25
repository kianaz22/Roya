'use client';

import { useLanguage } from '../context/LanguageContext';
import Layout from '../components/Layout';

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About Roya E-commerce",
      paragraphs: [
        "Roya E-commerce is a leading technology company dedicated to transforming the future of online business through innovative solutions and creative approaches. Our mission is to make technology not only make lives easier but also creatively and innovatively transform the world into a better place.",
        "Founded with a vision to revolutionize the e-commerce landscape, we have developed a suite of powerful tools and services that empower businesses to thrive in the digital age. Our comprehensive platform includes Kamva for online store management, Pakat for email marketing, and Hamahang for seamless meeting coordination.",
        "At Roya E-commerce, we believe in the power of technology to create meaningful connections and drive business growth. Our team of experts is committed to providing cutting-edge solutions that help businesses succeed in an increasingly competitive digital marketplace.",
        "We take pride in our commitment to excellence, innovation, and customer satisfaction. Our goal is to be at the forefront of technological advancement, continuously developing new solutions that address the evolving needs of modern businesses."
      ]
    },
    fa: {
      title: "درباره تجارت الکترونیک رویا",
      paragraphs: [
        "تجارت الکترونیک رویا یک شرکت فناوری پیشرو است که با ارائه راه‌حل‌های نوآورانه و رویکردهای خلاقانه، به دنبال دگرگونی آینده کسب‌وکار آنلاین است. مأموریت ما این است که فناوری را نه تنها برای آسان‌تر کردن زندگی، بلکه برای دگرگونی خلاقانه و نوآورانه جهان به مکانی بهتر به کار گیریم.",
        "با چشم‌اندازی برای انقلابی در عرصه تجارت الکترونیک، ما مجموعه‌ای از ابزارها و خدمات قدرتمند را توسعه داده‌ایم که به کسب‌وکارها کمک می‌کند در عصر دیجیتال رشد کنند. پلتفرم جامع ما شامل کاموا برای مدیریت فروشگاه آنلاین، پاکت برای بازاریابی ایمیلی و هماهنگ برای هماهنگی بی‌نقص جلسات است.",
        "در تجارت الکترونیک رویا، ما به قدرت فناوری در ایجاد ارتباطات معنادار و رشد کسب‌وکار اعتقاد داریم. تیم متخصصان ما متعهد به ارائه راه‌حل‌های پیشرفته‌ای هستند که به کسب‌وکارها در بازار دیجیتال رقابتی کمک می‌کند.",
        "ما به تعهد خود به برتری، نوآوری و رضایت مشتری افتخار می‌کنیم. هدف ما این است که در خط مقدم پیشرفت فناوری باشیم و به طور مداوم راه‌حل‌های جدیدی را توسعه دهیم که نیازهای در حال تحول کسب‌وکارهای مدرن را برآورده می‌کند."
      ]
    }
  };

  return (
    <Layout>
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
              {language === 'en' ? content.en.title : content.fa.title}
            </h1>
            
            <div className="space-y-8 text-lg text-zinc-700">
              {(language === 'en' ? content.en.paragraphs : content.fa.paragraphs).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 