"use client";

import ScrollBasedAnimation from "../ScrollBasedAnimation";

const regionalArticles = [
  {
    title: "KP launches renewable energy initiative",
    excerpt:
      "The government of Khyber Pakhtunkhwa has announced new solar power projects aimed at improving access to clean energy in rural areas.",
  },
  {
    title: "Tourism on the rise in Swat Valley",
    excerpt:
      "Local tourism sees a major boost as new infrastructure and improved security attract both domestic and international travelers.",
  },
  {
    title: "Education reforms target remote schools",
    excerpt:
      "The provincial education department introduces digital learning tools to enhance access for students in mountainous regions.",
  },
];

export default function RegionalNews() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-24 border-t border-gray-100">
      {/* Section header */}
      <ScrollBasedAnimation direction="up" offset={60}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-black" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            Regional News (Khyber Pakhtunkhwa)
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
                Updated 3 hours ago
              </div>
            </article>
          </ScrollBasedAnimation>
        ))}
      </div>

      {/* View all button */}
      <div className="mt-16 text-center">
        <ScrollBasedAnimation direction="up" delay={0.4}>
          <button className="border-2 border-black px-8 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
            VIEW ALL REGIONAL NEWS
          </button>
        </ScrollBasedAnimation>
      </div>
    </section>
  );
}
