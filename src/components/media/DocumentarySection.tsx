
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle, Calendar, Video } from 'lucide-react';

const DocumentarySection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-navy-50 rounded-xl overflow-hidden shadow-md"
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-900 p-6 pb-2">Bernard Whimp Documentary</h2>
            <p className="text-navy-600 px-6 pb-4">A comprehensive look at Bernard Whimp's investment philosophy and career</p>
            
            <div className="aspect-video relative group">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80" 
                alt="Bernard Whimp Documentary" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-navy-900/60 flex items-center justify-center">
                <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                  <PlayCircle className="mr-2 h-6 w-6" /> Watch Documentary
                </Button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center text-navy-600 text-sm mb-4">
                <Calendar className="h-4 w-4 mr-1" /> <span className="mr-4">January 2023</span>
                <Video className="h-4 w-4 mr-1" /> <span>Documentary</span>
              </div>
              <p className="text-navy-700">
                This exclusive documentary explores Bernard Whimp's journey through the financial world, 
                his investment philosophy, and the founding of Chance Voight Investment Partners. 
                Featuring interviews with industry leaders and insights into his most successful strategies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DocumentarySection;
