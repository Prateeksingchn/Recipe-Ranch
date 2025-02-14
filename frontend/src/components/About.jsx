import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Utensils, Users, Leaf, Camera, Code, GraduationCap, MapPin } from "lucide-react";

const AboutIntroSection = ({ scrollToAbout }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div
      className="h-screen flex items-center justify-center bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"
      style={{ opacity }}
    >
      <div className="text-center bg-black bg-opacity-30 p-12 rounded-3xl backdrop-blur-lg w-full max-w-4xl mx-4">
        <motion.h1
          className="text-7xl md:text-9xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Flavor Code
        </motion.h1>
        <motion.p
          className="text-2xl text-gray-200 mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Where Tech Meets Taste
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-10 rounded-full text-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300 flex items-center justify-center mx-auto"
          onClick={scrollToAbout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover My Journey
          <ArrowDown className="ml-2" size={24} />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Marquee = () => (
  <div className="bg-gradient-to-r from-purple-900 to-pink-800 py-4 overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="mx-4 text-2xl text-white font-bold">
          Tech-Savvy Recipes • Coding Culinary Creations • Byte-sized Delights
        </span>
      ))}
    </div>
  </div>
);

const FeatureCard = ({ Icon, title, description }) => (
  <motion.div
    className="bg-gradient-to-br from-purple-800 to-pink-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
    whileHover={{ y: -10, scale: 1.02 }}
  >
    <Icon className="w-16 h-16 text-purple-300 mb-6" />
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-purple-200 text-lg">{description}</p>
  </motion.div>
);

const AboutContent = ({ aboutRef }) => {
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <motion.div 
      ref={aboutRef} 
      className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900"
      style={{ opacity, scale }}
    >
      <h2 className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Coding Culinary Magic
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-8">
        <FeatureCard
          Icon={Code}
          title="Tech-Infused Recipes"
          description="Explore innovative recipes that blend coding concepts with culinary artistry."
        />
        <FeatureCard
          Icon={Users}
          title="Community of Techie Foodies"
          description="Join a unique community where tech enthusiasts and food lovers unite."
        />
        <FeatureCard
          Icon={Leaf}
          title="Sustainable Cooking Algorithms"
          description="Discover eco-friendly cooking methods optimized by cutting-edge algorithms."
        />
      </div>
    </motion.div>
  );
};

const AboutCreator = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-purple-900 to-indigo-900">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Meet the Creator
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-64 h-64 rounded-full overflow-hidden mb-8 md:mb-0 md:mr-12">
            <img src="/api/placeholder/400/400" alt="Creator" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4 text-white">Tech Enthusiast & Culinary Explorer</h3>
            <p className="text-xl text-purple-200 mb-6">
              Hi there! I'm a 4th-year B.Tech student from Bhopal, passionate about blending my love for technology with the art of cooking. This unique combination has led me to create Flavor Code, where I share my journey of exploring the intersections of programming and gastronomy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <GraduationCap className="w-8 h-8 text-pink-400 mr-3" />
                <span className="text-white">4th Year B.Tech Student</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-8 h-8 text-pink-400 mr-3" />
                <span className="text-white">Based in Bhopal, India</span>
              </div>
              <div className="flex items-center">
                <Utensils className="w-8 h-8 text-pink-400 mr-3" />
                <span className="text-white">Tech-Savvy Chef</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  const projects = [
    { title: "Algorithm-Inspired Recipes", description: "Crafting dishes based on popular coding algorithms." },
    { title: "IoT Kitchen Gadgets", description: "Developing smart kitchen tools for the modern chef." },
    { title: "Data-Driven Meal Planner", description: "Using big data to create personalized, nutritious meal plans." },
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-indigo-900 to-purple-900">
      <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Fusion Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="bg-white/10 p-8 rounded-2xl backdrop-blur-md"
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
            <p className="text-purple-200">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const CallToAction = () => (
  <div className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-center">
    <h2 className="text-5xl font-bold mb-8 text-white">Ready to Code Your Next Meal?</h2>
    <motion.button
      className="bg-white text-purple-600 py-4 px-12 rounded-full text-xl font-semibold hover:bg-purple-100 transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Join the Flavor Code Community
    </motion.button>
  </div>
);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-purple-900 text-white w-full min-h-screen font-sans overflow-x-hidden">
      <AboutIntroSection scrollToAbout={scrollToAbout} />
      <Marquee />
      <AboutContent aboutRef={aboutRef} />
      <AboutCreator />
      <ProjectShowcase />
      <CallToAction />
    </div>
  );
};

export default About;