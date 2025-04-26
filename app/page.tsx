"use client";

import { useLanguage } from "./context/LanguageContext";
import { useState } from "react";
import Layout from "./components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { t } = useLanguage();
  const [, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
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
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                {t("hero.tagline")}
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl">
                {t("hero.description")}
              </p>

              {/* CTA Button */}
              <button
                onClick={() => {
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-zinc-100 text-zinc-900 px-8 py-3 rounded-full text-base font-medium hover:bg-zinc-200 transition-colors"
              >
                {t("hero.cta")}
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
              {t("products.title")}
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl leading-relaxed">
              {t("products.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Kamva */}
            <div className="group relative">
              <Link href="/products/kamva" className="block">
                <div className="px-6 pb-6 rounded-2xl border-2 border-zinc-300 hover:border-zinc-500 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <div className="relative w-32 h-20">
                      <Image
                        src="/kamva.svg"
                        alt="Kamva Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base text-zinc-700 group-hover:text-zinc-600 transition-colors leading-relaxed">
                      {t("products.kamva.description")}
                    </p>
                    <div className="mt-8 flex justify-between items-center">
                      <button
                        onClick={() => toggleCard(0)}
                        className="bg-zinc-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors"
                      >
                        <span>Read More</span>
                      </button>
                      {/* Social Media Links */}
                      <div className="flex items-center gap-3">
                        <a
                          href="https://www.linkedin.com/company/kamva/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-600 hover:text-blue-600 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href="https://instagram.com/kamva_ir"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-600 hover:text-pink-600 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
                <div className="px-6 pb-6 rounded-2xl border-2 border-zinc-300 hover:border-zinc-500 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <div className="relative w-32 h-20">
                      <Image
                        src="/pakat-black.d6e0e0a5.svg"
                        alt="Pakat Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base text-zinc-700 group-hover:text-zinc-600 transition-colors leading-relaxed">
                      {t("products.pakat.description")}
                    </p>
                    <div className="mt-8 flex justify-between items-center">
                      <button
                        onClick={() => toggleCard(1)}
                        className="bg-zinc-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors"
                      >
                        <span>Read More</span>
                      </button>
                      {/* Social Media Links */}
                      <div className="flex items-center gap-3">
                        <a
                          href="https://www.linkedin.com/company/pakatnet"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-600 hover:text-blue-600 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com/mypakat"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-600 hover:text-pink-600 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
                <div className="px-6 pb-6 rounded-2xl border-2 border-zinc-300 hover:border-zinc-500 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <div className="relative w-32 h-20">
                      <Image
                        src="/hamahang-black.08de284b.svg"
                        alt="Hamahang Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-base text-zinc-700 group-hover:text-zinc-600 transition-colors leading-relaxed">
                      {t("products.hamahang.description")}
                    </p>
                    <div className="mt-8 flex justify-between items-center">
                      <button
                        onClick={() => toggleCard(2)}
                        className="bg-zinc-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-colors"
                      >
                        <span>Read More</span>
                      </button>
                      {/* Social Media Links */}
                      <div className="flex items-center gap-3">
                        <a
                          href="https://www.linkedin.com/company/hamahang-app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-600 hover:text-blue-600 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com/hamahang.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-600 hover:text-pink-600 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
      <section className="py-32 bg-zinc-100 relative border-t border-zinc-500">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
              {t("whyRoya.title")}
            </h2>
            <p className="text-lg text-zinc-700 max-w-3xl leading-relaxed mb-16">
              {t("whyRoya.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Comprehensive Service Card */}
              <div className="p-8 rounded-3xl border-2 border-zinc-200 hover:border-zinc-800 transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-zinc-900">
                    {t("whyRoya.features.comprehensive.title")}
                  </h3>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    {t("whyRoya.features.comprehensive.description")}
                  </p>
                </div>
              </div>

              {/* Online Store Card */}
              <div className="p-8 rounded-3xl border-2 border-zinc-200 hover:border-zinc-800 transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-zinc-900">
                    {t("whyRoya.features.onlineStore.title")}
                  </h3>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    {t("whyRoya.features.onlineStore.description")}
                  </p>
                </div>
              </div>

              {/* Customer Interaction Card */}
              <div className="p-8 rounded-3xl border-2 border-zinc-200 hover:border-zinc-800 transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-zinc-900">
                    {t("whyRoya.features.customerInteraction.title")}
                  </h3>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    {t("whyRoya.features.customerInteraction.description")}
                  </p>
                </div>
              </div>

              {/* Meeting Coordination Card */}
              <div className="p-8 rounded-3xl border-2 border-zinc-200 hover:border-zinc-800 transition-all duration-300 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-zinc-900">
                    {t("whyRoya.features.meetingCoordination.title")}
                  </h3>
                  <p className="text-base text-zinc-700 leading-relaxed">
                    {t("whyRoya.features.meetingCoordination.description")}
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
