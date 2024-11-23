import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Utensils, Cookie, Cake, Salad, Sun, Moon } from 'lucide-react';

const categories = [
  { name: 'Breakfast', icon: Coffee },
  { name: 'Lunch', icon: Sun },
  { name: 'Dinner', icon: Moon },
  { name: 'Snacks', icon: Cookie },
  { name: 'Desserts', icon: Cake },
  { name: 'Healthy', icon: Salad },
];

const Categories = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-dancing font-bold text-sage-800 text-center mb-12"
        >
          Browse by Category
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition-shadow"
            >
              <category.icon className="w-12 h-12 text-sage-600 mx-auto mb-4" />
              <h3 className="font-medium text-sage-800">{category.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;