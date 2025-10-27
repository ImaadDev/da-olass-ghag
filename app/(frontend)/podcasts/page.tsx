"use client";

import { useState } from "react";

const podcastsData = [
  {
    title: "Climate Change Awareness",
    category: "Environment",
    date: "Oct 22, 2025",
    url: "https://www.youtube.com/watch?v=284Ov7ysmfA",
    thumbnail: "https://img.youtube.com/vi/284Ov7ysmfA/hqdefault.jpg",
    description: "An in-depth discussion on climate change, its impacts, and how we can take action to protect the environment.",
  },
  {
    title: "Tech Innovations 2025",
    category: "Technology",
    date: "Oct 20, 2025",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    description: "Exploring the latest technological innovations shaping the future of industries and everyday life.",
  },
  {
    title: "Health Sector Reforms",
    category: "Health",
    date: "Oct 18, 2025",
    url: "https://www.youtube.com/watch?v=example3",
    thumbnail: "https://img.youtube.com/vi/example3/hqdefault.jpg",
    description: "A detailed look into healthcare reforms, policies, and initiatives improving public health outcomes.",
  },
];

const ITEMS_PER_PAGE = 4;

// Helper function to extract the video ID from YouTube URL
const getYouTubeID = (url: string) => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : null;
};

export default function PodcastsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter podcasts based on search term and category
  const filteredPodcasts = podcastsData.filter((podcast) => {
    const matchesSearch =
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      podcast.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || podcast.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPodcasts.length / ITEMS_PER_PAGE);
  const currentPodcasts = filteredPodcasts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Get unique categories
  const categories = ["All", ...new Set(podcastsData.map((p) => p.category))];

  return (
    <main className="bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-28">

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-red-600" />
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-red-700">
              Video Podcasts
            </h1>
          </div>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl">
            Watch our latest video podcasts covering news, interviews, and special discussions.
          </p>

          {/* Filters */}
          <div className="mt-8 flex flex-col md:flex-row md:items-center md:gap-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="Search podcasts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-2 border-black px-4 py-2 w-full md:w-1/2 focus:outline-none"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border-2 border-black px-4 py-2 w-full md:w-1/4 focus:outline-none"
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </header>

        {/* Video Podcast Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {currentPodcasts.map((podcast, idx) => {
            const videoID = getYouTubeID(podcast.url);
            return (
              <div key={idx} className="group cursor-pointer">
                {activeVideo === podcast.url && videoID ? (
                  <div className="relative w-full aspect-video border-2 border-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
                      title={podcast.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                    <button
                      onClick={() => setActiveVideo(null)}
                      className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 text-sm font-bold"
                    >
                      Close
                    </button>
                    <div className="p-4">
                      <h3 className="font-bold text-xl md:text-2xl mb-2">{podcast.title}</h3>
                      <p className="text-gray-700 text-sm md:text-base">{podcast.description}</p>
                      <div className="text-sm text-gray-500 font-mono mt-1">{podcast.date}</div>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setActiveVideo(podcast.url)}
                    className="relative w-full aspect-video overflow-hidden bg-black border-2 border-black group-hover:border-red-600 transition-colors duration-300"
                  >
                    <img
                      src={podcast.thumbnail}
                      alt={podcast.title}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                      <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <div className="w-20 h-20 border-4 border-white flex items-center justify-center">
                          <span className="text-white text-3xl ml-1">&#9658;</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0">
                      <div className="bg-red-600 px-4 py-2">
                        <span className="text-white text-xs font-bold tracking-[0.2em]">
                          {podcast.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold text-xl text-white leading-tight mb-1">{podcast.title}</h3>
                      <p className="text-sm text-gray-300">{podcast.description}</p>
                      <div className="text-sm text-gray-300 font-mono mt-1">{podcast.date}</div>
                    </div>
                  </div>
                )}
                {!activeVideo && (
                  <div className="mt-4">
                    <h3 className="font-bold text-lg md:text-xl leading-tight">{podcast.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base">{podcast.description}</p>
                    <div className="text-sm text-gray-500 font-mono mt-1">{podcast.date}</div>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`px-4 py-2 border border-red-600 font-bold text-sm tracking-widest transition ${
              currentPage === 1
                ? "text-gray-400 border-gray-400 cursor-not-allowed"
                : "text-red-700 hover:bg-red-700 hover:text-white"
            }`}
          >
            PREV
          </button>
          <span className="text-gray-700 font-medium">{currentPage} / {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`px-4 py-2 border border-red-600 font-bold text-sm tracking-widest transition ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-400 cursor-not-allowed"
                : "text-red-700 hover:bg-red-700 hover:text-white"
            }`}
          >
            NEXT
          </button>
        </div>
      </div>
    </main>
  );
}
