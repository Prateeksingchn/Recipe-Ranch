import React from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = ({ Icon, title, content }) => (
  <motion.div
    className="flex items-center mb-6"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="w-8 h-8 text-green-600 mr-4" />
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-green-600 mb-8 text-center"
        >
          Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
        >
          We'd love to hear from you! Whether you have a question about recipes, want to collaborate, or just want to say hello, we're here for you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-3xl font-bold mb-6 text-green-600">Contact Information</h2>
            <ContactInfo Icon={Phone} title="Phone" content="+1 (555) 123-4567" />
            <ContactInfo Icon={Mail} title="Email" content="hello@recipeapp.com" />
            <ContactInfo Icon={MapPin} title="Address" content="123 Foodie Lane, Culinary City, 12345" />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 className="text-3xl font-bold mb-6 text-green-600">Send us a Message</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 ease-in-out flex items-center justify-center"
            >
              Send Message
              <Send className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;