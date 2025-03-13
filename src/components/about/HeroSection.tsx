
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:py-40 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-navy-900 z-[-1]"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 z-[-1]"></div>
      
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            A Glimpse into the Genius of Bernard Whimp
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A distinguished professional with an illustrious career spanning over three decades in investment and finance.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
