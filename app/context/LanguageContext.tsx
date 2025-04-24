'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Company
    'company.name': 'Roya E-commerce',
    
    // Navigation
    'nav.products': 'Products',
    'nav.team': 'Our Team',
    'nav.contact': 'Contact Us',
    
    // Hero
    'hero.tagline': 'Where creativity and technology go hand in hand.',
    'hero.cta': 'Contact Us',
    'hero.description': 'At Roya E-commerce, we strive to create a future where technology not only makes lives easier but also creatively and innovatively transforms the world into a better place. We believe that technology should be accompanied by humanity.',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Discover our innovative solutions',
    
    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the experts behind our success',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to start your project? Contact us today.',
    'contact.cta': 'Contact Us',
  },
  fa: {
    // Company
    'company.name': 'تجارت الکترونیک رویا',
    
    // Navigation
    'nav.products': 'محصولات',
    'nav.team': 'تیم ما',
    'nav.contact': 'تماس با ما',
    
    // Hero
    'hero.tagline': 'جایی که خلاقیت و فناوری دست در دست هم پیش می‌روند.',
    'hero.cta': 'تماس با ما',
    'hero.description': 'در تجارت الکترونیک رویا، ما تلاش می‌کنیم آینده‌ای را خلق کنیم که در آن فناوری نه تنها زندگی را آسان‌تر می‌کند، بلکه به طور خلاقانه و نوآورانه جهان را به مکانی بهتر تبدیل می‌کند. ما معتقدیم که فناوری باید همراه با انسانیت باشد.',
    
    // Products
    'products.title': 'محصولات ما',
    'products.subtitle': 'راه‌حل‌های نوآورانه ما را کشف کنید',
    
    // Team
    'team.title': 'تیم ما',
    'team.subtitle': 'با متخصصان پشت موفقیت ما آشنا شوید',
    
    // Contact
    'contact.title': 'با ما در ارتباط باشید',
    'contact.subtitle': 'آماده شروع پروژه خود هستید؟ امروز با ما تماس بگیرید.',
    'contact.cta': 'تماس با ما',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 