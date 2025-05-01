import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/ThemeProvider";
import { ArrowRight, Clock, Star, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Theme-aware colors
const getThemeColors = (isDarkMode) => ({
  accentColor: isDarkMode ? "text-saas-yellow" : "text-saas-primary", // Use a darker color for light mode
  accentBg: isDarkMode 
    ? "bg-saas-yellow/30" 
    : "bg-saas-primary/30", // Less opacity for backgrounds
  accentBgLight: isDarkMode 
    ? "bg-saas-yellow/10" 
    : "bg-saas-primary/10",
  accentBorder: isDarkMode 
    ? "border-saas-yellow/30" 
    : "border-saas-primary/50", // Higher opacity for borders in light mode
  accentBorderHover: isDarkMode 
    ? "hover:border-saas-yellow/50" 
    : "hover:border-saas-primary/70",
  accentGradient: isDarkMode 
    ? "from-saas-yellow/15 to-saas-yellow/5" 
    : "from-saas-primary/20 to-saas-primary/10",
  buttonBg: isDarkMode 
    ? "bg-saas-yellow" 
    : "bg-saas-primary",
  buttonText: "text-saas-black",
  buttonHover: isDarkMode 
    ? "hover:bg-saas-yellow/90" 
    : "hover:bg-saas-primary/90",
  outlineBorder: isDarkMode 
    ? "border-saas-yellow" 
    : "border-saas-primary",
  outlineHover: isDarkMode 
    ? "hover:bg-saas-yellow/10" 
    : "hover:bg-saas-primary/10",
  glow: isDarkMode 
    ? "rgba(255,215,0,0.5)" 
    : "rgba(194,145,0,0.5)",
  shadowGlow: isDarkMode 
    ? "shadow-[0_0_30px_rgba(255,215,0,0.5)]" 
    : "shadow-[0_0_30px_rgba(194,145,0,0.5)]",
  beforeAfterGlow: isDarkMode 
    ? "hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" 
    : "hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]",
});

const HeroBackground = ({ canvasRef, isDarkMode }) => (
  <>
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 bg-transparent"
      style={{ pointerEvents: "none" }}
    />
    <div className={`absolute top-[15%] left-[5%] w-[90%] h-[70%] rounded-full blur-[120px] bg-gradient-to-r ${
      isDarkMode ? "from-saas-yellow/10 via-saas-yellow/15 to-saas-yellow/10" : "from-saas-primary/10 via-saas-primary/15 to-saas-primary/10"
    } z-0`}></div>
  </>
);

const HeroHeading = ({ theme }) => {
  const colors = getThemeColors(theme === "dark");
  
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-1">
        <Zap className={`${colors.accentColor} h-6 w-6 mr-2`} />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
        From Idea to Impact <span className={colors.accentColor}>—</span>
        <br />
        <span className="gradient-text">Build Your Future,</span> Today
      </h1>
    </div>
  );
};

const HeroSubtext = () => (
  <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
    You've got the vision. We've got the AI tools to launch your modern site in hours, not months.
  </p>
);

const HeroSearchBar = ({ painPoints, currentPainPoint, theme }) => {
  const colors = getThemeColors(theme === "dark");
  
  return (
    <div className="py-2">
      <div className={`flex items-center space-x-3 bg-muted/50 backdrop-blur-sm rounded-lg px-5 py-3 animate-pulse-subtle max-w-md border ${colors.accentBorder} hover:${colors.accentBorderHover.replace('hover:', '')} transition-all`}>
        <Zap className={`h-5 w-5 ${colors.accentColor}`} />
        <p className="text-base md:text-lg font-medium transition-all duration-500 ease-in-out pain-point-animate">
          {painPoints[currentPainPoint]}
        </p>
      </div>
    </div>
  );
};

const HeroButtons = ({ theme }) => {
  const colors = getThemeColors(theme === "dark");
  
  return (
    <div className="flex flex-wrap gap-8 items-center pt-6 pb-8">
      <Button
        className={`${colors.buttonBg} ${colors.buttonText} text-lg py-6 px-8 ${colors.buttonHover} flex items-center shadow-lg hover:shadow-xl transition-all`}
        onClick={() => (window.location.href = "#contact")}
      >
        Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        className={`text-lg py-6 px-8 ${colors.outlineBorder} text-foreground ${colors.outlineHover} transition-all`}
        onClick={() => (window.location.href = "#solutions")}
      >
        See What We've Built
      </Button>
    </div>
  );
};

