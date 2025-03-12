
import React from 'react';
import { ArrowRight, Briefcase, Trophy, Users, BarChart4 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:py-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-50 z-[-1]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 z-[-1]"></div>
        
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-navy-900 leading-tight mb-6 text-balance">
                <span className="inline-block">Investment Expertise</span>{" "}
                <span className="inline-block text-navy-800">Spanning Decades</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-navy-700 text-lg md:text-xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bernard Whimp brings over 30 years of experience in share investment, 
              commercial property development, and securities law.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild className="bg-navy-800 hover:bg-navy-700 text-white">
                <Link to="/about">Learn More</Link>
              </Button>
              <Button asChild variant="outline" className="border-navy-800 text-navy-800">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Areas of Expertise</h2>
            <p className="text-navy-600 leading-relaxed">
              With decades of experience across multiple disciplines in finance and investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <BarChart4 className="h-10 w-10 text-navy-800 mb-4" />,
                title: "Share Investment",
                description: "Deep expertise in stock markets with a proven track record of identifying valuable opportunities."
              },
              {
                icon: <Briefcase className="h-10 w-10 text-navy-800 mb-4" />,
                title: "Commercial Property",
                description: "Specialist knowledge in property investment, development, and financing strategies."
              },
              {
                icon: <Trophy className="h-10 w-10 text-navy-800 mb-4" />,
                title: "Professional Stock Picker",
                description: "Renowned for identifying high-value investments through meticulous research and analysis."
              },
              {
                icon: <Users className="h-10 w-10 text-navy-800 mb-4" />,
                title: "Investment Leadership",
                description: "Founder and CEO/CIO of Chance Voight Investment Partners, guiding strategic investment decisions."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-navy-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-navy-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">A Visionary Leader in Investment</h2>
              <p className="text-gray-300 leading-relaxed">
                Bernard Whimp has established himself as a respected figure in the investment community, 
                known for his strategic foresight and commitment to excellence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                As the founder of Chance Voight Investment Partners, he continues to guide investors 
                through complex market conditions with confidence and clarity.
              </p>
              <Button asChild className="bg-gold-500 hover:bg-gold-600 text-navy-900 mt-4">
                <Link to="/about">More About Bernard</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" 
                  alt="Bernard Whimp" 
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-navy-900 font-serif p-4 rounded-lg">
                <p className="text-xl font-semibold">30+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
              Ready to Elevate Your Investment Strategy?
            </h2>
            <p className="text-navy-700 text-lg mb-8">
              Connect with Bernard Whimp and discover how his expertise can help you navigate the complex world of investments.
            </p>
            <Button asChild size="lg" className="bg-navy-800 hover:bg-navy-700 text-white">
              <Link to="/contact">Get in Touch Today</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
