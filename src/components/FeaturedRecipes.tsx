import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';

const recipes = [
  {
    title: 'Quinoa Buddha Bowl',
    category: 'Healthy',
    time: '25 mins',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
  },
  {
    title: 'Overnight Oats',
    category: 'Breakfast',
    time: '5 mins',
    servings: 1,
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
  },
  {
    title: 'Green Smoothie Bowl',
    category: 'Breakfast',
    time: '10 mins',
    servings: 1,
    image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
  },
];

const FeaturedRecipes = () => {
  return (
    <section className="py-16 px-4 bg-sage-100">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-dancing font-bold text-sage-800 text-center mb-12"
        >
          Featured Recipes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="recipe-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="category-pill">
                    {recipe.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sage-800 mb-2">
                  {recipe.title}
                </h3>
                
                <div className="flex items-center space-x-4 text-sage-600">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span className="text-sm">{recipe.time}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    <span className="text-sm">{recipe.servings} servings</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;