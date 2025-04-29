
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ProcessSection from '@/components/ProcessSection';
import SolutionSection from '@/components/SolutionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TidioChat from '@/components/TidioChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <SolutionSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <TidioChat />
    </div>
  );
};

export default Index;
