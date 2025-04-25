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
        noPositions: "در حال حاضر موقعیت شغلی باز وجود ندارد. لطفاً بعداً مراجعه کنید.",
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
      <section className="pt-36  bg-white relative h-screen">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl  font-bold mb-12 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
              {currentContent.title}
            </h1>
            
            <div className="space-y-16">
             

              {/* Job Listings */}
              <section className="space-y-8">
                <h2 className="text-2xl font-semibold text-zinc-800">{currentContent.positions.title}:</h2>
                <div className="space-y-6">
                  <p className="text-zinc-500 text-lg">{currentContent.positions.noPositions}</p>
                </div>
              </section>

              {/* Benefits */}
             
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 