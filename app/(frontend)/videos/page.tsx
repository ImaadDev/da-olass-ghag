"use client";

import { useState } from "react";

const videosData = [
  {
    title: "Pakistan's economic growth analysis",
    category: "Business",
    date: "Oct 22, 2025",
    videoUrl: "https://youtu.be/284Ov7ysmfA",
    thumbnail: "https://img.youtube.com/vi/284Ov7ysmfA/hqdefault.jpg",
    description: "An analysis of Pakistan's recent economic growth, trends, and projections.",
  },
  {
    title: "Innovations in Technology 2025",
    category: "Technology",
    date: "Oct 20, 2025",
    videoUrl: "https://www.youtube.com/watch?v=example2",
    thumbnail: "https://img.youtube.com/vi/example2/hqdefault.jpg",
    description: "Exploring the cutting-edge technology innovations shaping 2025.",
  },
  {
    title: "Health sector reforms and updates",
    category: "Health",
    date: "Oct 18, 2025",
    videoUrl: "https://www.youtube.com/watch?v=example3",
    thumbnail: "https://img.youtube.com/vi/example3/hqdefault.jpg",
    description: "Updates on health sector reforms and public health initiatives.",
  },
  {
    title: "Sports highlights this week",
    category: "Sports",
    date: "Oct 15, 2025",
    videoUrl: "https://youtu.be/example4",
    thumbnail: "https://img.youtube.com/vi/example4/hqdefault.jpg",
    description: "Weekly sports highlights and analysis.",
  },
  {
    title: "Entertainment news roundup",
    category: "Entertainment",
    date: "Oct 12, 2025",
    videoUrl: "https://youtu.be/example5",
    thumbnail: "https://img.youtube.com/vi/example5/hqdefault.jpg",
    description: "Latest updates and news from the entertainment industry.",
  },
];

const ITEMS_PER_PAGE = 4;

// Helper to extract YouTube ID
function getYouTubeID(url: string) {
  const match = url.match(
    /(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.)?youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : url; // fallback to URL if no match
}

export default function VideosPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered videos
  const filteredVideos = videosData.filter(
    (video) =>
      (video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategory === "All" || video.category === selectedCategory)
  );

  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);
  const currentVideos = filteredVideos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Categories
  const categories = ["All", ...new Set(videosData.map((v) => v.category))];

  return (
    <main className="bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-28">

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-red-600" />
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-red-700">
              Videos
            </h1>
          </div>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl">
            Watch our latest videos covering news, interviews, and special features.
          </p>

          {/* Search + Category */}
          <div className="mt-6 flex flex-col md:flex-row md:items-center md:gap-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="Search videos..."
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

        {/* Video Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {currentVideos.map((video, idx) => {
            const videoID = getYouTubeID(video.videoUrl);
            return (
              <div key={idx} className="group cursor-pointer">
                {activeVideo === video.videoUrl && videoID ? (
                  <div className="relative w-full aspect-video border-2 border-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
                      title={video.title}
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
                      <h3 className="font-bold text-xl md:text-2xl mb-2">{video.title}</h3>
                      <p className="text-gray-700 text-sm md:text-base">{video.description}</p>
                      <div className="text-sm text-gray-500 font-mono mt-1">{video.date}</div>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setActiveVideo(video.videoUrl)}
                    className="relative w-full aspect-video overflow-hidden bg-black border-2 border-black group-hover:border-red-600 transition-colors duration-300"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
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
                          {video.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-bold text-xl text-white leading-tight mb-1">{video.title}</h3>
                      <p className="text-sm text-gray-300">{video.description}</p>
                      <div className="text-sm text-gray-300 font-mono mt-1">{video.date}</div>
                    </div>
                  </div>
                )}
                {!activeVideo && (
                  <div className="mt-4">
                    <h3 className="font-bold text-lg md:text-xl leading-tight">{video.title}</h3>
                    <p className="text-gray-700 text-sm md:text-base">{video.description}</p>
                    <div className="text-sm text-gray-500 font-mono mt-1">{video.date}</div>
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
