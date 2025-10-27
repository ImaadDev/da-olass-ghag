"use client";

import BreakingNews from "../components/home/BreakingNews";
import FeaturedStories from "../components/home/FeaturedStroies";
import LatestNews from "../components/home/LatestNews";
import RegionalNews from "../components/home/RegionalNews";
import Multimedia from "../components/home/Multimedia";
import FeaturedNews from "../components/home/FeaturedNews";
import SportsNews from "../components/home/SportNews";
import ShowbizNews from "../components/home/ShowbizNews";
import InternationalNews from "../components/home/InternationalNews";
import BusinessNews from "../components/home/BusinessNews";
import TechnologyNews from "../components/home/TechnologyNews";
import HealthNews from "../components/home/HealthNews";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <BreakingNews />
      <FeaturedStories />
      <FeaturedNews />
      <LatestNews />
      <InternationalNews />
      <RegionalNews />
      <Multimedia />
      <SportsNews />
      <ShowbizNews />
      <BusinessNews />
      <TechnologyNews />
      <HealthNews />
      <footer className="text-center text-xs text-gray-500 py-6 border-t border-gray-100">
        © 2025 AAM OLAS News. All rights reserved.
      </footer>
    </main>
  );
}
