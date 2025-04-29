
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const steps = [
    {
      id: 1,
      title: "Discovery",
      description: "We take time to understand your business, goals, target audience, and vision for your website.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Understanding Pain",
      description: "We identify specific challenges your business faces and how our website solution will address them.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Initial Plan",
      description: "We create a detailed proposal with design concepts, structure, and functionality recommendations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Design",
      description: "Our designers create stunning, conversion-focused mockups based on your approved plan.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Development",
      description: "Our engineers build your website with clean code, integrating all desired functionality and AI tools.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Rollout",
      description: "We launch your website, ensuring everything works perfectly and meets quality standards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Support",
      description: "We provide ongoing support and maintenance to ensure your website continues to perform optimally.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  // Handle scroll-based step activation
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Calculate which step should be active based on scroll position
      if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        const scrollPercentage = (scrollPosition - sectionTop) / sectionHeight;
        const stepIndex = Math.min(
          steps.length - 1,
          Math.floor(scrollPercentage * steps.length)
        );
        setActiveStep(stepIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section 
      id="process" 
      ref={sectionRef}
      className="py-32 relative bg-gradient-to-b from-black via-black to-gray-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-saas-yellow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 50 + 10}px`,
                height: `${Math.random() * 50 + 10}px`,
                opacity: Math.random() * 0.5,
                animationDuration: `${Math.random() * 50 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 bg-saas-yellow/10 rounded-full text-saas-yellow text-sm font-medium mb-4">
              OUR METHODOLOGY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Premium Development Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              We've refined our approach to deliver exceptional results with a seamless experience for your business.
            </p>
          </motion.div>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Vertical connection line with animated progress */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800 transform -translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 right-0 bg-saas-yellow rounded-full"
              style={{ height: `${(activeStep + 1) * 100 / steps.length}%` }}
              initial={{ height: 0 }}
              animate={{ height: `${(activeStep + 1) * 100 / steps.length}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>

          {/* Steps */}
          <motion.div 
            className="space-y-24 md:space-y-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                variants={itemVariants}
              >
                {/* Step card */}
                <div className="lg:w-1/2 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="w-full"
                  >
                    <Card 
                      className={`w-full md:max-w-md backdrop-blur-md border overflow-hidden transition-all duration-500 
                        ${activeStep === index 
                          ? 'bg-gradient-to-br from-black/80 to-gray-900/80 border-saas-yellow shadow-[0_0_30px_rgba(255,215,0,0.15)]' 
                          : 'bg-black/40 border-saas-yellow/20'}`}
                    >
                      <CardContent className="p-8">
                        <motion.div 
                          className="text-saas-yellow mb-6 flex justify-center"
                          animate={activeStep === index ? {
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0, -5, 0],
                            transition: { duration: 0.5 }
                          } : {}}
                        >
                          {step.icon}
                        </motion.div>
                        <h3 className="text-2xl font-semibold mb-4 text-center">
                          <span className="inline-block bg-saas-yellow/20 text-saas-yellow rounded-full w-8 h-8 text-center leading-8 mr-2">
                            {step.id}
                          </span> {step.title}
                        </h3>
                        <p className="text-gray-400 text-center">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Center circle */}
                <div className="hidden lg:flex w-16 h-16 rounded-full bg-gradient-to-r from-saas-yellow to-amber-500 text-black items-center justify-center font-bold z-10 border-4 border-black shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                  {step.id}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 mb-6">Ready to start your journey with us?</p>
          <button className="bg-saas-yellow hover:bg-saas-yellow/90 text-black font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105">
            Book a Discovery Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
