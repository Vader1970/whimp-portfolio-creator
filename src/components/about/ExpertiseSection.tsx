
import React from 'react';
import { Award, Bookmark, BookOpen, GraduationCap, Users, Target, Briefcase, TrendingUp, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const ExpertiseSection = () => {
  const expertiseItems = [
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
  ];

  return (
    <section className="section-padding bg-navy-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Expertise & Experience</h2>
          <p className="text-navy-600 leading-relaxed">
            Over three decades of comprehensive experience across multiple domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
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
  );
};

export default ExpertiseSection;
