import React, { useEffect, useState } from "react";
import HeroSection from "./Home/HeroSection";
import ExploreSection from "./Home/ExploreSection";
import FeaturedRecipes from "./Home/FeaturedRecipes";
import TopRecipes from "./Home/TopRecipes";
import TestimonialsSection from "./Home/TestimonialsSection";
import CTASection from "./Home/CTASection";
import NutritionRecipes from "./Home/NutritionRecipes";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Culinary Delights | Home";
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <main>
        <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ExploreSection />
        <FeaturedRecipes />
        <TopRecipes />
        <NutritionRecipes />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Home;