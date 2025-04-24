'use client';

import { useLanguage } from './context/LanguageContext';
import { useState } from 'react';

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/80 backdrop-blur-sm">
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-700/30 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-500/10 to-transparent blur-[0.5px]"></div>
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/5 to-transparent blur-[1px]"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="text-2xl font-bold font-space-grotesk tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              {t('company.name')}
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-zinc-300 hover:text-white transition-colors relative group">
                {t('nav.products')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
              <a href="#team" className="text-zinc-300 hover:text-white transition-colors relative group">
                {t('nav.team')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-zinc-300 hover:text-white transition-colors relative group">
                {t('nav.contact')}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
              <button
                onClick={() => setLanguage(language === 'en' ? 'fa' : 'en')}
                className="px-4 py-1.5 rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50 transition-all duration-300 text-sm font-medium"
              >
                {language === 'en' ? 'فارسی' : 'English'}
              </button>
            </nav>
            <button className="md:hidden p-2 rounded-lg hover:bg-zinc-800/50 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-32">
        {/* Artistic Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center"></div>
        
        {/* Grid Graphics */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main Grid */}
          <div className="absolute inset-0 grid grid-cols-24 gap-2 p-4">
            {[...Array(96)].map((_, i) => (
              <div key={i} className="border border-zinc-500/10"></div>
            ))}
          </div>
          
          {/* Secondary Grid */}
          <div className="absolute inset-0 grid grid-cols-12 gap-4 p-4">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="border border-zinc-500/20"></div>
            ))}
          </div>
          
          {/* Accent Grid Lines */}
          <div className="absolute inset-0">
            {/* Vertical Lines */}
            <div className="absolute top-0 bottom-0 left-1/6 w-px bg-zinc-400/40"></div>
            <div className="absolute top-0 bottom-0 left-1/3 w-px bg-zinc-400/40"></div>
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-zinc-400/40"></div>
            <div className="absolute top-0 bottom-0 right-1/3 w-px bg-zinc-400/40"></div>
            <div className="absolute top-0 bottom-0 right-1/6 w-px bg-zinc-400/40"></div>
            
            {/* Horizontal Lines */}
            <div className="absolute left-0 right-0 top-1/4 h-px bg-zinc-400/40"></div>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-zinc-400/40"></div>
            <div className="absolute left-0 right-0 top-3/4 h-px bg-zinc-400/40"></div>
          </div>
          
          {/* Accent Shapes */}
          <div className="absolute inset-0">
            {/* Top Right Shape */}
            <div className="absolute top-0 right-0 w-96 h-96 border-t border-r border-zinc-400/30"></div>
            
            {/* Bottom Left Shape */}
            <div className="absolute bottom-0 left-0 w-96 h-96 border-b border-l border-zinc-400/30"></div>
            
            {/* Center Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-zinc-400/30 transform rotate-45"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0">
            {/* Top Left */}
            <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-zinc-400/30 transform rotate-45"></div>
            
            {/* Bottom Right */}
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-zinc-400/30 transform -rotate-45"></div>
            
            {/* Center Right */}
            <div className="absolute top-1/2 right-1/4 w-12 h-12 border border-zinc-400/30 transform rotate-45"></div>
            
            {/* Center Left */}
            <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-zinc-400/30 transform -rotate-45"></div>
            
            {/* Top Center */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-16 h-16 border border-zinc-400/30 transform rotate-45"></div>
            
            {/* Bottom Center */}
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-16 h-16 border border-zinc-400/30 transform -rotate-45"></div>
          </div>
          
          {/* Diagonal Lines */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-px bg-zinc-400/30 transform rotate-45 origin-top-left"></div>
            <div className="absolute top-0 right-0 w-full h-px bg-zinc-400/30 transform -rotate-45 origin-top-right"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-zinc-400/30 transform -rotate-45 origin-bottom-left"></div>
            <div className="absolute bottom-0 right-0 w-full h-px bg-zinc-400/30 transform rotate-45 origin-bottom-right"></div>
          </div>
          
          {/* Highlight Accents */}
          <div className="absolute inset-0">
            {/* Top Right Highlight */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-zinc-400/5 to-transparent"></div>
            
            {/* Bottom Left Highlight */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-zinc-400/5 to-transparent"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-8 md:px-16 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              {/* Tagline */}
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {t('hero.tagline')}
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl">
                {t('hero.description')}
              </p>
              
              {/* CTA Button */}
              <button className="bg-zinc-100 text-zinc-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-zinc-200 transition-colors">
                {t('hero.cta')}
              </button>
            </div>
            
            {/* Right Column - Logo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-48 h-48">
                {/* Abstract Logo */}
                <div className="absolute inset-0">
                  {/* Main Shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg transform rotate-45"></div>
                  
                  {/* Overlay Shape */}
                  <div className="absolute inset-4 bg-zinc-900 rounded-lg transform -rotate-45"></div>
                  
                  {/* Accent Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-600/20 transform -rotate-45"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 bg-white relative">
        <div className="container mx-auto px-8 md:px-16">
          <div className="mb-20 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
              Products
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl leading-relaxed">
              At Hestudio, we strive to create a future where technology not only makes lives easier but also creatively and innovatively transforms the world into a better place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Kamva */}
            <div className="group relative">
              <div className="p-8 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">🛍️</div>
                  <h3 className="text-3xl font-bold mb-6 text-zinc-900 group-hover:text-zinc-800 transition-colors">Kamva</h3>
                  <p className="text-xl text-zinc-700 group-hover:text-zinc-600 transition-colors leading-relaxed">
                    Kamva helps you transform your online business, build a professional store in 5 minutes, and experience online sales with an electronic payment gateway, even without a trust symbol.
                  </p>
                  <button 
                    onClick={() => toggleCard(0)}
                    className="mt-8 bg-zinc-900 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-3"
                  >
                    <span>{expandedCards.includes(0) ? 'Read Less' : 'Read More'}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${expandedCards.includes(0) ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`mt-8 pt-8 border-t border-zinc-200 overflow-hidden transition-all duration-300 ${expandedCards.includes(0) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xl text-zinc-700 group-hover:text-zinc-600 transition-colors leading-relaxed">
                      At Kamva, we have prepared all the necessary features for easy management of an online business. In Kamva&apos;s store builder, complete your products, categories, and store information and start selling your products immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pakat */}
            <div className="group relative">
              <div className="p-8 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">📧</div>
                  <h3 className="text-3xl font-bold mb-6 text-zinc-900 group-hover:text-zinc-800 transition-colors">Pakat</h3>
                  <p className="text-xl text-zinc-700 group-hover:text-zinc-600 transition-colors leading-relaxed">
                    With Pakat, you can send various types of emails such as campaigns, automation, and transactional emails to your users and continuously stay in touch with your customers using its diverse features.
                  </p>
                  <button 
                    onClick={() => toggleCard(1)}
                    className="mt-8 bg-zinc-900 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-3"
                  >
                    <span>{expandedCards.includes(1) ? 'Read Less' : 'Read More'}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${expandedCards.includes(1) ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`mt-8 pt-8 border-t border-zinc-200 overflow-hidden transition-all duration-300 ${expandedCards.includes(1) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xl text-zinc-700 group-hover:text-zinc-600 transition-colors leading-relaxed">
                      Pakat&apos;s email marketing service, a subsidiary of Electronic Communication Roya Company, started its activities in 2019 to address the challenges in email marketing and improve user experience. It has been trusted by both large and small businesses in the online trade space ever since.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hamahang */}
            <div className="group relative">
              <div className="p-8 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-6">📅</div>
                  <h3 className="text-3xl font-bold mb-6 text-zinc-900 group-hover:text-zinc-800 transition-colors">Hamahang</h3>
                  <p className="text-xl text-zinc-700 group-hover:text-zinc-600 transition-colors leading-relaxed">
                    Hamahang simplifies scheduling your appointments to just sharing a link. Simply connect your calendar, define your availability, and attend all your meetings effortlessly.
                  </p>
                  <button 
                    onClick={() => toggleCard(2)}
                    className="mt-8 bg-zinc-900 text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-3"
                  >
                    <span>{expandedCards.includes(2) ? 'Read Less' : 'Read More'}</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${expandedCards.includes(2) ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`mt-8 pt-8 border-t border-zinc-200 overflow-hidden transition-all duration-300 ${expandedCards.includes(2) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xl text-zinc-700 group-hover:text-zinc-600 transition-colors leading-relaxed">
                      Using Hamahang, you can access all scheduled appointments in your calendar and manage your time effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hestudio Section */}
      <section className="py-32 bg-zinc-100 relative">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
              Why Hestudio
            </h2>
            <p className="text-xl text-zinc-700 max-w-3xl leading-relaxed mb-16">
              As a provider of services and tools necessary for your business, Hestudio enables your growth and progress in the competitive environment of today&apos;s technology world.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Comprehensive Service Card */}
              <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3 text-zinc-900">Comprehensive and Integrated Service</h3>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    At Hestudio, all the facilities and services you need to start and manage an online business in the best possible way are provided.
                  </p>
                </div>
              </div>

              {/* Online Store Card */}
              <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3 text-zinc-900">Set Up an Online Store</h3>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    You can build a professional store in 5 minutes and experience online sales with an electronic payment gateway, even without a trust symbol.
                  </p>
                </div>
              </div>

              {/* Customer Interaction Card */}
              <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3 text-zinc-900">Constructive Customer Interaction</h3>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    One of the best channels for interacting with users after social media is email marketing. Easily stay in touch with your users through email.
                  </p>
                </div>
              </div>

              {/* Meeting Coordination Card */}
              <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-3 text-zinc-900">Hassle-Free Meeting Coordination</h3>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    Schedule your meetings effortlessly by simply connecting to Google Calendar and defining a schedule, then share the link with your contacts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-zinc-900 relative overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0">
          {/* Main Grid */}
          <div className="absolute inset-0 grid grid-cols-8 gap-8 p-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="border border-zinc-500/5"></div>
            ))}
          </div>
          
          {/* Accent Lines */}
          <div className="absolute inset-0">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-zinc-400/10"></div>
            <div className="absolute left-0 right-0 top-1/2 h-px bg-zinc-400/10"></div>
          </div>
          
          {/* Accent Shapes */}
          <div className="absolute inset-0">
            {/* Top Right Shape */}
            <div className="absolute top-0 right-0 w-48 h-48 border-t border-r border-zinc-400/10"></div>
            
            {/* Bottom Left Shape */}
            <div className="absolute bottom-0 left-0 w-48 h-48 border-b border-l border-zinc-400/10"></div>
          </div>
          
          {/* Highlight Accents */}
          <div className="absolute inset-0">
            {/* Top Right Highlight */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-zinc-400/3 to-transparent"></div>
            
            {/* Bottom Left Highlight */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-zinc-400/3 to-transparent"></div>
          </div>
        </div>

        <div className="container mx-auto px-8 md:px-16 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  Contact Us
                </h2>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  At Hestudio, we strive to create a future where technology not only makes lives easier but also creatively and innovatively transforms the world into a better place.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                    <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-zinc-400">Get in touch with our team</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                    <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Live Chat</h3>
                    <p className="text-zinc-400">Chat with our support team</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                    <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-zinc-400">Speak with our team directly</p>
                  </div>
                </div>
              </div>

              <button className="bg-white text-zinc-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-3">
                <span>Get Started</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-8 md:px-16 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  Hestudio
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Transforming the future of technology with innovative solutions and creative approaches.
                </p>
              </div>

              {/* Products */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Products</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Kamva</a>
                  </li>
                  <li>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Pakat</a>
                  </li>
                  <li>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Hamahang</a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-zinc-400 hover:text-white transition-colors text-sm">About Us</a>
                  </li>
                  <li>
                    <a href="#contact" className="text-zinc-400 hover:text-white transition-colors text-sm">Contact</a>
                  </li>
                  <li>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Careers</a>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Connect</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 pt-8 border-t border-zinc-800">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-zinc-400 text-sm">
                  © 2024 Hestudio. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                  <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
