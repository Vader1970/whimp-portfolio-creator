
import React from 'react';
import { Award, Bookmark, BookOpen, GraduationCap, Users } from 'lucide-react';
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
              About Bernard Whimp
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

      {/* Biography Section */}
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
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Professional Biography</h2>
              
              <p className="text-navy-700 leading-relaxed">
                Bernard Whimp is a distinguished finance professional with over 30 years of comprehensive experience across share investment, commercial property, and securities law. As a visionary leader and founder of Chance Voight Investment Partners, he has established himself as an authority in strategic investment management.
              </p>
              
              <p className="text-navy-700 leading-relaxed">
                His expertise spans stock market analysis, commercial property investment and development, property financing, and mortgage lending, underpinned by a deep understanding of property and securities law that gives him a unique perspective on investment opportunities.
              </p>
              
              <p className="text-navy-700 leading-relaxed">
                Known for his ability to identify high-value investment opportunities, Bernard combines analytical rigor with market intuition to deliver exceptional results. His speaking engagements are sought after for their insightful analysis and practical wisdom drawn from decades of experience navigating complex financial landscapes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise & Skills Section */}
      <section className="section-padding bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Expertise & Qualifications</h2>
            <p className="text-navy-600 leading-relaxed">
              A lifetime dedicated to excellence in investment and financial strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen size={36} className="text-navy-800" />,
                title: "Financial Analysis",
                description: "Expert in analyzing market trends, financial statements, and investment opportunities."
              },
              {
                icon: <Award size={36} className="text-navy-800" />,
                title: "Investment Strategy",
                description: "Skilled in developing comprehensive investment strategies tailored to market conditions."
              },
              {
                icon: <Users size={36} className="text-navy-800" />,
                title: "Team Leadership",
                description: "Proven track record in building and leading high-performing investment teams."
              },
              {
                icon: <GraduationCap size={36} className="text-navy-800" />,
                title: "Education",
                description: "Advanced degrees in finance and business administration from prestigious institutions."
              },
              {
                icon: <Bookmark size={36} className="text-navy-800" />,
                title: "Legal Knowledge",
                description: "Extensive knowledge of property and securities law, enabling comprehensive investment analyses."
              },
              {
                icon: <Award size={36} className="text-navy-800" />,
                title: "Professional Certifications",
                description: "Holds multiple professional certifications in investment management and financial analysis."
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

      {/* Career Timeline */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Career Highlights</h2>
            <p className="text-navy-600 leading-relaxed">
              A journey through decades of achievement and expertise building.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-navy-200"></div>

            {/* Timeline Items */}
            {[
              {
                year: "2015 - Present",
                title: "Founder & CEO/CIO",
                organization: "Chance Voight Investment Partners",
                description: "Leading strategic investment decisions and company vision."
              },
              {
                year: "2008 - 2015",
                title: "Senior Investment Strategist",
                organization: "Global Finance Group",
                description: "Developed and implemented investment strategies for high-net-worth clients."
              },
              {
                year: "2000 - 2008",
                title: "Commercial Property Director",
                organization: "Metropolis Property Development",
                description: "Oversaw major commercial property investments and development projects."
              },
              {
                year: "1993 - 2000",
                title: "Financial Analyst",
                organization: "Investment Partners Ltd",
                description: "Specialized in stock market analysis and investment recommendations."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${index % 2 === 0 ? 'text-right pr-12 md:pr-0 md:mr-auto md:ml-0 md:w-1/2' : 'pl-12 md:pl-0 md:ml-auto md:mr-0 md:w-1/2'}`}
              >
                <div className={`hidden md:block absolute top-3 ${index % 2 === 0 ? 'right-0 transform translate-x-6' : 'left-0 transform -translate-x-6'} w-12 h-1 bg-navy-300`}></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none -top-2">
                  <div className="w-5 h-5 rounded-full bg-navy-800 relative md:absolute md:top-3 md:left-1/2 md:transform md:-translate-x-1/2"></div>
                </div>
                <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <p className="text-gold-600 font-medium mb-2">{item.year}</p>
                  <h3 className="font-serif text-xl font-semibold text-navy-900 mb-1">{item.title}</h3>
                  <p className="text-navy-600 font-medium mb-3">{item.organization}</p>
                  <p className="text-navy-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Core Values & Philosophy</h2>
            <p className="text-gray-300 leading-relaxed">
              The principles that guide Bernard's approach to investment and leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Integrity",
                description: "Unwavering commitment to ethical practices and transparency in all investment decisions."
              },
              {
                title: "Excellence",
                description: "Striving for the highest standards in analysis, strategy, and client service."
              },
              {
                title: "Innovation",
                description: "Embracing innovative approaches to identify unique investment opportunities."
              },
              {
                title: "Long-term Vision",
                description: "Focus on sustainable growth and value creation over short-term gains."
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
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
