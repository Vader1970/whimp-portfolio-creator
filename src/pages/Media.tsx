
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle, Download, FileText, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

const Media = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
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
              Media & Resources
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Insights, presentations, and publications from Bernard Whimp and Chance Voight Investment Partners.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Media Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Featured Presentations</h2>
            <p className="text-navy-600 leading-relaxed">
              Keynote speeches and presentations by Bernard Whimp on investment strategy and market analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-navy-50 rounded-xl overflow-hidden"
            >
              <div className="aspect-video relative group">
                <img 
                  src="https://images.unsplash.com/photo-1651950569365-82297801215f?auto=format&fit=crop&q=80" 
                  alt="Investment Strategies Presentation" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-navy-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30">
                    <PlayCircle className="mr-2 h-5 w-5" /> Watch Video
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">Strategic Investment in Volatile Markets</h3>
                <div className="flex items-center text-navy-600 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-1" /> <span className="mr-4">June 15, 2023</span>
                  <User className="h-4 w-4 mr-1" /> <span>Bernard Whimp</span>
                </div>
                <p className="text-navy-700 mb-6">
                  A comprehensive analysis of investment strategies during market volatility, focusing on long-term value creation through strategic positioning and risk management.
                </p>
                <Button className="bg-navy-800 hover:bg-navy-700 text-white w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" /> Download Slides
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-navy-50 rounded-xl overflow-hidden"
            >
              <div className="aspect-video relative group">
                <img 
                  src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80" 
                  alt="Commercial Property Investment Lecture" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-navy-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30">
                    <PlayCircle className="mr-2 h-5 w-5" /> Watch Video
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">The Future of Commercial Property Investment</h3>
                <div className="flex items-center text-navy-600 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-1" /> <span className="mr-4">November 8, 2023</span>
                  <User className="h-4 w-4 mr-1" /> <span>Bernard Whimp</span>
                </div>
                <p className="text-navy-700 mb-6">
                  Exploring emerging trends in commercial property investment, with insights on identifying opportunities in evolving urban landscapes and changing work environments.
                </p>
                <Button className="bg-navy-800 hover:bg-navy-700 text-white w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" /> Download Slides
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Publications & Articles</h2>
            <p className="text-navy-600 leading-relaxed">
              Research papers, articles, and thought leadership pieces authored by Bernard Whimp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Market Analysis: Post-Pandemic Investment Opportunities",
                date: "March 2023",
                description: "An in-depth analysis of investment opportunities emerging in the post-pandemic economic landscape.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
              },
              {
                title: "Commercial Property Development: Risk Management Strategies",
                date: "August 2023",
                description: "A comprehensive guide to identifying and mitigating risks in commercial property development projects.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
              },
              {
                title: "The Evolution of Securities Law and Its Impact on Investment",
                date: "October 2023",
                description: "Examining how changes in securities law affect investment strategies and compliance requirements.",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <div className="aspect-video">
                  <img 
                    src={item.image}
                    alt={item.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gold-600 text-sm mb-2">{item.date}</p>
                  <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-navy-600 mb-6 text-sm">{item.description}</p>
                  <Button asChild variant="outline" className="border-navy-300 text-navy-800 w-full">
                    <a href="#">
                      <FileText className="mr-2 h-4 w-4" /> Read Article
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Appearances */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Media Appearances</h2>
            <p className="text-navy-600 leading-relaxed">
              Interviews and features in various media outlets showcasing Bernard Whimp's expertise.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                outlet: "Financial Times",
                title: "Expert Insights on Post-Recession Investment Strategies",
                date: "September 15, 2023",
                excerpt: "Bernard Whimp shares his perspective on navigating the investment landscape following economic downturns.",
                image: "https://images.unsplash.com/photo-1611159063981-b8c8c4301869?auto=format&fit=crop&q=80"
              },
              {
                outlet: "Bloomberg Business",
                title: "The Future of Commercial Property in Urban Centers",
                date: "July 3, 2023",
                excerpt: "An exclusive interview with Bernard Whimp on evolving trends in commercial property investment in major metropolitan areas.",
                image: "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?auto=format&fit=crop&q=80"
              },
              {
                outlet: "Investment Magazine",
                title: "Profile: Bernard Whimp and the Chance Voight Investment Philosophy",
                date: "April 22, 2023",
                excerpt: "A featured profile exploring Bernard Whimp's career and the investment philosophy that guides Chance Voight Investment Partners.",
                image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6 bg-navy-50 rounded-xl overflow-hidden"
              >
                <div className="aspect-video md:aspect-square md:h-full">
                  <img 
                    src={item.image}
                    alt={item.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 md:col-span-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 bg-navy-100 text-navy-800 text-xs font-medium rounded-full">
                        {item.outlet}
                      </span>
                      <span className="ml-3 text-navy-600 text-sm">{item.date}</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-navy-900 mb-3">{item.title}</h3>
                    <p className="text-navy-700 mb-6">{item.excerpt}</p>
                  </div>
                  <Button asChild variant="outline" className="border-navy-300 text-navy-800 w-full sm:w-auto">
                    <a href="#">
                      Read Full Article
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 bg-navy-800 border border-navy-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-white w-full"
                />
                <Button className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Media;
