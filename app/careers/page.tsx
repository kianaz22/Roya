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
        innovation: {
          title: "Innovation",
          description: "We encourage creative thinking and continuous innovation in everything we do."
        },
        collaboration: {
          title: "Collaboration",
          description: "We believe in the power of teamwork and open communication."
        },
        growth: {
          title: "Growth",
          description: "We support personal and professional development through learning and mentorship."
        }
      },
      positions: {
        title: "Open Positions",
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
      benefits: {
        title: "Benefits & Perks",
        health: {
          title: "Health & Wellness",
          items: [
            "Comprehensive health insurance",
            "Mental health support",
            "Fitness program"
          ]
        },
        learning: {
          title: "Learning & Development",
          items: [
            "Professional development budget",
            "Conference attendance",
            "Internal training programs"
          ]
        },
        workLife: {
          title: "Work-Life Balance",
          items: [
            "Flexible working hours",
            "Remote work options",
            "Generous time off"
          ]
        },
        office: {
          title: "Office Perks",
          items: [
            "Modern office space",
            "Free snacks and drinks",
            "Team events and activities"
          ]
        }
      }
    },
    fa: {
      title: "به تیم ما بپیوندید",
      culture: {
        title: "فرهنگ ما",
        innovation: {
          title: "نوآوری",
          description: "ما تفکر خلاقانه و نوآوری مستمر را در تمام کارهایمان تشویق می‌کنیم."
        },
        collaboration: {
          title: "همکاری",
          description: "ما به قدرت کار تیمی و ارتباطات باز اعتقاد داریم."
        },
        growth: {
          title: "رشد",
          description: "ما از رشد شخصی و حرفه‌ای از طریق یادگیری و راهنمایی حمایت می‌کنیم."
        }
      },
      positions: {
        title: "موقعیت‌های شغلی",
        jobs: [
          {
            title: "توسعه‌دهنده ارشد فرانت‌اند",
            department: "مهندسی",
            location: "تهران، ایران",
            type: "تمام وقت",
            description: "ما به دنبال یک توسعه‌دهنده فرانت‌اند با تجربه هستیم تا به تیم ما بپیوندد و در ساخت نسل بعدی پلتفرم تجارت الکترونیک ما کمک کند."
          },
          {
            title: "مدیر محصول",
            department: "محصول",
            location: "تهران، ایران",
            type: "تمام وقت",
            description: "به تیم محصول ما بپیوندید تا در شکل‌دهی آینده محصولات و خدمات ما، با همکاری نزدیک با تیم‌های مهندسی و طراحی کمک کنید."
          },
          {
            title: "طراح رابط کاربری",
            department: "طراحی",
            location: "تهران، ایران",
            type: "تمام وقت",
            description: "ما به دنبال یک طراح رابط کاربری با استعداد هستیم تا رابط‌های کاربری زیبا و کاربرپسند برای محصولات ما ایجاد کند."
          }
        ]
      },
      benefits: {
        title: "مزایا و امکانات",
        health: {
          title: "سلامت و تندرستی",
          items: [
            "بیمه درمانی جامع",
            "پشتیبانی سلامت روان",
            "برنامه تناسب اندام"
          ]
        },
        learning: {
          title: "یادگیری و توسعه",
          items: [
            "بودجه توسعه حرفه‌ای",
            "حضور در کنفرانس‌ها",
            "برنامه‌های آموزشی داخلی"
          ]
        },
        workLife: {
          title: "تعادل کار و زندگی",
          items: [
            "ساعات کاری انعطاف‌پذیر",
            "گزینه‌های کار از راه دور",
            "مرخصی‌های سخاوتمندانه"
          ]
        },
        office: {
          title: "امکانات دفتر",
          items: [
            "فضای دفتر مدرن",
            "خوراکی‌ها و نوشیدنی‌های رایگان",
            "رویدادها و فعالیت‌های تیمی"
          ]
        }
      }
    }
  };

  const currentContent = language === 'en' ? content.en : content.fa;

  return (
    <Layout>
      <div className="container mx-auto px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            {currentContent.title}
          </h1>
          
          <div className="space-y-16">
            {/* Company Culture */}
            <section className="space-y-8">
              <h2 className="text-3xl font-semibold text-white">{currentContent.culture.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">{currentContent.culture.innovation.title}</h3>
                    <p className="text-zinc-700">{currentContent.culture.innovation.description}</p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">{currentContent.culture.collaboration.title}</h3>
                    <p className="text-zinc-700">{currentContent.culture.collaboration.description}</p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">{currentContent.culture.growth.title}</h3>
                    <p className="text-zinc-700">{currentContent.culture.growth.description}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Job Listings */}
            <section className="space-y-8">
              <h2 className="text-3xl font-semibold text-white">{currentContent.positions.title}</h2>
              <div className="space-y-6">
                {currentContent.positions.jobs.map((job, index) => (
                  <div key={index} className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-zinc-900">{job.title}</h3>
                          <p className="text-zinc-600">{job.department}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-zinc-600">{job.location}</p>
                          <p className="text-zinc-600">{job.type}</p>
                        </div>
                      </div>
                      <p className="text-zinc-700 mb-4">{job.description}</p>
                      <button className="bg-zinc-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
                        {language === 'en' ? 'Apply Now' : 'درخواست همکاری'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="space-y-8">
              <h2 className="text-3xl font-semibold text-white">{currentContent.benefits.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">{currentContent.benefits.health.title}</h3>
                    <ul className="space-y-2 text-zinc-700">
                      {currentContent.benefits.health.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">{currentContent.benefits.learning.title}</h3>
                    <ul className="space-y-2 text-zinc-700">
                      {currentContent.benefits.learning.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">{currentContent.benefits.workLife.title}</h3>
                    <ul className="space-y-2 text-zinc-700">
                      {currentContent.benefits.workLife.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">{currentContent.benefits.office.title}</h3>
                    <ul className="space-y-2 text-zinc-700">
                      {currentContent.benefits.office.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
} 