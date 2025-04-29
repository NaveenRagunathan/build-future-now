
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SolutionSection = () => {
  const packages = [
    {
      id: 1,
      name: "Basic Package",
      description: "Perfect for startups looking to establish their online presence quickly.",
      price: "$4,997",
      isPopular: false,
      features: [
        "Responsive Website (Up to 5 Pages)",
        "Modern Design & User Experience",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "Mobile Optimization",
        "1 Month of Support",
      ],
    },
    {
      id: 2,
      name: "Premium Package",
      description: "Our most popular option for growing businesses seeking competitive advantage.",
      price: "$9,997",
      isPopular: true,
      features: [
        "Everything in Basic Package",
        "Custom Website Design (Up to 10 Pages)",
        "AI Chatbot Integration",
        "Advanced SEO Optimization",
        "Google Analytics Setup",
        "Lead Generation Forms",
        "Content Management System",
        "3 Months of Priority Support",
      ],
    },
    {
      id: 3,
      name: "Custom Package",
      description: "Tailored solutions for businesses with specific needs and integrations.",
      price: "Custom Quote",
      isPopular: false,
      features: [
        "Everything in Premium Package",
        "Unlimited Pages",
        "Custom AI Tool Integration",
        "E-commerce Functionality",
        "Custom API Development",
        "Advanced Analytics Dashboard",
        "Marketing Automation",
        "12 Months of VIP Support",
      ],
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Solutions That Deliver Results</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the package that best fits your business needs and goals. All solutions are built with conversion in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`bg-black border ${pkg.isPopular ? 'border-saas-yellow shadow-[0_0_30px_rgba(255,215,0,0.15)]' : 'border-gray-800'} overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-saas-yellow/50`}
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  {pkg.isPopular && (
                    <Badge className="bg-saas-yellow text-saas-black hover:bg-saas-yellow/90">Most Popular</Badge>
                  )}
                </div>
                <p className="text-gray-400 text-sm mt-2">{pkg.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold mb-6">{pkg.price}</p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-saas-yellow mr-2 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full py-6 ${pkg.isPopular ? 'bg-saas-yellow text-saas-black hover:bg-saas-yellow/90' : 'bg-transparent border border-saas-yellow text-saas-yellow hover:bg-saas-yellow/10'}`}
                  onClick={() => window.location.href = '#contact'}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Not sure which package is right for you? Book a free consultation call to discuss your specific needs.
          </p>
          <Button 
            className="bg-saas-yellow text-saas-black hover:bg-saas-yellow/90 py-6 px-8 text-lg"
            onClick={() => window.location.href = '#contact'}
          >
            Book Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
