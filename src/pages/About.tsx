
import React from 'react';
import PageTransition from '@/components/PageTransition';
import HeroSection from '@/components/about/HeroSection';
import LeadershipSection from '@/components/about/LeadershipSection';
import ExpertiseSection from '@/components/about/ExpertiseSection';
import GlobalAmbitionsSection from '@/components/about/GlobalAmbitionsSection';
import InvestmentPhilosophySection from '@/components/about/InvestmentPhilosophySection';

const About = () => {
  return (
    <PageTransition>
      <HeroSection />
      <LeadershipSection />
      <ExpertiseSection />
      <GlobalAmbitionsSection />
      <InvestmentPhilosophySection />
    </PageTransition>
  );
};

export default About;
