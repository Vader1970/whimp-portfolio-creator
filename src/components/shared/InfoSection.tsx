
import React from 'react';
import { motion } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface InfoSectionProps {
  title: string;
  content: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  overlayText: string;
  overlaySubtext?: string;
  buttonText?: string;
  buttonLink?: string;
  imageOnLeft?: boolean;
}

const InfoSection = ({
  title,
  content,
  imageSrc,
  imageAlt,
  overlayText,
  overlaySubtext,
  buttonText,
  buttonLink,
  imageOnLeft = true
}: InfoSectionProps) => {
  const isMobile = useIsMobile();
  
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: imageOnLeft ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative lg:sticky lg:top-32 lg:self-start ${
              imageOnLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="rounded-xl overflow-hidden shadow-xl w-full mx-auto">
              <AspectRatio ratio={isMobile ? 3/4 : 4/5} className="bg-navy-100">
                <img 
                  src={imageSrc} 
                  alt={imageAlt} 
                  className="object-cover w-full h-full rounded-xl"
                />
              </AspectRatio>
            </div>
            <div className="absolute -bottom-5 -right-5 glass-panel p-4 md:p-6 max-w-xs">
              <p className="font-serif text-navy-900 text-xl md:text-2xl font-semibold">{overlayText}</p>
              {overlaySubtext && <p className="text-navy-600">{overlaySubtext}</p>}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: imageOnLeft ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`space-y-6 ${
              imageOnLeft ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">{title}</h2>
            
            {typeof content === 'string' ? (
              <p className="text-navy-700 leading-relaxed">{content}</p>
            ) : (
              content
            )}
            
            {buttonText && buttonLink && (
              <div className="pt-4">
                <Button asChild size="lg" className="bg-navy-800 hover:bg-navy-700 text-white">
                  <Link to={buttonLink}>{buttonText}</Link>
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