const HeroBeforeAfter = ({ theme }) => {
  const colors = getThemeColors(theme === "dark");
  
  return (
    <div className="grid grid-cols-2 gap-6 mb-10">
      <div className={`bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-muted transition-all ${colors.beforeAfterGlow} hover:border-muted/80 transform-gpu group hover:scale-105`}>
        <div className="h-28 bg-muted/50 rounded mb-3 flex items-center justify-center">
          <div className="h-10 w-16 bg-muted/70 rounded-sm"></div>
        </div>
        <div className="h-4 w-32 bg-muted/70 rounded mb-2 mx-auto"></div>
        <div className="h-3 w-24 bg-muted/70 rounded mx-auto"></div>
        <div className="text-xs font-medium text-muted-foreground mt-3 text-center group-hover:text-foreground group-hover:scale-110 transition-all">
          🚫 Before — Confused, scattered ideas
        </div>
      </div>
      <div className={`bg-gradient-to-tr ${colors.accentGradient} backdrop-blur-sm rounded-lg p-4 border ${colors.accentBorder} transition-all ${colors.shadowGlow} ${colors.accentBorderHover} transform-gpu group hover:scale-105`}>
        <div className={`h-28 ${colors.accentBgLight} rounded mb-3 flex items-center justify-center`}>
          <div className={`h-10 w-16 ${colors.accentBg} rounded-sm`}></div>
        </div>
        <div className={`h-4 w-32 ${colors.accentBg} rounded mb-2 mx-auto`}></div>
        <div className={`h-3 w-24 ${colors.accentBg} rounded mx-auto`}></div>
        <div className={`text-xs font-medium ${colors.accentColor} mt-3 text-center group-hover:${colors.accentColor.replace('text-', 'text-')}/100 group-hover:scale-110 transition-all`}>
          ✅ After — A stunning site powered by AI
        </div>
      </div>
    </div>
  );
};

const HeroSiteBuilderCard = ({ theme }) => {
  const colors = getThemeColors(theme === "dark");
  
  return (
    <div className={`bg-gradient-to-tr ${colors.accentGradient} backdrop-blur-sm rounded-2xl p-6 border ${colors.accentBorder} shadow-[0_0_50px_${theme === "dark" ? "rgba(255,215,0,0.2)" : "rgba(194,145,0,0.2)"}] hover:shadow-[0_0_60px_${theme === "dark" ? "rgba(255,215,0,0.5)" : "rgba(194,145,0,0.5)"}] transition-all hover:scale-105`}>
      <div className="text-center mb-6 flex flex-col items-center">
        <div className={`w-16 h-16 ${colors.accentBg} rounded-full mb-4 flex items-center justify-center`}>
          <Zap className={`h-8 w-8 ${colors.accentColor}`} />
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
};

const HeroTrustIndicators = ({ theme }) => {
  const colors = getThemeColors(theme === "dark");
  
  return (
    <div className="grid grid-cols-3 gap-16 pt-10">
      <div className="flex items-center text-sm md:text-base">
        <Clock className={`h-5 w-5 ${colors.accentColor} mr-3`} />
        <span>Launch in days</span>
      </div>
      <div className="flex items-center text-sm md:text-base">
        <Star className={`h-5 w-5 ${colors.accentColor} mr-3`} />
        <span>Premium design</span>
      </div>
      <div className="flex items-center text-sm md:text-base">
        <Zap className={`h-5 w-5 ${colors.accentColor} mr-3`} />
        <span>AI-powered</span>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentPainPoint, setCurrentPainPoint] = useState(0);
  // Use your existing theme provider
  const { theme } = useTheme();

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

  // Get theme-specific colors
  const colors = getThemeColors(theme === "dark");

  return (
    <section className={`relative min-h-screen overflow-hidden hero-pattern ${theme === "light" ? "bg-gray-50" : "bg-black"}`}>
      <HeroBackground canvasRef={canvasRef} isDarkMode={theme === "dark"} />
      
      {/* Position for your existing theme toggle component */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="md:col-span-7 space-y-8 fade-in">
            <HeroHeading theme={theme} />
            <HeroSubtext />
            <HeroSearchBar painPoints={painPoints} currentPainPoint={currentPainPoint} theme={theme} />
            <div className="flex flex-wrap gap-6 items-center">
              <Button
                className={`${colors.buttonBg} ${colors.buttonText} text-lg py-4 px-6 ${colors.buttonHover} flex items-center shadow-lg hover:shadow-xl transition-all`}
                onClick={() => (window.location.href = "#contact")}
              >
                Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className={`text-lg py-4 px-6 ${colors.outlineBorder} text-foreground ${colors.outlineHover} transition-all`}
                onClick={() => (window.location.href = "#solutions")}
              >
                See What We've Built
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 space-y-8">
            <HeroBeforeAfter theme={theme} />
            <HeroSiteBuilderCard theme={theme} />
            <HeroTrustIndicators theme={theme} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;