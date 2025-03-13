
import React from 'react';
import { Building, ChartBar, Globe, ShieldCheck, TrendingUp, Users, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';

const ChanceVoight = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:py-40 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-900 z-[-1]"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 z-[-1]"></div>
        
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                Chance Voight Investment Partners
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A premier investment firm led by Bernard Whimp, focusing on strategic investments in shares and commercial property.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Company Overview</h2>
              
              <p className="text-navy-700 leading-relaxed">
                Founded in 2018, Chance Voight Investment Partners is a 100% Kiwi-owned investment firm headquartered in North Canterbury. With a team of over 20 professionals, we are committed to providing investors with products that achieve attractive returns and a superior investor experience.
              </p>
              
              <p className="text-navy-700 leading-relaxed">
                Chance Voight has the backing of a highly capable corporate team that has been carefully assembled to take the business forward. Set to command an impressive one billion in capital in the next four years, the team has become a well-oiled machine and is guided relentlessly by the entrepreneur.
              </p>
              
              <p className="text-navy-700 leading-relaxed">
                The Chance Voight name has been trademarked in all the major financial centers in the world, ensuring the firm is well-positioned for its global ambitions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                  alt="Chance Voight Office Building" 
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 glass-panel p-4 md:p-6">
                <p className="font-serif text-navy-900 text-xl font-semibold">Est. 2018</p>
                <p className="text-navy-600">North Canterbury, New Zealand</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Investment Approach</h2>
            <p className="text-navy-600 leading-relaxed">
              Our systematic methodology for identifying and capitalizing on valuable investment opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChartBar size={36} className="text-navy-800" />,
                title: "Rigorous Analysis",
                description: "We employ comprehensive analytical frameworks to evaluate potential investments, considering both quantitative metrics and qualitative factors."
              },
              {
                icon: <TrendingUp size={36} className="text-navy-800" />,
                title: "Value Recognition",
                description: "Our expertise lies in identifying undervalued assets with strong growth potential before they become apparent to the broader market."
              },
              {
                icon: <ShieldCheck size={36} className="text-navy-800" />,
                title: "Risk Management",
                description: "Every investment decision is made with careful consideration of potential risks, with strategies in place to mitigate and manage exposure."
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
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3 text-center">{item.title}</h3>
                <p className="text-navy-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Our Services</h2>
            <p className="text-navy-600 leading-relaxed">
              Comprehensive investment solutions tailored to deliver exceptional value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-navy-50 p-8 rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-navy-100 rounded-bl-full z-0"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-4">Share Investment</h3>
                <ul className="space-y-3 text-navy-700">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-navy-200 rounded-full p-1">
                      <svg className="h-3 w-3 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Focusing primarily on the Australasian financial markets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-navy-200 rounded-full p-1">
                      <svg className="h-3 w-3 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Dedicated stock picking team specializing in generating excess returns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-navy-200 rounded-full p-1">
                      <svg className="h-3 w-3 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Expertise in the Australian Stock Market (ASX) and private market share offerings</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-navy-50 p-8 rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-navy-100 rounded-bl-full z-0"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-4">Fixed-Term Investments</h3>
                <ul className="space-y-3 text-navy-700">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-navy-200 rounded-full p-1">
                      <svg className="h-3 w-3 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>High-yield, fixed-term, interest rate investments for wholesale investors</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-navy-200 rounded-full p-1">
                      <svg className="h-3 w-3 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Funds aimed at delivering premium returns</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-navy-200 rounded-full p-1">
                      <svg className="h-3 w-3 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Opportunity to generate a regular income stream or compound returns</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Leadership Team</h2>
            <p className="text-gray-300 leading-relaxed">
              Led by Bernard Whimp, our team brings together decades of experience in investment and finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-navy-800 rounded-lg overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" 
                  alt="Bernard Whimp" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-white mb-1">Bernard Whimp</h3>
                <p className="text-gold-400 mb-4">Founder & CEO/CIO</p>
                <p className="text-gray-300 text-sm">
                  Over 30 years of experience in investment, commercial property, and securities law.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-navy-800 rounded-lg overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                  alt="Sarah Reynolds" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-white mb-1">Sarah Reynolds</h3>
                <p className="text-gold-400 mb-4">Chief Operating Officer</p>
                <p className="text-gray-300 text-sm">
                  Experienced in operational excellence and strategic implementation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-navy-800 rounded-lg overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" 
                  alt="Michael Chen" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-white mb-1">Michael Chen</h3>
                <p className="text-gold-400 mb-4">Chief Investment Analyst</p>
                <p className="text-gray-300 text-sm">
                  Specialist in market analysis and investment strategy development.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Our Values</h2>
            <p className="text-navy-600 leading-relaxed">
              At Chance Voight Investment Partners, our goal is to create long-term value while managing risk. We are committed to helping New Zealanders make the most of their investment dollar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80" 
                  alt="Chance Voight Values" 
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-navy-700 leading-relaxed">
                Chance Voight is a firm dedicated to high-quality relationships with everyone it deals with. Our investors have expressed nothing but positive feedback about their experience with us.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-navy-100 rounded-full p-2">
                      <Users size={24} className="text-navy-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-navy-900 mb-1">Client-Centered</h3>
                    <p className="text-navy-600">We prioritize our investors' needs and goals, ensuring a superior investor experience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-navy-100 rounded-full p-2">
                      <Globe size={24} className="text-navy-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-navy-900 mb-1">Global Vision</h3>
                    <p className="text-navy-600">With trademarks secured in major financial centers, we're positioned for global growth.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-navy-100 rounded-full p-2">
                      <Building size={24} className="text-navy-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-navy-900 mb-1">Kiwi Owned</h3>
                    <p className="text-navy-600">We take pride in being a 100% New Zealand owned and operated investment firm.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Learn more about Chance Voight Investment Partners
            </h2>
            <p className="text-navy-700 text-lg mb-12">
              Building a billion-dollar business in the Australian stock market (ASX).
            </p>
            
            <div className="flex justify-center space-x-8">
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-white p-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Instagram size={32} className="text-navy-800 group-hover:text-pink-600 transition-colors duration-300" />
                </div>
                <p className="mt-2 text-navy-700 font-medium">Instagram</p>
              </motion.a>
              
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-white p-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Facebook size={32} className="text-navy-800 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <p className="mt-2 text-navy-700 font-medium">Facebook</p>
              </motion.a>
              
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="bg-white p-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Twitter size={32} className="text-navy-800 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <p className="mt-2 text-navy-700 font-medium">X</p>
              </motion.a>
            </div>
          </motion.div>
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
              Partner with Chance Voight
            </h2>
            <p className="text-navy-700 text-lg mb-8">
              Discover how our expertise can help you achieve your investment goals.
            </p>
            <Button asChild size="lg" className="bg-navy-800 hover:bg-navy-700 text-white">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default ChanceVoight;
