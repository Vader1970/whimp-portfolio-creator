
import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LeadershipSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">Leadership Roles</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 lg:order-2"
          >
            <p className="text-navy-700 leading-relaxed">
              Bernard is the founder and director of Chance Voight Investment Partners Limited, shouldering the responsibilities of Chief Investment Officer (CIO). Furthermore, he undertakes the roles of director and Chief Executive Officer (CEO) at Chance Voight Investment Corporation Limited (CVI Corporation). Beyond these central positions, Bernard extends his directorial influence on all subsidiary companies under the CVI Corporation umbrella.
            </p>
            
            <p className="text-navy-700 leading-relaxed">
              Bernard is currently several years into building a billion-dollar investment company, Chance Voight Investment Partners. He is both the Chief Executive Officer (CEO) and Chief Investment Officer (CIO) and established the company on the back of his experience as a full-time professional share investor.
            </p>
            
            <p className="text-navy-700 leading-relaxed">
              He has accumulated well over an impressive 30 years' experience in share investment, stock markets, commercial property investment and development, commercial property financing and mortgage lending, property, and securities law. Naturally entrepreneurial, he is well suited to building successful businesses, and has done so throughout his professional life.
            </p>
            
            <p className="text-navy-700 leading-relaxed">
              Bernard has channelled his personal successes on the Australian stock market (ASX) to success for both Chance Voight and its investors. Investors and Journalists alike are instantly struck by Bernard's capacity to deeply understand the stock market, the businesses listed on it and his deep value investment style.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-24 lg:order-1"
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <AspectRatio ratio={3/4} className="bg-navy-100">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80" 
                  alt="Bernard Whimp Portrait" 
                  className="object-cover w-full h-full rounded-xl"
                />
              </AspectRatio>
            </div>
            <div className="absolute -bottom-5 -right-5 glass-panel p-4 md:p-6 max-w-xs">
              <p className="font-serif text-navy-900 text-xl md:text-2xl font-semibold">Bernard Whimp</p>
              <p className="text-navy-600">Founder & CEO/CIO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
