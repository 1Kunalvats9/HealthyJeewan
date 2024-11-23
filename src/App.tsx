import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Coffee, Utensils, Cookie, Cake } from 'lucide-react';
import Navbar from './components/Navbar';
import FeaturedRecipes from './components/FeaturedRecipes';
import Categories from './components/Categories';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-sage-50">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <main>
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-sage-100 to-sage-200"
        >
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Cooking background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          
          <div className="relative text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-dancing font-bold text-sage-800 mb-4"
            >
              Healthy Jeewan
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-sage-700 max-w-2xl mx-auto"
            >
              Discover the joy of healthy cooking with our delicious recipes and video demonstrations
            </motion.p>
          </div>
        </motion.section>

        {/* Categories Section */}
        <Categories />

        {/* Featured Recipes */}
        <FeaturedRecipes />
      </main>

      <Footer />
    </div>
  );
}

export default App;