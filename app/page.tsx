"use client";

import { useLanguage } from "./context/LanguageContext";
import { useState } from "react";
import Layout from "./components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { t, language } = useLanguage();
  const [, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-32 pt-48 md:pt-32">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 flex justify-center">
          <div
            className={`w-full max-w-[1280px] h-full bg-[url('/home-first-hero-mobile.png')] md:bg-[url('/home-first-hero-desk.ada4d432.png')] bg-no-repeat bg-contain bg-center md:bg-[center_right_4rem] ${
              language === "en" ? "scale-x-[-1]" : ""
            }`}
          ></div>
        </div>

        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-16 relative z-20 -mt-130 md:-mt-64">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-6 md:space-y-12">
              {/* Tagline */}
              <h1 className="text-3xl md:text-5xl md:font-bold text-white leading-tight">
                {t("hero.tagline")}
              </h1>

              {/* CTA Button */}
              <button
                onClick={() => {
                  document
                    .getElementById("contact-us")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 md:border-3 border-white text-white px-5 py-2 md:py-3 rounded-full text-base font-medium hover:bg-white/10 transition-colors"
              >
                {t("hero.cta")}
              </button>
            </div>
          </div>
        </div>

        {/* Animated Down Arrow */}
        <button
          onClick={() => {
            document
              .getElementById("products")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="absolute bottom-40 left-[calc(50%-640px+64px)] w-9 h-9 rounded-full border-2 border-white flex items-center justify-center animate-[bounce_1s_infinite] hover:bg-white/5 transition-colors"
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
      </section>

      {/* Second Hero Section */}
      <section className="relative pb-64 md:pb-0 md:pt-24 bg-black">
        <div className="w-full max-w-[1280px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left Column - Image */}
            <div
              className={`hidden md:block w-full h-[450px] bg-[url('/home-second-hero.2.png')] bg-no-repeat bg-contain bg-center ${
                language === "en" ? "scale-x-[-1]" : ""
              }`}
            ></div>

            {/* Right Column - Content */}
            <div className="space-y-12">
              <div className="relative w-32 h-16">
                <Image
                  src="/logo.svg"
                  alt="Roya E-commerce Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-base text-white leading-relaxed max-w-sm text-justify">
                {t("hero.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-8 md:px-16">
          <div className="mb-20 max-w-6xl mx-auto">
            <h2 className="text-4xl font-semi-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
              {t("products.title")}
            </h2>
            <p className="text-xl text-black md:leading-loose">
              {t("products.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
            {/* Kamva */}
            <div className="group relative">
              <Link href="/products/kamva" className="block">
                <div className="md:aspect-square px-6 md:px-8 py-4 pb-8 rounded-lg md:border-2 border-zinc-300 hover:border-zinc-500 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10 h-full flex flex-col md:gap-0">
                    <div className="relative w-24 md:w-40 h-16 md:h-24 md:mt-6">
                      <Image
                        src="/kamva.svg"
                        alt="Kamva Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base md:text-xl text-black group-hover:text-zinc-700 transition-colors md:leading-relaxed mt-2 md:mt-4">
                      {t("products.kamva.description")}
                    </p>
                    <div className="mt-12 md:mt-auto flex justify-between items-center  ">
                      <button
                        onClick={() => toggleCard(0)}
                        className="bg-zinc-900 text-white px-4 md:px-8 py-3 rounded-full text-base font-semibold hover:bg-zinc-800 transition-colors"
                      >
                        <span>{t("products.readMore")}</span>
                      </button>
                      {/* Social Media Links */}
                      <div className="flex items-center gap-3">
                        <a
                          href="https://www.linkedin.com/company/kamva/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-blue-600 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href="https://instagram.com/kamva_ir"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-pink-600 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Pakat */}
            <div className="group relative">
              <Link href="/products/pakat" className="block">
                <div className="md:aspect-square px-6 md:px-8 py-4 pb-8 rounded-lg md:border-2 border-zinc-300 hover:border-zinc-500 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10 h-full flex flex-col md:gap-0">
                    <div className="relative w-24 md:w-40 h-16 md:h-24 md:mt-6">
                      <Image
                        src="/pakat-black.d6e0e0a5.svg"
                        alt="Pakat Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base md:text-xl text-black group-hover:text-zinc-700 transition-colors md:leading-relaxed mt-2 md:mt-4">
                      {t("products.pakat.description")}
                    </p>
                    <div className="mt-12 md:mt-auto flex justify-between items-center">
                      <button
                        onClick={() => toggleCard(1)}
                        className="bg-zinc-900 text-white px-4 md:px-8 py-3 rounded-full text-base font-semibold hover:bg-zinc-800 transition-colors"
                      >
                        <span>{t("products.readMore")}</span>
                      </button>
                      {/* Social Media Links */}
                      <div className="flex items-center gap-3">
                        <a
                          href="https://www.linkedin.com/company/pakatnet"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-blue-600 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com/mypakat"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-pink-600 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Hamahang */}
            <div className="group relative">
              <Link href="/products/hamahang" className="block">
                <div className="md:aspect-square px-6 md:px-8 py-4 pb-8 rounded-lg md:border-2 border-zinc-300 hover:border-zinc-500 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10 h-full flex flex-col md:gap-0">
                    <div className="relative w-24 md:w-40 h-16 md:h-24 md:mt-6">
                      <Image
                        src="/hamahang-black.08de284b.svg"
                        alt="Hamahang Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base md:text-xl text-black group-hover:text-zinc-700 transition-colors md:leading-relaxed mt-2 md:mt-4">
                      {t("products.hamahang.description")}
                    </p>
                    <div className="mt-12 md:mt-auto flex justify-between items-center">
                      <button
                        onClick={() => toggleCard(2)}
                        className="bg-zinc-900 text-white px-4 md:px-8 py-3 rounded-full text-base font-semibold hover:bg-zinc-800 transition-colors"
                      >
                        <span>{t("products.readMore")}</span>
                      </button>
                      {/* Social Media Links */}
                      <div className="flex items-center gap-3">
                        <a
                          href="https://www.linkedin.com/company/hamahang-app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-blue-600 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com/hamahang.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-pink-600 transition-colors"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Roya E-commerce Section */}
      <section className="py-12 md:py-24 bg-[rgb(235,248,255)] relative ">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 flex flex-col md:flex-row justify-between">
              <h2 className=" text-3xl font-semi-bold mb-6  text-[rgb(0,74,179)]">
                {t("whyRoya.title")}
              </h2>
              <p className="text-base md:text-xl text-[rgb(0,74,179)] max-w-[570px] md:leading-loose md:mb-16 text-justify">
                {t("whyRoya.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Comprehensive Service Card */}
              <div className="p-5 rounded-lg   transition-all duration-300 bg-white backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 "></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-semi-bold mb-6 leading-11 text-[rgb(0,74,179)]">
                    {t("whyRoya.features.comprehensive.title")}
                  </h3>
                  <p className="text-base text-[rgb(0,74,179)] leading-[20px]">
                    {t("whyRoya.features.comprehensive.description")}
                  </p>
                </div>
              </div>

              {/* Online Store Card */}
              <div className="p-5 rounded-lg transition-all duration-300 bg-white backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 "></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-semi-bold mb-6 leading-11 text-[rgb(0,74,179)]">
                    {t("whyRoya.features.onlineStore.title")}
                  </h3>
                  <p className="text-base text-[rgb(0,74,179)] leading-[20px]">
                    {t("whyRoya.features.onlineStore.description")}
                  </p>
                </div>
              </div>

              {/* Customer Interaction Card */}
              <div className="p-5 rounded-lg transition-all duration-300 bg-white backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 "></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-semi-bold mb-6 leading-11 text-[rgb(0,74,179)]">
                    {t("whyRoya.features.customerInteraction.title")}
                  </h3>
                  <p className="text-base text-[rgb(0,74,179)] leading-[20px]">
                    {t("whyRoya.features.customerInteraction.description")}
                  </p>
                </div>
              </div>

              {/* Meeting Coordination Card */}
              <div className="p-5 rounded-lg transition-all duration-300 bg-white backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 "></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-semi-bold mb-6 leading-11 text-[rgb(0,74,179)]">
                    {t("whyRoya.features.meetingCoordination.title")}
                  </h3>
                  <p className="text-base text-[rgb(0,74,179)] leading-[20px]">
                    {t("whyRoya.features.meetingCoordination.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

     {/*  contact Section */}
     <section className="relative  bg-black" id="contact-us">
        <div className="w-full max-w-[1280px] mx-auto  md:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2  items-end gap-48 md:gap-8">
            {/* Left Column - Image */}
            <div
              className={`w-full h-[300px] md:h-[400px] bg-[url('/home-contact-bg.png')] bg-no-repeat bg-contain bg-center ${
                language === "en" ? "scale-x-[-1]" : ""
              }`}
            ></div>

            {/* Right Column - Content */}
            <div className="space-y-8 px-8 md:px-0">
        
              <p className="text-base md:text-xl text-white leading-relaxed max-w-[570px] text-justify">
                {t("hero.description")}
              </p>
              <button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className=" bg-white text-black px-6 py-4 rounded-full text-base font-medium  transition-colors"
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
