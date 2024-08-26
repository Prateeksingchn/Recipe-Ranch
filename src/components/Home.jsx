import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "./Home/HeroSection";
import ExploreSection from "./Home/ExploreSection";
import FeaturedRecipes from "./Home/FeaturedRecipes";
import TopRecipes from "./Home/TopRecipes";
import TestimonialsSection from "./Home/TestimonialsSection";
import SeasonalSpecials from "./Home/SeasonalSpecials";
import NutritionRecipes from "./Home/NutritionRecipes";
import QuickAccess from "./Home/QuickAccess";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const exploreSectionRef = useRef(null);
  const topRecipesSectionRef = useRef(null);
  const nutritionRecipesSectionRef = useRef(null);

  useEffect(() => {
    document.title = "Culinary Delights | Home";
  }, []);

  useEffect(() => {
    if (location.hash === "#explore" && exploreSectionRef.current) {
      exploreSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.hash === "#top" && topRecipesSectionRef.current) {
      topRecipesSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (
      location.hash === "#nutrition" &&
      nutritionRecipesSectionRef.current
    ) {
      nutritionRecipesSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="w-full min-h-screen bg-white">
      <main>
        <section id="hero">
          <HeroSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </section>
        <section id="explore">
          <ExploreSection ref={exploreSectionRef} />
        </section>
        <section id="featured">
          <FeaturedRecipes />
        </section>
        <section id="top" ref={topRecipesSectionRef}>
          <TopRecipes />
        </section>
        <section id="nutrition" ref={nutritionRecipesSectionRef}>
          <NutritionRecipes />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="cta">
          <SeasonalSpecials />
        </section>
      </main>
      <QuickAccess />
    </div>
  );
};

export default Home;
