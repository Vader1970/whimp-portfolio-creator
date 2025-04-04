
import React from 'react';
import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';

const quotes = [
  {
    text: "You cannot do what everyone else does and achieve better than average results. To be a good investor, to generate the highest returns, you must go against the consensus thinking.",
    author: "Bernard Whimp"
  },
  {
    text: "A proper investor has unhooked their thinking about share prices from what the quoted market price is.",
    author: "Bernard Whimp"
  },
  {
    text: "Once you enter the church of deep value investing, everything you do in the stock market will be about buying assets at cents in the dollar.",
    author: "Bernard Whimp"
  },
  {
    text: "The best thing you can do for yourself is find a good hedge fund and stick with it.",
    author: "Bernard Whimp"
  }
];

const QuotesSection = () => {
  return (
    <section className="py-20 bg-navy-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">Words of Wisdom</h2>
          <p className="text-navy-600">Bernard Whimp shares his investment philosophy and insights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md relative"
            >
              <QuoteIcon className="h-10 w-10 text-gold-500 opacity-20 absolute top-4 right-4" />
              <p className="text-navy-800 font-serif text-lg md:text-xl mb-4 leading-relaxed italic">
                "{quote.text}"
              </p>
              <p className="text-navy-700 font-medium">— {quote.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
