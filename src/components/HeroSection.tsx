
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, Zap, Star } from "lucide-react";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentPainPoint, setCurrentPainPoint] = useState(0);
  
  const painPoints = [
    "Tired of clunky website builders?",
    "No time or team to launch?",
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
    <section className="relative min-h-screen flex items-center overflow-hidden hero-pattern">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 bg-transparent"
        style={{ pointerEvents: 'none' }}
      />
      
      <div className="container mx-auto px-4 md:px-6 z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-8 fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              From Idea to Impact — <span className="gradient-text">Build Your Future</span>, Today
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              You've got the vision. We've got the AI tools to launch your modern site in hours, not months.
            </p>
            
            <div className="flex items-center space-x-2 bg-muted/50 backdrop-blur-sm rounded-lg px-4 py-2 animate-pulse-subtle">
              <span className="text-saas-yellow">⚡</span>
              <p className="text-sm font-medium transition-all duration-500 ease-in-out">
                {painPoints[currentPainPoint]}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Button 
                className="bg-saas-yellow text-saas-black text-lg py-6 px-8 hover:bg-saas-yellow/90 flex items-center" 
                onClick={() => window.location.href = '#contact'}
              >
                Book a Free Strategy Call <ArrowRight className="ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                className="text-lg py-6 px-8 border-saas-yellow text-foreground hover:bg-saas-yellow/10"
                onClick={() => window.location.href = '#solutions'}
              >
                See Example Sites
              </Button>
              
              <div className="flex items-center mt-2 sm:mt-0 text-sm">
                <span className="text-saas-yellow mr-2">⭐</span>
                <span className="text-muted-foreground">Trusted by 500+ founders</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 text-saas-yellow mr-2" />
                <span>Launch in days</span>
              </div>
              <div className="flex items-center text-sm">
                <Star className="h-4 w-4 text-saas-yellow mr-2" />
                <span>Premium design</span>
              </div>
              <div className="flex items-center text-sm">
                <Zap className="h-4 w-4 text-saas-yellow mr-2" />
                <span>AI-powered</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative animate-float">
              {/* Before/After Comparison */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-muted">
                  <div className="h-4 w-16 bg-muted/70 rounded mb-2"></div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-muted/70 rounded"></div>
                    <div className="ml-2">
                      <div className="h-3 w-20 bg-muted/70 rounded"></div>
                      <div className="h-2 w-16 bg-muted/70 rounded mt-1"></div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2 text-center">Before</div>
                </div>
                
                <div className="bg-gradient-to-tr from-saas-yellow/10 to-saas-yellow/5 backdrop-blur-sm rounded-lg p-3 border border-saas-yellow/20">
                  <div className="h-4 w-16 bg-saas-yellow/30 rounded mb-2"></div>
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-saas-yellow/30 rounded"></div>
                    <div className="ml-2">
                      <div className="h-3 w-20 bg-saas-yellow/30 rounded"></div>
                      <div className="h-2 w-16 bg-saas-yellow/30 rounded mt-1"></div>
                    </div>
                  </div>
                  <div className="text-xs text-saas-yellow mt-2 text-center">After</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-tr from-saas-yellow/10 to-saas-yellow/5 backdrop-blur-sm rounded-2xl p-6 border border-saas-yellow/20 shadow-[0_0_40px_rgba(255,215,0,0.15)] transform transition-all duration-500 hover:scale-105">
                <Card className="w-full bg-black/40 rounded-lg backdrop-blur-md p-4 border-saas-yellow/20">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 bg-saas-yellow/30 rounded-full mb-4 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-saas-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-center text-lg font-medium">Build Your Website</p>
                  
                  <div className="flex justify-between mt-6">
                    <div className="w-16 h-16 bg-black/40 rounded-lg flex items-center justify-center backdrop-blur-md border border-saas-yellow/10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-saas-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="absolute mt-20 text-xs text-muted-foreground">Speed</span>
                    </div>
                    
                    <div className="w-16 h-16 bg-black/40 rounded-lg flex items-center justify-center backdrop-blur-md border border-saas-yellow/10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-saas-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="absolute mt-20 text-xs text-muted-foreground">Growth</span>
                    </div>
                    
                    <div className="w-16 h-16 bg-black/40 rounded-lg flex items-center justify-center backdrop-blur-md border border-saas-yellow/10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-saas-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span className="absolute mt-20 text-xs text-muted-foreground">Support</span>
                    </div>
                  </div>
                </Card>
                
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-saas-yellow/10 rounded-full blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-saas-yellow/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
