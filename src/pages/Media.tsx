
import React from 'react';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/media/HeroSection';
import DocumentarySection from '@/components/media/DocumentarySection';
import FeaturedVideosSection from '@/components/media/FeaturedVideosSection';
import CompanyVideoSection from '@/components/media/CompanyVideoSection';
import NewsletterSection from '@/components/media/NewsletterSection';

const Media = () => {
  return (
    <PageTransition>
      <HeroSection />
      <DocumentarySection />
      <FeaturedVideosSection />
      <CompanyVideoSection />
      <NewsletterSection />
    </PageTransition>
  );
};

export default Media;
