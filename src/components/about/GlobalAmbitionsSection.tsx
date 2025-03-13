
import React from 'react';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const GlobalAmbitionsSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 order-2 md:order-1"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Global Ambitions</h2>
            
            <p className="text-navy-700 leading-relaxed">
              Chance Voight has global ambitions and Bernard has paved the way by trademarking the Chance Voight name across all major financial centres in the world. This is one of the many strategic accomplishments the firm has rolled out as it builds momentum.
            </p>
            
            <p className="text-navy-700 leading-relaxed">
              Chance Voight has moved out of its initial development phase and has a deeply held conviction that they are on track towards an incredible business. Having all of its key systems built, Chance Voight's established business model is scaling up to the billion-dollar mark within what they believe will be a four-year timeframe.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="aspect-square rounded-xl overflow-hidden shadow-xl">
              <div className="h-full w-full flex items-center justify-center bg-navy-100">
                <Globe size={120} className="text-navy-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalAmbitionsSection;
