"use client";

import Layout from "../components/Layout";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-90px)] flex items-center overflow-hidden py-32 pt-96 bg-black">
        <div className="h-full w-full max-w-[1280px] mx-auto px-8 md:px-16 relative z-20 -mt-64">
          <div className="h-full flex flex-col gap-16 justify-center items-center">
            <div className="not-only:relative w-24 h-16">
              <Image
                src="/logo.svg"
                alt="Roya E-commerce Logo"
                fill
                className="object-contain"
              />
            </div>
            {/* Tagline */}
            <h1 className="text-3xl md:text-5xl text-center text-white leading-tight max-w-2xl">
              {t("contact.hero.title")}
            </h1>
            {/* Animated Down Arrow */}
            <button
              onClick={() => {
                document
                  .getElementById("contact-form")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center animate-[bounce_1s_infinite] hover:bg-white/5 transition-colors"
            >
              <svg
                className="w-6 h-6 text-white/70"
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
            </button>
          </div>
        </div>
      </section>

      {/* our team Section */}
      <section
        id="our-team"
        className="relative flex items-center overflow-hidden pt-64 pb-40 md:py-64 bg-white"
      >
        <div className="absolute inset-0 max-w-[1280px] mx-auto px-8">
          <div className="w-full h-[600px] md:h-full bg-[url('/our-team-bg-mobile.png')]  md:bg-[url('/large-white-bg-desktop.png')] bg-no-repeat bg-cover bg-center"></div>
        </div>
        <div className="h-full w-full max-w-[1280px] mx-auto px-8 md:px-48 relative z-20 -mt-64 md:top-[32px] ">
          <div className=" h-full grid grid-cols-1 md:grid-cols-2 gap-16 items-end  mx-auto">
            {/* Left Column - Content */}
            <div className="space-y-4 md:space-y-8 px-8 md:px-0 py-16 md:py-0">
              <h2 className="text-3xl md:text-5xl font-semi-bold text-black">
                {t("contact.team.title")}
              </h2>
              <p className=" text-base md:text-2xl text-black  max-w-xl">
                {t("contact.team.description")}
              </p>
            </div>

            {/* Right Column - Phone Button */}
            <div className="flex justify-center md:justify-end">
              <a
                href="tel:+982191015383"
                className="inline-flex items-center px-8 py-4 rounded-full bg-black text-white font-medium hover:shadow-lg transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="group-hover:translate-x-1 transition-transform">
                  +98 21 9101 5383
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* grid Section */}
      <section className="overflow-hidden bg-white pb-32">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-square bg-[url('/feature-box-bg.png')] bg-no-repeat bg-cover bg-center"></div>
            <div className="aspect-square p-8 pb-32 md:p-16 md:pb-16 flex flex-col justify-baseline gap-8 md:gap-12 bg-[#F4F4F4] text-black">
              <h1 className="text-3xl md:text-5xl font-semi-bold md:leading-19">
                {t("contact.future.title")}
              </h1>
              <div className="text-base md:text-2xl md:leading-9 max-w-xs">
                {t("contact.future.description")}
              </div>
            </div>
            <div className="aspect-square p-8 pb-32 md:p-16 md:pb-16 flex flex-col justify-baseline gap-8 md:gap-12 text-[#004AB3] bg-[#EBF8FF]">
              <h1 className="text-3xl md:text-5xl font-semi-bold md:leading-19">
                {t("contact.culture.title")}
              </h1>
              <div className="text-base md:text-2xl md:leading-9 max-w-xs">
                {t("contact.culture.description")}
              </div>
            </div>
            <div className="aspect-square p-8 pb-32 md:p-16 md:pb-16 flex flex-col justify-baseline gap-8 md:gap-12 text-white bg-[#000]">
              <h1 className="text-3xl md:text-5xl font-semi-bold md:leading-19">
                {t("contact.innovation.title")}
              </h1>
              <div className="text-base md:text-2xl md:leading-9 max-w-xs">
                {t("contact.innovation.description")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact form Section */}
      <section id="contact-form" className="relative min-h-screen flex items-center overflow-hidden pt-32 md:py-32 md:pt-64 bg-[#EBF8FF]">
        <div className="h-full w-full max-w-[1280px] mx-auto px-8 md:px-16 relative z-20 -mt-56 md:-mt-64">
          <div className="space-y-8 md:space-y-16">
            {/* Row 1: Title and Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-16 md:mb-[6rem]">
              <h1 className="text-3xl md:text-4xl font-semi-bold text-[#004AB3]">
                {t("contact.form.title")}
              </h1>
              <p className="text-base md:text-[1.4rem] md:leading-8 text-[#004AB3]">
                {t("contact.form.description")}
              </p>
            </div>

            {/* Row 2: Name and Email Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  placeholder={t("contact.form.fullName")}
                  className="w-full px-6 py-4 bg-white border-2 border-[#004AB3] rounded-4xl text-[#004AB3] placeholder-[#004AB3]/60 focus:outline-none focus:ring-2 focus:ring-[#004AB3]/20 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t("contact.form.email")}
                  className="w-full px-6 py-4 bg-white border-2 border-[#004AB3] rounded-4xl text-[#004AB3] placeholder-[#004AB3]/60 focus:outline-none focus:ring-2 focus:ring-[#004AB3]/20 transition-all duration-300"
                />
              </div>
            </div>

            {/* Row 3: Message Textarea */}
            <div>
              <textarea
                placeholder={t("contact.form.message")}
                rows={6}
                className="w-full px-6 py-4 bg-white border-2 border-[#004AB3] rounded-lg text-[#004AB3] placeholder-[#004AB3]/60 focus:outline-none focus:ring-2 focus:ring-[#004AB3]/20 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Row 4: Send Button */}
            <div>
              <button
                onClick={() => {
                  window.location.href =
                    "mailto:royaecommerce.engineering@gmail.com";
                }}
                className="px-8 py-4 bg-[#004AB3] text-white rounded-full text-lg font-medium hover:bg-[#004AB3]/90 transition-all duration-300"
              >
                {t("contact.form.sendButton")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full relative">
        <Image
          src="/map-mobile.png"
          alt="Location Map"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover md:hidden"
        />
        <Image
          src="/map-desktop.png"
          alt="Location Map"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover hidden md:block"
        />
        {/* desktop map section */}
        <div className="hidden md:block md:absolute  left-[10%] top-1/2 -translate-y-1/2 bg-white p-12 rounded-2xl shadow-lg max-w-lg">
          <div className="space-y-8">
            <h2 className="text-5xl font-semi-bold text-[#000]">
              {t("contact.address.title")}
            </h2>
            <div className="space-y-1 text-black">
              <p className="text-[24px]">
                {t("contact.address.street")}
              </p>
              <p className="text-[24px]">{t("contact.address.email")}</p>
              <p className="text-[24px]">{t("contact.address.phone")}</p>
            </div>
            <button
              onClick={() => {
                window.location.href =
                  "https://www.google.com/maps/place/Roya+E-commerce/@35.753911,51.420711,17z/data=!3m1!4b1!4m6!3m5!1s0x3f8e04e61d9df21d:0x2f2e139bf6f8d60e!8m2!3d35.753911!4d51.423286!16s%2Fg%2F11c48tqxzn?entry=ttu&g_ep=EgoyMDI1MDIyMi4wIKXMDSoASAFQAw%3D%3D";
              }}
              className="flex items-center mt-20 gap-2 px-6 py-4 border-2 border-[#000] text-[#000] rounded-full   transition-all duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <span className="text-[20px]">
                {t("contact.address.getDirections")}
              </span>
            </button>
          </div>
        </div>
        {/* mobile map section */}
        <div className="md:hidden absolute  left-[7%] right-[7%] top-[5%]   bg-white p-8 rounded-3xl shadow-lg max-w-lg">
          <div className="space-y-8">
            <h2 className="text-3xl font-semi-bold text-[#000]">{t("contact.mobileMap.title")}</h2>
            <div className="space-y-1 text-black">
              <p className="text-[20px] ">
                {t("contact.mobileMap.street")}
              </p>
              <p className="text-[20px] break-words ">
                {t("contact.mobileMap.email")}
              </p>
              <p className="text-[20px] break-words ">{t("contact.mobileMap.phone")}</p>
            </div>
            <button className="flex items-center   gap-2 px-6 py-3 border-2 border-[#000] text-[#000] rounded-full   transition-all duration-300">
              <span className="text-[20px]">{t("contact.mobileMap.navigation")}</span>
            </button>
          </div>
        </div>
      </section>

      {/*  contact Section */}
      <section className="relative  bg-black">
        <div className="w-full max-w-[1280px] mx-auto md:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2  items-end gap-40 md:gap-8">
            {/* Left Column - Image */}
            <div
              className={`w-full h-[300px] md:h-[400px] bg-[url('/home-contact-bg.png')] bg-no-repeat bg-contain bg-center ${
                language === "en" ? "scale-x-[-1]" : ""
              }`}
            ></div>

            {/* Right Column - Content */}
            <div className="space-y-8 px-8 md:px-0">
              <p className="text-base md:text-xl text-white  max-w-[570px] md:leading-relaxed md:text-justify">
                {t("contact.bottomSection.description")}
              </p>
              <button
                onClick={() => {
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="  bg-white text-black px-6 py-4 rounded-full text-base font-medium transition-colors"
              >
                {t("hero.cta")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
