
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:py-40 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-navy-900 z-[-1]"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616587894289-86480e533129?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 z-[-1]"></div>
      
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            Videos & Interviews
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Watch Bernard Whimp's interviews, talks, and presentations on investment strategy and market analysis.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
