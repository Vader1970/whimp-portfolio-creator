
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  return (
    <section className="section-padding bg-navy-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Stay Informed</h2>
            <p className="text-gray-300 text-lg mb-8">
              Subscribe to receive the latest insights, articles, and media appearances from Bernard Whimp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-white"
              />
              <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
