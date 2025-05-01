import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Star, XCircle, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const HeroBackground = ({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement> }) => (
  <>
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 bg-transparent"
      style={{ pointerEvents: "none" }}
    />
    <div className="absolute top-[15%] left-[5%] w-[90%] h-[70%] rounded-full blur-[120px] bg-gradient-to-r from-saas-yellow/10 via-saas-yellow/15 to-saas-yellow/10 z-0"></div>
  </>
);

const HeroHeading = () => (
  <div className="space-y-6">
    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-white">
      From Idea to Impact <span className="text-saas-yellow">—</span>
      <br />
      <span className="gradient-text">Build Your Future,</span> Today
    </h1>
  </div>
);

const HeroSubtext = () => (
  <p className="text-lg md:text-xl text-white max-w-xl font-light leading-snug font-poppins">
    You've got the vision. We've got the AI tools to launch your modern site in hours, not months.
  </p>
);

const HeroSearchBar = ({ painPoints, currentPainPoint }: { painPoints: string[]; currentPainPoint: number }) => (
  <div className="py-2">
    <div className="flex items-center space-x-3 bg-black/40 border border-saas-yellow/10 backdrop-blur-md rounded-lg px-5 py-3 max-w-xl shadow-lg"
      style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)" }}>
      <Zap className="h-5 w-5 text-saas-yellow" />
      <p className="text-base md:text-lg font-semibold text-white">
        {painPoints[currentPainPoint]}
      </p>
    </div>
  </div>
);

const HeroButtons = () => (
  <div className="flex flex-wrap gap-6 items-center pt-6">
    <Button
      asChild
      className="bg-saas-yellow text-black text-lg py-6 px-8 hover:bg-saas-yellow/90 flex items-center shadow-lg hover:shadow-xl transition-all"
    >
      <a
        href="https://calendly.com/naveenrlinkedin/build-future-discovery-call"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
      </a>
    </Button>
    <Button
      variant="outline"
      className="text-lg py-6 px-8 border-saas-yellow text-white hover:bg-saas-yellow/10 transition-all"
      onClick={() => (window.location.href = "#solutions")}
    >
      See What We've Built
    </Button>
  </div>
);

const HeroBeforeAfter = () => (
  <div className="grid grid-cols-2 gap-4">
    <div className="bg-black rounded-lg p-4 border border-white/10 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:border-white/30 transform-gpu group hover:scale-105">
      <div className="h-24 bg-[#18181b] rounded mb-3 flex items-center justify-center">
        <div className="h-10 w-16 bg-[#232329] rounded-sm"></div>
      </div>
      <div className="h-4 w-32 bg-[#232329] rounded mb-2 mx-auto"></div>
      <div className="h-3 w-24 bg-[#232329] rounded mx-auto"></div>
      <div className="flex items-center justify-center mt-3 text-xs font-medium text-white">
        <XCircle className="h-4 w-4 text-white mr-1" />
        <span>Before — Confused, scattered ideas</span>
      </div>
    </div>
    <div className="bg-gradient-to-tr from-saas-yellow/15 to-saas-yellow/5 rounded-lg p-4 border border-saas-yellow/60 transition-all hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:border-saas-yellow/100 transform-gpu group hover:scale-105">
      <div className="h-24 bg-saas-yellow/10 rounded mb-3 flex items-center justify-center">
        <div className="h-10 w-16 bg-saas-yellow/30 rounded-sm"></div>
      </div>
      <div className="h-4 w-32 bg-saas-yellow/30 rounded mb-2 mx-auto"></div>
      <div className="h-3 w-24 bg-saas-yellow/30 rounded mx-auto"></div>
      <div className="flex items-center justify-center mt-3 text-xs font-medium text-saas-yellow">
        <CheckCircle className="h-4 w-4 text-green-400 mr-1" />
        <span>After — A stunning site powered by AI</span>
      </div>
    </div>
  </div>
);

const HeroSiteBuilderCard = () => (
  <div className="bg-gradient-to-tr from-saas-yellow/15 to-saas-yellow/5 backdrop-blur-sm rounded-2xl p-6 border border-saas-yellow/30 shadow-[0_0_50px_rgba(255,215,0,0.2)] hover:shadow-[0_0_60px_rgba(255,215,0,0.5)] transition-all hover:scale-105">
    <div className="text-center mb-4 flex flex-col items-center">
      <div className="w-16 h-16 bg-saas-yellow flex items-center justify-center rounded-full mb-4">
        <Zap className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-center text-2xl font-bold text-white group-hover:scale-110 transition-all">
        Build Your Website
      </h3>
      <p className="text-center text-sm text-white mt-2 group-hover:text-white transition-all">
        AI-Powered Site Builder — Fully Customizable, No Code
      </p>
    </div>
  </div>
);

const HeroTrustIndicators = () => (
  <div className="grid grid-cols-3 gap-8 pt-6">
    <div className="flex items-center text-sm md:text-base text-white">
      <Clock className="h-5 w-5 text-saas-yellow mr-2" />
      <span>Launch in days</span>
    </div>
    <div className="flex items-center text-sm md:text-base text-white">
      <Star className="h-5 w-5 text-saas-yellow mr-2" />
      <span className="whitespace-nowrap">Premium design</span>
    </div>
    <div className="flex items-center text-sm md:text-base text-white">
      <Zap className="h-5 w-5 text-saas-yellow mr-2" />
      <span>AI-powered</span>
    </div>
  </div>
);

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentPainPoint, setCurrentPainPoint] = useState(0);

  const painPoints = [
    "No time or team to launch?",
    "Tired of clunky website builders?",
    "Not sure where to start?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPainPoint((prev) => (prev + 1) % painPoints.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden hero-pattern pt-28 pb-16">
      <HeroBackground canvasRef={canvasRef} />
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="md:col-span-7 space-y-6 pt-4 fade-in">
            <HeroHeading />
            <HeroSubtext />
            <HeroSearchBar painPoints={painPoints} currentPainPoint={currentPainPoint} />
            <HeroButtons />
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 flex flex-col gap-10 pt-6">
            <HeroBeforeAfter />
            <HeroSiteBuilderCard />
            <HeroTrustIndicators />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
