
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Star, Zap } from "lucide-react";
import { useEffect, useRef, useState } from 'react';
import ParticlesBackground from "@/components/ui/ParticlesBackground"; // adjust path if needed

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentPainPoint, setCurrentPainPoint] = useState(0);

  const painPoints = [
    "No time or team to launch?",
    "Tired of clunky website builders?",
    "Not sure where to start?"
  ];

  useEffect(() => {
    // Pain point carousel effect
    const interval = setInterval(() => {
      setCurrentPainPoint((prev) => (prev + 1) % painPoints.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.9;
    };
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(100, window.innerWidth / 10);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = `rgba(255, 215, 0, ${Math.random() * 0.5})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    init();

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            opacityValue = 1 - (distance / 100);
            if (!ctx) return;
            ctx.strokeStyle = `rgba(255, 215, 0, ${opacityValue * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden hero-pattern">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 bg-transparent"
        style={{ pointerEvents: 'none' }}
      />

      {/* Hero gradient arc - premium touch */}
      <div className="absolute top-[15%] left-[5%] w-[90%] h-[70%] rounded-full blur-[120px] bg-gradient-to-r from-saas-yellow/10 via-saas-yellow/15 to-saas-yellow/10 z-0"></div>

      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-6 z-10 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Left Content - text area */}
          <div className="md:col-span-7 space-y-14 fade-in">
            <div className="space-y-6">
              {/* Added lightning icon above heading */}
              <div className="flex items-center mb-1">
                <Zap className="text-saas-yellow h-6 w-6 mr-2" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                From Idea to Impact <span className="text-saas-yellow">—</span><br />
                <span className="gradient-text">Build Your Future,</span> Today
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                You've got the vision. We've got the AI tools to launch your modern site in hours, not months.
              </p>
            </div>

            {/* Pain point bar with lightning icon */}
            <div className="py-2">
              <div className="flex items-center space-x-3 bg-muted/50 backdrop-blur-sm rounded-lg px-5 py-3 animate-pulse-subtle max-w-md border border-saas-yellow/10 hover:border-saas-yellow/30 transition-all">
                <Zap className="h-5 w-5 text-saas-yellow" />
                <p className="text-base md:text-lg font-medium transition-all duration-500 ease-in-out pain-point-animate">
                  {painPoints[currentPainPoint]}
                </p>
              </div>
            </div>

            {/* CTAs with proper spacing */}
            <div className="flex flex-wrap gap-8 items-center pt-6 pb-8">
              <Button
                className="bg-saas-yellow text-saas-black text-lg py-6 px-8 hover:bg-saas-yellow/90 flex items-center shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.location.href = '#contact'}
              >
                Book a Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                className="text-lg py-6 px-8 border-saas-yellow text-foreground hover:bg-saas-yellow/10 transition-all"
                onClick={() => window.location.href = '#solutions'}
              >
                See What We've Built
              </Button>
            </div>

            {/* Updated trust indicator */}
            <div className="pt-6">
              <div className="flex items-center text-base">
                <Star className="text-saas-yellow h-5 w-5 mr-2" />
                <span className="text-muted-foreground">Building success with a few exceptional founders</span>
              </div>

              {/* More even spacing for bottom section */}
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
            </div>
          </div>

          {/* Right Visual Content - enhanced with better contrast and hover effects */}
          <div className="md:col-span-5">
            <div className="relative animate-float">
              {/* Enhanced Before/After Comparison with hover effects */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-4 border border-muted transition-all hover:shadow-md hover:border-muted/80 transform-gpu group">
                  <div className="h-28 bg-muted/50 rounded mb-3 flex items-center justify-center">
                    <div className="h-10 w-16 bg-muted/70 rounded-sm"></div>
                  </div>
                  <div className="h-4 w-32 bg-muted/70 rounded mb-2 mx-auto"></div>
                  <div className="h-3 w-24 bg-muted/70 rounded mx-auto"></div>
                  <div className="text-xs font-medium text-muted-foreground mt-3 text-center group-hover:text-foreground">
                    🚫 Before — Confused, scattered ideas
                  </div>
                </div>

                <div className="bg-gradient-to-tr from-saas-yellow/15 to-saas-yellow/5 backdrop-blur-sm rounded-lg p-4 border border-saas-yellow/30 transition-all hover:shadow-lg hover:border-saas-yellow/50 transform-gpu group">
                  <div className="h-28 bg-saas-yellow/10 rounded mb-3 flex items-center justify-center">
                    <div className="h-10 w-16 bg-saas-yellow/30 rounded-sm"></div>
                  </div>
                  <div className="h-4 w-32 bg-saas-yellow/30 rounded mb-2 mx-auto"></div>
                  <div className="h-3 w-24 bg-saas-yellow/30 rounded mx-auto"></div>
                  <div className="text-xs font-medium text-saas-yellow mt-3 text-center group-hover:text-saas-yellow/100 transition-all">
                    ✅ After — A stunning site powered by AI
                  </div>
                </div>
              </div>

              {/* Enhanced "Build Your Website" card with stronger glow */}
              <div className="bg-gradient-to-tr from-saas-yellow/15 to-saas-yellow/5 backdrop-blur-sm rounded-2xl p-6 border border-saas-yellow/30 shadow-[0_0_50px_rgba(255,215,0,0.2)] hover:shadow-[0_0_60px_rgba(255,215,0,0.25)] transition-all">
                <div className="text-center mb-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-saas-yellow/30 rounded-full mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-saas-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-center text-2xl font-bold">Build Your Website</h3>
                  <p className="text-center text-sm text-muted-foreground mt-2 mb-4">
                    AI-Powered Site Builder — Fully Customizable, No Code
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-black/40 rounded-lg flex items-center justify-center backdrop-blur-md border border-saas-yellow/20 transform transition-all duration-300 hover:scale-110 hover:border-saas-yellow/40 mb-2">
                      <Zap className="h-6 w-6 text-saas-yellow" />
                    </div>
                    <span className="text-xs text-muted-foreground">Speed</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-black/40 rounded-lg flex items-center justify-center backdrop-blur-md border border-saas-yellow/20 transform transition-all duration-300 hover:scale-110 hover:border-saas-yellow/40 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-saas-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="text-xs text-muted-foreground">Growth</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-black/40 rounded-lg flex items-center justify-center backdrop-blur-md border border-saas-yellow/20 transform transition-all duration-300 hover:scale-110 hover:border-saas-yellow/40 mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-saas-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <span className="text-xs text-muted-foreground">Support</span>
                  </div>
                </div>

                {/* Enhanced glow effects */}
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-saas-yellow/15 rounded-full blur-3xl"></div>
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-saas-yellow/15 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
