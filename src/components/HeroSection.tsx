import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star, Zap } from "lucide-react";
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
    <div className="flex items-center mb-1">
      <Zap className="text-saas-yellow h-6 w-6 mr-2" />
    </div>
    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
      From Idea to Impact <span className="text-saas-yellow">—</span>
      <br />
      <span className="gradient-text">Build Your Future,</span> Today
    </h1>
  </div>
);

const HeroSubtext = () => (
  <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
    You've got the vision. We've got the AI tools to launch your modern site in hours, not months.
  </p>
);

const HeroSearchBar = ({ painPoints, currentPainPoint }: { painPoints: string[]; currentPainPoint: number }) => (
  <div className="py-2">
    <div className="flex items-center space-x-3 bg-muted/50 backdrop-blur-sm rounded-lg px-5 py-3 animate-pulse-subtle max-w-md border border-saas-yellow/10 hover:border-saas-yellow/30 transition-all">
      <Zap className="h-5 w-5 text-saas-yellow" />
      <p className="text-base md:text-lg font-medium transition-all duration-500 ease-in-out pain-point-animate">
        {painPoints[currentPainPoint]}
      </p>
    </div>
  </div>
);

const HeroButtons = () => (
  <div className="flex flex-wrap gap-8 items-center pt-6 pb-8">
    <Button
      className="bg-saas-yellow text-saas-black text-lg py-6 px-8 hover:bg-saas-yellow/90 flex items-center shadow-lg hover:shadow-xl transition-all"
      onClick={() => (window.location.href = "#contact")}
    >
      Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
    <Button
      variant="outline"
      className="text-lg py-6 px-8 border-saas-yellow text-foreground hover:bg-saas-yellow/10 transition-all"
      onClick={() => (window.location.href = "#solutions")}
    >
      See What We've Built
    </Button>
  </div>
);

const HeroBeforeAfter = () => (
  <div className="grid grid-cols-2 gap-6 mb-10">
    <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-muted transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:border-muted/80 transform-gpu group hover:scale-105">
      <div className="h-28 bg-muted/50 rounded mb-3 flex items-center justify-center">
        <div className="h-10 w-16 bg-muted/70 rounded-sm"></div>
      </div>
      <div className="h-4 w-32 bg-muted/70 rounded mb-2 mx-auto"></div>
      <div className="h-3 w-24 bg-muted/70 rounded mx-auto"></div>
      <div className="text-xs font-medium text-muted-foreground mt-3 text-center group-hover:text-foreground group-hover:scale-110 transition-all">
        🚫 Before — Confused, scattered ideas
      </div>
    </div>
    <div className="bg-gradient-to-tr from-saas-yellow/15 to-saas-yellow/5 backdrop-blur-sm rounded-lg p-4 border border-saas-yellow/30 transition-all hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:border-saas-yellow/50 transform-gpu group hover:scale-105">
      <div className="h-28 bg-saas-yellow/10 rounded mb-3 flex items-center justify-center">
        <div className="h-10 w-16 bg-saas-yellow/30 rounded-sm"></div>
      </div>
      <div className="h-4 w-32 bg-saas-yellow/30 rounded mb-2 mx-auto"></div>
      <div className="h-3 w-24 bg-saas-yellow/30 rounded mx-auto"></div>
      <div className="text-xs font-medium text-saas-yellow mt-3 text-center group-hover:text-saas-yellow/100 group-hover:scale-110 transition-all">
        ✅ After — A stunning site powered by AI
      </div>
    </div>
  </div>
);

const HeroSiteBuilderCard = () => (
  <div className="bg-gradient-to-tr from-saas-yellow/15 to-saas-yellow/5 backdrop-blur-sm rounded-2xl p-6 border border-saas-yellow/30 shadow-[0_0_50px_rgba(255,215,0,0.2)] hover:shadow-[0_0_60px_rgba(255,215,0,0.5)] transition-all hover:scale-105">
    <div className="text-center mb-6 flex flex-col items-center">
      <div className="w-16 h-16 bg-saas-yellow/30 rounded-full mb-4 flex items-center justify-center">
        <Zap className="h-8 w-8 text-saas-yellow" />
      </div>
      <h3 className="text-center text-2xl font-bold group-hover:scale-110 transition-all">
        Build Your Website
      </h3>
      <p className="text-center text-sm text-muted-foreground mt-2 mb-4 group-hover:text-foreground transition-all">
        AI-Powered Site Builder — Fully Customizable, No Code
      </p>
    </div>
  </div>
);

const HeroTrustIndicators = () => (
  <div className="grid grid-cols-3 gap-16 pt-10">
    <div className="flex items-center text-sm md:text-base">
      <Clock className="h-5 w-5 text-saas-yellow mr-3" />
      <span>Launch in days</span>
    </div>
    <div className="flex items-center text-sm md:text-base">
      <Star className="h-5 w-5 text-saas-yellow mr-3" />
      <span>Premium design</span>
    </div>
    <div className="flex items-center text-sm md:text-base">
      <Zap className="h-5 w-5 text-saas-yellow mr-3" />
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
    <section className="relative min-h-screen overflow-hidden hero-pattern">
      <HeroBackground canvasRef={canvasRef} />
      <div className="container mx-auto px-4 md:px-6 z-10 pt-20"> {/* Adjusted top padding */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8"> {/* Adjusted gap */}
          {/* Left Column */}
          <div className="md:col-span-7 space-y-8 fade-in"> {/* Adjusted spacing */}
            <HeroHeading />
            <HeroSubtext />
            <HeroSearchBar painPoints={painPoints} currentPainPoint={currentPainPoint} />
            <div className="flex flex-wrap gap-6 items-center"> {/* Adjusted button spacing */}
              <Button
                className="bg-saas-yellow text-saas-black text-lg py-4 px-6 hover:bg-saas-yellow/90 flex items-center shadow-lg hover:shadow-xl transition-all"
                onClick={() => (window.location.href = "#contact")}
              >
                Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="text-lg py-4 px-6 border-saas-yellow text-foreground hover:bg-saas-yellow/10 transition-all"
                onClick={() => (window.location.href = "#solutions")}
              >
                See What We've Built
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 space-y-8">
            <HeroBeforeAfter />
            <HeroSiteBuilderCard />
            <HeroTrustIndicators /> {/* Moved under "Build Your Website" */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
