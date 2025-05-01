import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ParticlesBackground from "@/components/ui/particle-background";
import { cn } from "@/lib/utils";
import { Award, Check, Package, Trophy } from "lucide-react";

const SolutionSection = () => {
  const packages = [
    {
      id: 1,
      name: "Basic Package",
      description: "Perfect for startups looking to establish their online presence quickly.",
      price: "$4,997",
      isPopular: false,
      icon: Package,
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
      icon: Award,
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
      icon: Trophy,
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
    <section id="solutions" className="relative py-20 bg-black overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide">
            Solutions That Deliver Results
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the package that best fits your business needs and goals. All solutions are built with conversion in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group relative perspective-1000">
              <Card
                className={cn(
                  "h-full relative transition-all duration-300 transform-gpu group-hover:translate-y-[-8px] bg-black rounded-xl overflow-hidden",
                  pkg.isPopular
                    ? "border-2 border-saas-yellow shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                    : "border-2 border-zinc-800"
                )}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-saas-yellow text-saas-black font-semibold py-1 px-3 m-4 rounded-full text-xs">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader
                  className={cn(
                    "relative z-10 px-6 pt-8 pb-4",
                    pkg.isPopular ? "bg-gradient-to-br from-zinc-900 to-black" : ""
                  )}
                >
                  <div className="flex items-start justify-between mb-2">
                    <pkg.icon
                      className={cn(
                        "h-8 w-8 mb-2",
                        pkg.isPopular ? "text-saas-yellow" : "text-zinc-400"
                      )}
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-1">{pkg.name}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm">{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <p className="text-3xl font-bold text-white">{pkg.price}</p>
                  </div>
                </CardHeader>

                <CardContent className="px-6 py-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300 text-sm">
                        <Check
                          className={cn(
                            "h-4 w-4 mr-3 mt-0.5 flex-shrink-0",
                            pkg.isPopular ? "text-saas-yellow" : "text-zinc-400"
                          )}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-6 py-6 bg-gradient-to-b from-transparent to-zinc-950/50">
                  <Button
                    asChild
                    className={cn(
                      "w-full py-5 text-base font-semibold rounded-lg transition-colors",
                      pkg.isPopular
                        ? "bg-saas-yellow text-saas-black hover:bg-saas-yellow/90 shadow-lg"
                        : "bg-zinc-900 text-white border border-zinc-700 hover:bg-zinc-800"
                    )}
                  >
                    <a
                      href="https://calendly.com/naveenrlinkedin/build-future-discovery-call"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      Get Started
                    </a>
                  </Button>
                </CardFooter>

                {/* Glow effect on hover */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                    pkg.isPopular
                      ? "bg-gradient-radial from-saas-yellow/10 via-transparent to-transparent"
                      : "bg-gradient-radial from-zinc-700/10 via-transparent to-transparent"
                  )}
                ></div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Not sure which package is right for you? Book a free consultation call to discuss your specific needs.
          </p>
          <Button
            asChild
            className="bg-saas-yellow text-saas-black hover:bg-saas-yellow/90 py-6 px-8 text-lg font-semibold rounded-xl shadow-md"
          >
            <a
              href="https://calendly.com/naveenrlinkedin/build-future-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Book Your Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;