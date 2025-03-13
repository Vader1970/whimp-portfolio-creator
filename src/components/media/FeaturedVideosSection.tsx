
import React from 'react';
import { motion } from 'framer-motion';
import VideoCard from './VideoCard';

const FeaturedVideosSection = () => {
  const featuredVideos = [
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
  ];

  return (
    <section className="section-padding bg-navy-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">Featured Videos</h2>
          <p className="text-navy-600 leading-relaxed">
            Watch Bernard Whimp's most impactful interviews and presentations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVideos.map((video, index) => (
            <VideoCard 
              key={index}
              index={index}
              title={video.title}
              date={video.date}
              type={video.type}
              description={video.description}
              image={video.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideosSection;
