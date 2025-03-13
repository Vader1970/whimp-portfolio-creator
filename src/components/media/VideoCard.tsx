
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { PlayCircle, Calendar, Video } from 'lucide-react';

interface VideoCardProps {
  title: string;
  date: string;
  type: string;
  description: string;
  image: string;
  index: number;
}

const VideoCard = ({ title, date, type, description, image, index }: VideoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg overflow-hidden shadow-sm"
    >
      <div className="aspect-video relative group">
        <img 
          src={image}
          alt={title} 
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
          <Calendar className="h-4 w-4 mr-1" /> <span className="mr-3">{date}</span>
          <Video className="h-4 w-4 mr-1" /> <span>{type}</span>
        </div>
        <h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">{title}</h3>
        <p className="text-navy-700 mb-6 text-sm">{description}</p>
        <Button variant="outline" className="border-navy-300 text-navy-800 w-full">
          <PlayCircle className="mr-2 h-4 w-4" /> Watch Now
        </Button>
      </div>
    </motion.div>
  );
};

export default VideoCard;
