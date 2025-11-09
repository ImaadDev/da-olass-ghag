"use client";

import Image from "next/image";
import ScrollBasedAnimation from "../ScrollBasedAnimation";
import { useTranslation } from "react-i18next";

export default function FeaturedWithSidebar() {
  const { t } = useTranslation();

  const featured = t("home.featuredNews", { returnObjects: true }) as {
    title: string;
    category: string;
    excerpt: string;
  };

  const sideNews = t("home.sideNews", { returnObjects: true }) as Array<{
    title: string;
    category: string;
  }>;

  const images = [
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-24 border-t border-gray-100">
      {/* Header */}
      <ScrollBasedAnimation direction="up" offset={60}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-black" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            {t("home.topStories")}
          </h2>
        </div>
      </ScrollBasedAnimation>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - 4 small news cards in 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-1">
          {sideNews.map((news, idx) => (
            <ScrollBasedAnimation key={idx} direction="up" delay={idx * 0.1}>
              <article className="cursor-pointer group">
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={images[idx]}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3">
                  <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">
                    {news.category}
                  </p>
                  <h3 className="text-base font-medium leading-snug group-hover:underline">
                    {news.title}
                  </h3>
                </div>
              </article>
            </ScrollBasedAnimation>
          ))}
        </div>

        {/* Right side - Large featured story */}
        <ScrollBasedAnimation direction="up" delay={0.3} offset={80}>
          <article className="lg:col-span-2 relative w-full h-[550px] overflow-hidden cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80"
              alt={featured.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 p-8 text-white max-w-2xl">
              <p className="text-sm font-semibold uppercase text-red-400 mb-2 tracking-wide">
                {featured.category}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
                {featured.title}
              </h2>
              <p className="text-sm text-gray-200 leading-relaxed">
                {featured.excerpt}
              </p>
            </div>
          </article>
        </ScrollBasedAnimation>
      </div>
    </section>
  );
}
