"use client";

import { useLanguage } from "../../context/LanguageContext";
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function PakatPage() {
  const { language, t } = useLanguage();

  return (
    <Layout lightMode>
      <div className="min-h-[calc(100vh-5rem)] relative overflow-hidden bg-white">
        {/* Content */}
        <div className="relative h-[calc(100vh-5rem)] flex items-center justify-center">
          <div className="text-center flex flex-col items-center justify-center gap-8 md:gap-12 container mx-auto px-4 md:px-16 max-w-[1280px] relative md:bottom-10">
            <div className="relative w-40 md:w-64 h-12 md:h-16">
              <Image
                src="/product-main.pakat.svg"
                alt="Pakat Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-4xl md:text-6xl text-black leading-16 font-normal max-w-2xl">
              {t("pakat.hero.title")}
            </p>
            <Link
              href="https://pakat.net"
              target="_blank"
              className="bg-zinc-900 text-white px-6 py-3 rounded-full text-lg hover:bg-zinc-800 transition-all duration-300"
            >
              {t("pakat.hero.cta")}
            </Link>
            {/* Bouncing Chevron */}
            <div
              onClick={() => {
                document
                  .getElementById("pakat-features")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer mt-12 md:mt-0 w-9 h-9 rounded-full border-2 border-zinc-400 flex items-center justify-center animate-[bounce_1s_infinite]"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div id="pakat-features" className="bg-black text-white">
        <div className="container mx-auto px-8 md:px-16 max-w-[1280px]">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 md:space-y-6 max-w-xl py-16 md:py-24">
              <div className="relative w-18 h-18 mb-8">
                <Image
                  src="/product-small-white.pakat.svg"
                  alt="Pakat"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg md:text-2xl max-w-sm">
                {t("pakat.features.description")}
              </p>
            </div>
            <div className="md:flex-1 relative w-full h-[300px] md:h-[500px]">
              <Image
                src="/hero-desc-bg.pakat.png"
                alt="Pakat Email Marketing"
                fill
                className="object-contain scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-8 md:px-16 max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* First Slot */}
            <div className="bg-black text-white p-8 pb-32 md:p-16 md:pb-16">
              <h3 className="text-3xl md:text-[40px] font-semi-bold leading-12 md:leading-16 mb-8">
                {t("pakat.grid.title1")}
              </h3>
              <p className="text-white text-lg md:text-2xl max-w-sm">
                {t("pakat.grid.subtitle1")}
              </p>
            </div>

            {/* Second Slot */}
            <div className="relative h-[400px] md:h-[600px]">
              <Image
                src="/kamva-1.png"
                alt="Pakat Platform"
                fill
                className="object-cover"
              />
            </div>

            {/* Third Slot */}
            <div className="relative h-[400px] md:h-[600px]">
              <Image
                src="/product-feaures-2.pakat-bg.png"
                alt="Pakat Features"
                fill
                className="object-cover"
              />
            </div>

            {/* Fourth Slot */}
            <div className="bg-black text-white p-8 md:p-16 md:pr-12">
              <h3 className="text-3xl md:text-5xl leading-12 md:leading-16 font-semi-bold mb-4">
                {t("pakat.grid.title2")}
              </h3>
              <p className="text-white text-lg md:text-2xl max-w-sm">
                {t("pakat.grid.subtitle2")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-8 md:px-16 max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {t("pakat.cards.campaigns.title")}
              </h3>
              <p className="text-blue-800">
                {t("pakat.cards.campaigns.description")}
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {t("pakat.cards.automation.title")}
              </h3>
              <p className="text-blue-800">
                {t("pakat.cards.automation.description")}
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {t("pakat.cards.transactional.title")}
              </h3>
              <p className="text-blue-800">
                {t("pakat.cards.transactional.description")}
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                {t("pakat.cards.analytics.title")}
              </h3>
              <p className="text-blue-800">
                {t("pakat.cards.analytics.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="bg-black text-white pb-8 md:pt-1">
        <div className="container mx-auto px-0 md:px-16 max-w-[1280px]">
          <div className="flex flex-col md:flex-row items-end gap-32 md:gap-12">
            <div className="md:flex-1 relative w-full h-[300px] md:h-[400px]">
              <Image
                src="/home-contact-bg.png"
                alt="Pakat Email Marketing"
                fill
                className={`object-contain ${
                  language === "en" ? "scale-x-[-1]" : ""
                }`}
              />
            </div>
            <div className="flex-1 space-y-6 max-w-xl px-8 md:px-0">
              <p className="text-lg md:text-xl text-white max-w-lg">
                {t("pakat.footer.description")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-black px-4 py-3 rounded-full text-lg hover:bg-zinc-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span>{t("pakat.footer.cta")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
