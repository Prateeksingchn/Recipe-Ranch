import React, { useEffect, useState } from "react";
import HeroSection from "./Home/HeroSection";
import ExploreSection from "./Home/ExploreSection";
import FeaturedRecipes from "./Home/FeaturedRecipes";
import FeaturesSection from "./Home/FeaturesSection";
import TestimonialsSection from "./Home/TestimonialsSection";
import CTASection from "./Home/CTASection";

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
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Home;