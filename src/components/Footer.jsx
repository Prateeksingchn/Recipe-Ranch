import React from "react";
import { motion } from "framer-motion";
import { ChefHat, GraduationCap, Apple, BookOpen, Thermometer } from "lucide-react";

const Footer = () => {
    const features = [
        { icon: ChefHat, title: "Quality Food", description: "Discover recipes made with premium, hand-picked ingredients for exceptional taste." },
        { icon: GraduationCap, title: "Cook like a Chef", description: "Learn professional techniques and tips to elevate your cooking skills." },
        { icon: Apple, title: "Diverse Ingredients", description: "Explore a wide range of ingredients to create exciting and flavorful dishes." },
        { icon: BookOpen, title: "Easy Recipes", description: "Find simple, step-by-step recipes perfect for beginners and busy cooks." },
        { icon: Thermometer, title: "Serve Hot", description: "Get tips on keeping your dishes at the perfect temperature for serving." },
    ];

    return (
        <footer className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-green-600 text-center text-lg font-semibold">Features</h2>
                <h1 className="text-3xl font-bold text-center mt-2 mb-12">
                    OUR AWESOME SERVICES
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="flex items-start space-x-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <feature.icon className="flex-shrink-0 h-12 w-12 text-green-600" />
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500">
                    <p>&copy; 2024 Your Recipe App. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;