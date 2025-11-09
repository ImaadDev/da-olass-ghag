"use client";

import ScrollBasedAnimation from "../../../components/ScrollBasedAnimation";
import { useTranslation } from "react-i18next";

export default function AboutUsPage() {
  const { t } = useTranslation();

  const storyContent = t("about.ourStoryContent", { returnObjects: true }) as string[];
  const values = t("about.values", { returnObjects: true }) as {
    credibility: { title: string; description: string };
    independence: { title: string; description: string };
    diversity: { title: string; description: string };
    innovation: { title: string; description: string };
  };

  return (
    <main className="bg-white text-black mx-auto px-6 md:px-16 py-20 md:py-28 leading-relaxed">
      {/* Intro */}
      <ScrollBasedAnimation direction="up" delay={0.1}>
        <header className="max-w-5xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-10 bg-black" />
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
              {t("about.title")}
            </h1>
          </div>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl">
            {t("about.subtitle")}
          </p>
        </header>
      </ScrollBasedAnimation>

      {/* Story Section */}
      <ScrollBasedAnimation direction="right" delay={0.2}>
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 border-b border-black pb-3">
            {t("about.ourStory")}
          </h2>
          <div className="space-y-6 text-gray-700 text-lg md:text-xl">
            {storyContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      </ScrollBasedAnimation>

      {/* Mission Section */}
      <ScrollBasedAnimation direction="left" delay={0.3}>
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 border-b border-black pb-3">
            {t("about.ourMission")}
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            {t("about.missionContent")}
          </p>
        </section>
      </ScrollBasedAnimation>

      {/* Vision Section */}
      <ScrollBasedAnimation direction="up" delay={0.4}>
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 border-b border-black pb-3">
            {t("about.ourVision")}
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            {t("about.visionContent")}
          </p>
        </section>
      </ScrollBasedAnimation>

      {/* Values Section */}
      <ScrollBasedAnimation direction="up" delay={0.5}>
        <section className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-10 border-b border-black pb-3">
            {t("about.ourValues")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-gray-700 text-lg md:text-xl">
            <div>
              <h3 className="font-bold uppercase mb-3">{values.credibility.title}</h3>
              <p>{values.credibility.description}</p>
            </div>
            <div>
              <h3 className="font-bold uppercase mb-3">{values.independence.title}</h3>
              <p>{values.independence.description}</p>
            </div>
            <div>
              <h3 className="font-bold uppercase mb-3">{values.diversity.title}</h3>
              <p>{values.diversity.description}</p>
            </div>
            <div>
              <h3 className="font-bold uppercase mb-3">{values.innovation.title}</h3>
              <p>{values.innovation.description}</p>
            </div>
          </div>
        </section>
      </ScrollBasedAnimation>

      {/* Closing Section */}
      <ScrollBasedAnimation direction="up" delay={0.6}>
        <footer className="max-w-4xl mx-auto text-center border-t border-gray-300 pt-16">
          <h3 className="text-3xl md:text-4xl font-bold uppercase mb-4">
            {t("about.closingTitle")}
          </h3>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            {t("about.closingContent")}
          </p>
          <a
            href="/contact"
            className="inline-block border-2 border-black px-10 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-all"
          >
            {t("about.contactUs")}
          </a>
        </footer>
      </ScrollBasedAnimation>
    </main>
  );
}
