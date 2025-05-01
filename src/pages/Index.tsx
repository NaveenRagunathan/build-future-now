import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ProblemSection from '../components/ProblemSection';
import ProcessSection from '../components/ProcessSection';
import SolutionSection from '../components/SolutionSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TidioChat from '../components/TidioChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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