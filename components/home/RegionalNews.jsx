"use client";

import ScrollBasedAnimation from "../ScrollBasedAnimation";
import { useTranslation } from "react-i18next";

export default function RegionalNews() {
  const { t } = useTranslation();

  const regionalArticles = t("home.regionalNewsData", { returnObjects: true });

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-24 border-t border-gray-100">
      {/* Section header */}
      <ScrollBasedAnimation direction="up" offset={60}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-black" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            {t("home.regionalNews")}
          </h2>
        </div>
      </ScrollBasedAnimation>

      {/* Article grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {regionalArticles.map((article, idx) => (
          <ScrollBasedAnimation
            key={idx}
            direction="up"
            delay={idx * 0.15}
            offset={80}
          >
            <article className="p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
              <h3 className="font-bold text-lg md:text-xl leading-snug mb-3">
                {article.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="mt-4 text-xs font-mono text-gray-500">
                3 {t("home.updatedHoursAgo")}
              </div>
            </article>
          </ScrollBasedAnimation>
        ))}
      </div>

      {/* View all button */}
      <div className="mt-16 text-center">
        <ScrollBasedAnimation direction="up" delay={0.4}>
          <button className="border-2 border-black px-8 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
            {t("home.viewAllRegionalNews")}
          </button>
        </ScrollBasedAnimation>
      </div>
    </section>
  );
}
