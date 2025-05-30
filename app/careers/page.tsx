'use client';

import { useLanguage } from '../context/LanguageContext';
import Layout from '../components/Layout';

export default function Careers() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Join Our Team",
      culture: {
        title: "Our Culture",
        description: "At Roya E-commerce, we foster a culture of innovation, collaboration, and continuous learning. We believe in creating an environment where everyone can thrive and make a meaningful impact.",
        items: [
          {
            title: "Innovation",
            description: "We encourage creative thinking and continuous innovation in everything we do."
          },
          {
            title: "Collaboration",
            description: "We believe in the power of teamwork and open communication."
          },
          {
            title: "Growth",
            description: "We support personal and professional development through learning and mentorship."
          }
        ]
      },
      benefits: {
        title: "Benefits & Perks",
        items: [
          {
            title: "Competitive Salary",
            description: "We offer competitive compensation packages that reflect your skills and experience."
          },
          {
            title: "Health & Wellness",
            description: "Comprehensive health insurance and wellness programs to support your well-being."
          },
          {
            title: "Learning & Development",
            description: "Access to training programs, workshops, and resources for continuous learning."
          },
          {
            title: "Work-Life Balance",
            description: "Flexible working hours and remote work options to maintain a healthy balance."
          }
        ]
      },
      positions: {
        title: "Open Positions",
        noPositions: "There are currently no open positions. Please check back later.",
        jobs: [
          {
            title: "Senior Frontend Developer",
            department: "Engineering",
            location: "Tehran, Iran",
            type: "Full-time",
            description: "We are looking for an experienced Frontend Developer to join our team and help build the next generation of our e-commerce platform."
          },
          {
            title: "Product Manager",
            department: "Product",
            location: "Tehran, Iran",
            type: "Full-time",
            description: "Join our product team to help shape the future of our products and services, working closely with engineering and design teams."
          },
          {
            title: "UX/UI Designer",
            department: "Design",
            location: "Tehran, Iran",
            type: "Full-time",
            description: "We are seeking a talented UX/UI Designer to create beautiful and intuitive user interfaces for our products."
          }
        ]
      },
      cta: {
        title: "Don't See a Perfect Match?",
        description: "We're always looking for talented individuals who share our passion for innovation and excellence. Send us your resume and we'll keep you in mind for future opportunities.",
        button: "Send Your Resume"
      }
    },
    fa: {
      title: "به تیم ما بپیوندید",
      culture: {
        title: "فرهنگ ما",
        description: "در تجارت الکترونیک رویا، ما فرهنگ نوآوری، همکاری و یادگیری مستمر را پرورش می‌دهیم. ما معتقدیم که باید محیطی ایجاد کنیم که همه بتوانند رشد کنند و تأثیر معناداری داشته باشند.",
        items: [
          {
            title: "نوآوری",
            description: "ما تفکر خلاقانه و نوآوری مستمر را در همه کارهایمان تشویق می‌کنیم."
          },
          {
            title: "همکاری",
            description: "ما به قدرت کار تیمی و ارتباطات باز اعتقاد داریم."
          },
          {
            title: "رشد",
            description: "ما از توسعه شخصی و حرفه‌ای از طریق یادگیری و راهنمایی حمایت می‌کنیم."
          }
        ]
      },
      benefits: {
        title: "مزایا و امتیازات",
        items: [
          {
            title: "حقوق رقابتی",
            description: "ما بسته‌های جبران خسارت رقابتی ارائه می‌دهیم که مهارت‌ها و تجربه شما را منعکس می‌کند."
          },
          {
            title: "سلامت و تندرستی",
            description: "بیمه درمانی جامع و برنامه‌های سلامتی برای حمایت از رفاه شما."
          },
          {
            title: "یادگیری و توسعه",
            description: "دسترسی به برنامه‌های آموزشی، کارگاه‌ها و منابع برای یادگیری مستمر."
          },
          {
            title: "تعادل کار و زندگی",
            description: "ساعات کاری انعطاف‌پذیر و گزینه‌های کار از راه دور برای حفظ تعادل سالم."
          }
        ]
      },
      positions: {
        title: "موقعیت‌های شغلی",
        noPositions: "در حال حاضر هیچ موقعیت شغلی باز وجود ندارد. لطفاً بعداً بررسی کنید.",
        jobs: [
          {
            title: "توسعه‌دهنده ارشد فرانت‌اند",
            department: "مهندسی",
            location: "تهران، ایران",
            type: "تمام وقت",
            description: "ما به دنبال یک توسعه‌دهنده فرانت‌اند با تجربه هستیم تا به تیم ما بپیوندد و به ساخت نسل بعدی پلتفرم تجارت الکترونیک ما کمک کند."
          },
          {
            title: "مدیر محصول",
            department: "محصول",
            location: "تهران، ایران",
            type: "تمام وقت",
            description: "به تیم محصول ما بپیوندید تا به شکل‌دهی آینده محصولات و خدمات ما کمک کنید، در همکاری نزدیک با تیم‌های مهندسی و طراحی."
          },
          {
            title: "طراح UX/UI",
            department: "طراحی",
            location: "تهران، ایران",
            type: "تمام وقت",
            description: "ما به دنبال یک طراح UX/UI با استعداد هستیم تا رابط‌های کاربری زیبا و کاربرپسند برای محصولات ما ایجاد کند."
          }
        ]
      },
      cta: {
        title: "موقعیت مناسب خود را نمی‌بینید؟",
        description: "ما همیشه به دنبال افراد با استعداد هستیم که اشتیاق ما به نوآوری و برتری را به اشتراک می‌گذارند. رزومه خود را برای ما ارسال کنید و ما شما را برای فرصت‌های آینده در نظر خواهیم گرفت.",
        button: "ارسال رزومه"
      }
    }
  };

  const currentContent = language === 'en' ? content.en : content.fa;

  return (
    <Layout>
      <section className="min-h-screen pt-16 pb-16 md:pb-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[rgb(235,248,255)]"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/50 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/50 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semi-bold md:mb-16 mb-8 text-[rgb(0,74,179)]">
              {currentContent.title}
            </h1>

            {/* Culture Section */}
            <div className="mb-24">
              <h2 className="text-3xl font-semi-bold mb-6 text-[rgb(0,74,179)]">{currentContent.culture.title}</h2>
              <p className="text-base text-gray-700 mb-12 max-w-3xl">{currentContent.culture.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {currentContent.culture.items.map((item, index) => (
                  <div key={index} className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-semi-bold mb-4 text-[rgb(0,74,179)] hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p className="text-base text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-24">
              <h2 className="text-3xl font-semi-bold mb-6 text-[rgb(0,74,179)]">{currentContent.benefits.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentContent.benefits.items.map((benefit, index) => (
                  <div key={index} className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-semi-bold mb-4 text-[rgb(0,74,179)] hover:text-blue-600 transition-colors">{benefit.title}</h3>
                    <p className="text-base text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Positions Section */}
            <div className="mb-24">
              <h2 className="text-3xl font-semi-bold mb-6 text-[rgb(0,74,179)]">{currentContent.positions.title}</h2>
              <p className="text-base text-gray-700">{currentContent.positions.noPositions}</p>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-6">{currentContent.cta.title}</h2>
                <p className="text-white mb-8 max-w-2xl mx-auto">{currentContent.cta.description}</p>
                <a
                  href="mailto:royaecommerce.engineering@gmail.com"
                  className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300"
                >
                  {currentContent.cta.button}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 