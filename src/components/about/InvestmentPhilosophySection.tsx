
import React from 'react';
import { motion } from 'framer-motion';

const InvestmentPhilosophySection = () => {
  const philosophyItems = [
    {
      title: "Deep Value Investment",
      description: "Bernard has a deep value investment style which simply means he wants his assets cheap, at a price where he can contain the downside and hold a large high conviction position."
    },
    {
      title: "Key Personality Traits",
      description: "Bernard possesses a collection of key stock market personality traits necessary for success, what is believed to be prerequisites for a hedge fund principal. His relentless work capacity, laser focus, years of experience, incredible foresight, and willingness to make his own calls have proven to be very lucrative for Chance Voight as its CIO."
    }
  ];

  return (
    <section className="section-padding bg-navy-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Investment Philosophy</h2>
          <p className="text-gray-300 leading-relaxed">
            A distinctive approach that has proven successful in the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {philosophyItems.map((item, index) => (
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
  );
};

export default InvestmentPhilosophySection;
