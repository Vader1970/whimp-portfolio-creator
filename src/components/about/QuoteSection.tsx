
import React from 'react';
import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-navy-50 p-8 md:p-12 rounded-xl shadow-sm relative"
        >
          <QuoteIcon className="h-12 w-12 text-gold-500 opacity-20 absolute top-8 right-8" />
          <p className="text-navy-800 font-serif text-xl md:text-2xl mb-6 leading-relaxed italic">
            "We keep our investment capital where we can achieve outstanding returns on it - in investment situations with the right characteristics - in a concentrated portfolio of winning situations. By thinking this way we tilt the likelihood of extraordinary success steeply in our direction."
          </p>
          <div>
            <p className="text-navy-700 font-medium">— Bernard Whimp</p>
            <p className="text-navy-600 text-sm mt-1">Chance Voight Investment Corporation Founder and CEO/CIO</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
