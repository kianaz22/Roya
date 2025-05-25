'use client';

import { useLanguage } from '../../context/LanguageContext';
import Layout from '../../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function KamvaPage() {
  const { language } = useLanguage();

  return (
    <Layout lightMode>
      <div className="min-h-[calc(100vh-5rem)] relative overflow-hidden bg-white">
        {/* Content */}
        <div className="relative h-[calc(100vh-5rem)] flex items-center justify-center">
          <div className="text-center flex flex-col items-center justify-center gap-12 container mx-auto px-4 md:px-16 max-w-[1280px] relative md:bottom-10">
            <div className="relative w-48 md:w-64 h-32 md:h-16">
              <Image
                src="/product-main-kamva.svg"
                alt="Kamva Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-5xl md:text-6xl text-black leading-16 font-normal max-w-2xl">
              Sell online with Kamva&apos;s store builder!
            </p>
            <Link 
              href="https://kamva.ir" 
              target="_blank"
              className="bg-zinc-900 text-white px-6 py-3 rounded-full text-lg hover:bg-zinc-800 transition-all duration-300"
            >
              Enter the Kamva website
            </Link>
            {/* Bouncing Chevron */}
            <div className="w-9 h-9 rounded-full border-2 border-zinc-400 flex items-center justify-center animate-[bounce_1s_infinite]">
              <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 space-y-6 max-w-xl py-24">
              <div className="relative w-18 h-18 mb-8">
                <Image
                  src="/product-small-white.svg"
                  alt="Kamva"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-2xl  max-w-sm">
                At Kamva, we have prepared all the necessary features for easy management of an online business. In Kamva&apos;s store builder, complete your products, categories, and store information and start selling your products immediately.
              </p>
            </div>
            <div className="flex-1 relative w-full h-[500px]">
              <Image
                src="/hero-desc-bg.kamca.png"
                alt="Kamva Store Builder"
                fill
                className="object-contain scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
          <div className="grid grid-cols-2 gap-0">
            {/* First Slot */}
            <div className="bg-black text-white p-16">
              <h3 className="text-[40px] font-semi-bold leading-16 mb-8">
                Sell online with Kamva&apos;s store builder!
              </h3>
              <p className="text-white text-2xl max-w-sm">
                Kamva helps you transform your internet business
              </p>
            </div>

            {/* Second Slot */}
            <div className="relative h-[600px]">
              <Image
                src="/kamva-1.png"
                alt="Kamva Platform"
                fill
                className="object-cover"
              />
            </div>

            {/* Third Slot */}
            <div className="relative h-[600px]">
              <Image
                src="/kamva-2.png"
                alt="Kamva Features"
                fill
                className="object-cover"
              />
            </div>

            {/* Fourth Slot */}
            <div className="bg-black text-white p-16 pr-12">
              <h3 className="text-5xl leading-16 font-semi-bold mb-4">
                Simple user interface management panel
              </h3>
              <p className="text-white text-2xl max-w-sm">
                Kamva&apos;s template editor is drag-and-drop. You can change the home page of your store or delete one of its elements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Independent bank gateway
              </h3>
              <p className="text-blue-800">
                The amount of all internet sales made on your store will be deposited into the bank account connected to the gateway
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Technical support and marketing SEO
              </h3>
              <p className="text-blue-800">
                Kamva&apos;s technical department supports from zero to hundred percent; you can use free consulting services from Kamva for technical infrastructure of your store
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Connection to email marketing service
              </h3>
              <p className="text-blue-800">
                You can send promotional emails and marketing emails to your customers&apos; stores using the best method to attract customers
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Weblog service along with the store builder
              </h3>
              <p className="text-blue-800">
                Kamva&apos;s technical department supports from zero to hundred percent; you can use free consulting services from Kamva for technical infrastructure of your store
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="bg-black text-white pb-8 pt-1">
        <div className="container mx-auto px-4 md:px-16 max-w-[1280px]">
          <div className="flex flex-col md:flex-row items-end gap-12">
            <div className="flex-1 relative w-full h-[400px]">
              <Image
                src="/footer-bg.kamva2.png"
                alt="Kamva Store Builder"
                fill
                className={`object-contain ${language === 'en' ? 'scale-x-[-1]' : ''}`}
              />
            </div>
            <div className="flex-1 space-y-6 max-w-xl">
              <p className="text-xl  text-white max-w-lg">
                The appearance of your store is one of the most important parameters in attracting customers. Therefore, we have tried to provide several diverse and professional templates for stores. You can change your store&apos;s template at any time.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 bg-white text-black px-4 py-2 rounded-full text-lg  hover:bg-zinc-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>Contact Us</span>
                 
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 