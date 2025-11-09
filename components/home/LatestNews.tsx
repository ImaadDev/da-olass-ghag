"use client";

import Image from "next/image";
import ScrollBasedAnimation from "../ScrollBasedAnimation";
import { useTranslation } from "react-i18next";

export default function LatestNews() {
  const { t } = useTranslation();

  const news = t("home.latestNewsData", { returnObjects: true }) as Array<{
    title: string;
    category: string;
  }>;

  const images = [
    "https://images.unsplash.com/photo-1584036561584-b03c19da874c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-24">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="w-1 h-8 bg-black" />
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
          {t("home.latestNews")}
        </h2>
      </div>

      {/* News grid with scroll animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((item, idx) => (
          <ScrollBasedAnimation
            key={idx}
            direction="up"
            delay={idx * 0.1}
            offset={60}
          >
            <article className="cursor-pointer group">
              {/* Image container */}
              <div className="relative w-full h-64 overflow-hidden bg-black">
                <Image
                  src={images[idx]}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                />

                {/* Category overlay */}
                <div className="absolute top-4 left-4">
                  <div className="border border-white bg-black/80 px-3 py-1">
                    <span className="text-white text-xs font-medium tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-4 space-y-2">
                <h3 className="font-bold text-xl leading-tight group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                  <span>2 {t("home.hoursAgo")}</span>
                  <span>•</span>
                  <span>5 {t("home.minRead")}</span>
                </div>
              </div>
            </article>
          </ScrollBasedAnimation>
        ))}
      </div>

      {/* View all button */}
      <div className="mt-12 text-center">
        <ScrollBasedAnimation direction="up" delay={0.4}>
          <button className="border-2 border-black px-8 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
            {t("home.viewAllNews")}
          </button>
        </ScrollBasedAnimation>
      </div>
    </section>
  );
}
