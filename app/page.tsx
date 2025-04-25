'use client';

import { useLanguage } from './context/LanguageContext';
import { useState } from 'react';
import Layout from './components/Layout';

export default function Home() {
  const { t } = useLanguage();
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Layout>
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
              At Roya E-commerce, we strive to create a future where technology not only makes lives easier but also creatively and innovatively transforms the world into a better place.
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

      {/* Why Roya E-commerce Section */}
      <section className="py-32 bg-zinc-100 relative">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
              Why Roya E-commerce
            </h2>
            <p className="text-xl text-zinc-700 max-w-3xl leading-relaxed mb-16">
              As a provider of services and tools necessary for your business, Roya E-commerce enables your growth and progress in the competitive environment of today&apos;s technology world.
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
                    At Roya E-commerce, all the facilities and services you need to start and manage an online business in the best possible way are provided.
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
    </Layout>
  );
}
