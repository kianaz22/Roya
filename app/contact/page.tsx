'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Layout from '../components/Layout';

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const content = {
    en: {
      title: "Contact Us",
      getInTouch: {
        title: "Get in Touch",
        description: "Roya E-commerce is always with you along this journey, and our support team is available to answer your questions at any time."
      },
      email: {
        title: "Email Us",
        address: "royaecommerce.engineering@gmail.com"
      },
      address: {
        title: "Address",
        text: "Enghelab Street, Balavar Alley, No. 7"
      },
      phone: {
        title: "Phone",
        number: "021-91015383"
      },
      form: {
        title: "Send us a Message",
        description: "Fill out the form below and we'll get back to you as soon as possible.",
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submit: "Send Message"
      }
    },
    fa: {
      title: "تماس با ما",
      getInTouch: {
        title: "ارتباط با ما",
        description: "ما مشتاق شنیدن نظرات شما هستیم. لطفاً از طریق هر یک از روش‌های زیر با ما در تماس باشید."
      },
      email: {
        title: "ایمیل",
        address: "royaecommerce.engineering@gmail.com"
      },
      address: {
        title: "آدرس",
        text: "خیابان انقلاب، کوچه بالاور، پلاک ۷"
      },
      phone: {
        title: "تلفن",
        number: "۰۲۱۹۱۰۱۵۳۸۳"
      },
      form: {
        title: "ارسال پیام",
        description: "فرم زیر را پر کنید و ما در اسرع وقت با شما تماس خواهیم گرفت.",
        name: "نام",
        email: "ایمیل",
        subject: "موضوع",
        message: "پیام",
        submit: "ارسال پیام"
      }
    }
  };

  const currentContent = language === 'en' ? content.en : content.fa;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Layout>
      <section className="min-h-screen pt-32 pb-16 md:pt-48 md:pb-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-100 to-white"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 to-transparent"></div>
        </div>

        <div className="container mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
              {currentContent.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl font-semibold text-zinc-800 mb-6">{currentContent.getInTouch.title}</h2>
                  <p className="text-zinc-600 leading-relaxed text-lg">
                    {currentContent.getInTouch.description}
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-800 mb-2 group-hover:text-blue-600 transition-colors">{currentContent.email.title}</h3>
                        <a href={`mailto:${currentContent.email.address}`} className="text-zinc-600 hover:text-blue-600 transition-colors">{currentContent.email.address}</a>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-800 mb-2 group-hover:text-purple-600 transition-colors">{currentContent.address.title}</h3>
                        <p className="text-zinc-600">{currentContent.address.text}</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/10 to-red-500/10">
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-zinc-800 mb-2 group-hover:text-pink-600 transition-colors">{currentContent.phone.title}</h3>
                        <a href={`tel:${currentContent.phone.number}`} className="text-zinc-600 hover:text-pink-600 transition-colors">{currentContent.phone.number}</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-zinc-800 mb-6">{currentContent.form.title}</h2>
                  <p className="text-zinc-600 leading-relaxed text-lg mb-8">
                    {currentContent.form.description}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-2">
                      {currentContent.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 border border-zinc-200/50 rounded-lg text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                      {currentContent.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 border border-zinc-200/50 rounded-lg text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 mb-2">
                      {currentContent.form.subject}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 border border-zinc-200/50 rounded-lg text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                      {currentContent.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/50 border border-zinc-200/50 rounded-lg text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {currentContent.form.submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 