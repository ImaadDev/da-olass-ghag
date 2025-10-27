"use client";

import ScrollBasedAnimation from "../../../components/ScrollBasedAnimation";

const worldNews = [
  {
    title: "Global leaders meet to discuss climate change strategy",
    category: "WORLD",
    img: "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "UN issues urgent appeal for humanitarian aid",
    category: "WORLD",
    img: "https://images.unsplash.com/photo-1559027615-5dc0d5c6c7e5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "New trade agreements reshape global markets",
    category: "WORLD",
    img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Peace talks resume amid regional tensions",
    category: "WORLD",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Breakthrough in renewable energy technology",
    category: "WORLD",
    img: "https://images.unsplash.com/photo-1561473879-c3180d6c8f98?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Global inflation rates begin to stabilize",
    category: "WORLD",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "International sports events draw record crowds",
    category: "WORLD",
    img: "https://images.unsplash.com/photo-1571003123895-65de87f2e1b8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Major breakthrough in cancer treatment announced",
    category: "WORLD",
    img: "https://images.unsplash.com/photo-1576765607924-3f7b5c9d0b3c?auto=format&fit=crop&w=800&q=80",
  },
];

export default function WorldNewsPage() {
  return (
    <main className="bg-white text-black max-w-7xl mx-auto px-8 py-16 md:py-24">
      {/* Header */}
      <ScrollBasedAnimation direction="up" delay={0.1}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-black" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
            World News
          </h1>
        </div>
      </ScrollBasedAnimation>

      {/* Hero Section */}
      <ScrollBasedAnimation direction="up" delay={0.2}>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Left: Image */}
          <div className="relative h-96 lg:h-[32rem] overflow-hidden">
            <img
              src={worldNews[0].img}
              alt={worldNews[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 border border-white bg-black/80">
              <span className="text-white text-xs font-semibold tracking-widest">
                {worldNews[0].category}
              </span>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              {worldNews[0].title}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Leaders from across the globe convene to tackle pressing global
              issues including climate change, trade policies, and humanitarian
              cooperation to ensure a sustainable future.
            </p>
            <button className="mt-6 border-2 border-black px-8 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300 w-fit">
              READ MORE
            </button>
          </div>
        </section>
      </ScrollBasedAnimation>

      {/* Latest Updates */}
      <ScrollBasedAnimation direction="up" delay={0.3}>
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-8 bg-black" />
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
              Latest Updates
            </h2>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {worldNews.slice(1).map((item, idx) => (
              <article
                key={idx}
                className="group cursor-pointer bg-white border border-gray-200 transition-colors duration-300 hover:bg-gray-50"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 border border-white bg-black/80">
                    <span className="text-white text-xs font-semibold tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-lg leading-snug group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <span>3 hours ago</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollBasedAnimation>

      {/* View More */}
      <ScrollBasedAnimation direction="up" delay={0.4}>
        <div className="mt-16 text-center">
          <button className="border-2 border-black px-10 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300 uppercase">
            View All World News
          </button>
        </div>
      </ScrollBasedAnimation>
    </main>
  );
}
