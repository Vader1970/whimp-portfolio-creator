
import React from 'react';
import { Award, Bookmark, BookOpen, GraduationCap, Users, Target, Briefcase, TrendingUp, Building, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
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

      {/* Leadership Roles Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80" 
                  alt="Bernard Whimp Portrait" 
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 glass-panel p-4 md:p-6">
                <p className="font-serif text-navy-900 text-xl md:text-2xl font-semibold">Bernard Whimp</p>
                <p className="text-navy-600">Founder & CEO/CIO</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Leadership Roles</h2>
              
              <p className="text-navy-700 leading-relaxed">
                Bernard is the founder and director of Chance Voight Investment Partners Limited, shouldering the responsibilities of Chief Investment Officer (CIO). Furthermore, he undertakes the roles of director and Chief Executive Officer (CEO) at Chance Voight Investment Corporation Limited (CVI Corporation). Beyond these central positions, Bernard extends his directorial influence on all subsidiary companies under the CVI Corporation umbrella.
              </p>
              
              <p className="text-navy-700 leading-relaxed">
                Bernard is currently several years into building a billion-dollar investment company, Chance Voight Investment Partners. He is both the Chief Executive Officer (CEO) and Chief Investment Officer (CIO) and established the company on the back of his experience as a full-time professional share investor.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise & Experience Section */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Expertise & Experience</h2>
            <p className="text-navy-600 leading-relaxed">
              Over three decades of comprehensive experience across multiple domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp size={36} className="text-navy-800" />,
                title: "Share Investment",
                description: "Over 30 years of expertise in stock markets and share investment strategies."
              },
              {
                icon: <Building size={36} className="text-navy-800" />,
                title: "Commercial Property",
                description: "Extensive experience in commercial property investment, development, and financing."
              },
              {
                icon: <Briefcase size={36} className="text-navy-800" />,
                title: "Entrepreneurship",
                description: "Natural entrepreneurial talent with a history of building successful businesses."
              },
              {
                icon: <BookOpen size={36} className="text-navy-800" />,
                title: "Legal Knowledge",
                description: "Deep understanding of property and securities law that informs investment decisions."
              },
              {
                icon: <Target size={36} className="text-navy-800" />,
                title: "Investment Strategy",
                description: "Practitioner of a deep value investment style, seeking assets at prices that contain downside risk."
              },
              {
                icon: <Award size={36} className="text-navy-800" />,
                title: "Market Insight",
                description: "Remarkable capacity to understand the stock market and businesses listed on it."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-navy-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Ambitions Section */}
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

      {/* Investment Philosophy Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Investment Philosophy</h2>
            <p className="text-gray-300 leading-relaxed">
              A distinctive approach that has proven successful in the market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Deep Value Investment",
                description: "Bernard has a deep value investment style which simply means he wants his assets cheap, at a price where he can contain the downside and hold a large high conviction position."
              },
              {
                title: "Key Personality Traits",
                description: "Bernard possesses a collection of key stock market personality traits necessary for success, what is believed to be prerequisites for a hedge fund principal. His relentless work capacity, laser focus, years of experience, incredible foresight, and willingness to make his own calls have proven to be very lucrative for Chance Voight as its CIO."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy-800 p-6 rounded-lg border border-navy-700"
              >
                <h3 className="font-serif text-xl font-semibold text-gold-400 mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-navy-800 p-8 rounded-lg border border-navy-700 text-center"
          >
            <p className="text-xl md:text-2xl text-white italic">
              "It is easy to see why it has been speculated by some that Bernard may be one of the greatest company builders and wealth creators in New Zealand today."
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
