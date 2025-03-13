
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlayCircle, Download, FileText, Calendar, User, Video } from 'lucide-react';
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

      {/* Bernard Whimp Documentary Section */}
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

      {/* Featured Videos Row */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Featured Videos</h2>
            <p className="text-navy-600 leading-relaxed">
              Watch Bernard Whimp's most impactful interviews and presentations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Investment Strategies for Market Downturns",
                date: "March 2023",
                type: "Interview",
                description: "Bernard shares key strategies for maintaining portfolio growth during economic downturns.",
                image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
              },
              {
                title: "Commercial Property: Post-Pandemic Outlook",
                date: "August 2023",
                type: "Webinar",
                description: "An in-depth analysis of the commercial property market following global economic shifts.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
              },
              {
                title: "Future of Financial Markets",
                date: "October 2023",
                type: "Conference Talk",
                description: "Bernard's keynote address on emerging trends and opportunities in global financial markets.",
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
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
                <div className="aspect-video relative group">
                  <img 
                    src={item.image}
                    alt={item.title} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-navy-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30">
                      <PlayCircle className="mr-2 h-5 w-5" /> Watch Video
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-navy-600 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" /> <span className="mr-3">{item.date}</span>
                    <Video className="h-4 w-4 mr-1" /> <span>{item.type}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-navy-700 mb-6 text-sm">{item.description}</p>
                  <Button variant="outline" className="border-navy-300 text-navy-800 w-full">
                    <PlayCircle className="mr-2 h-4 w-4" /> Watch Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chance Voight Video Section */}
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
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-900 p-6 pb-2">Chance Voight Investment Partners</h2>
              <p className="text-navy-600 px-6 pb-4">Corporate presentation on investment philosophy and unique approach</p>
              
              <div className="aspect-video relative group">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80" 
                  alt="Chance Voight Corporate Video" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-navy-900/60 flex items-center justify-center">
                  <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900">
                    <PlayCircle className="mr-2 h-6 w-6" /> Watch Company Video
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-navy-600 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-1" /> <span className="mr-4">December 2023</span>
                  <Video className="h-4 w-4 mr-1" /> <span>Corporate</span>
                </div>
                <p className="text-navy-700">
                  This corporate presentation explores the founding principles, investment approach, and future vision of Chance Voight Investment Partners.
                  Learn about our unique methodology and how we create consistent returns for our clients.
                </p>
              </div>
            </motion.div>
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
