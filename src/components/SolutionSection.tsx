import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide">
            Solutions That Deliver Results
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the package that best fits your business needs and goals. All solutions are built with conversion in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={
                `relative bg-black rounded-[30px] border-2 overflow-hidden transition-transform duration-300 hover:scale-[1.03] ` +
                (pkg.isPopular
                  ? 'border-saas-yellow shadow-[0_0_30px_rgba(255,215,0,0.4)]'
                  : 'border-zinc-700 shadow-md')
              }
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 rounded-[30px] ring-2 ring-saas-yellow/30 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-extrabold text-white tracking-wide">{pkg.name}</h3>
                  {pkg.isPopular && (
                    <Badge className="bg-saas-yellow text-saas-black shadow-lg px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </Badge>
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-8">{pkg.description}</p>
                <p className="text-4xl font-bold text-white mb-6">{pkg.price}</p>

                <ul className="space-y-4 text-sm flex-grow">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-saas-yellow mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    `mt-8 py-4 text-lg font-semibold rounded-xl w-full transition-colors ` +
                    (pkg.isPopular
                      ? 'bg-saas-yellow text-saas-black hover:bg-saas-yellow/90 shadow-inner'
                      : 'bg-zinc-900 text-saas-yellow border border-saas-yellow hover:bg-saas-yellow/10')
                  }
                  onClick={() => window.location.href = '#contact'}
                >
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Not sure which package is right for you? Book a free consultation call to discuss your specific needs.
          </p>
          <Button
            className="bg-saas-yellow text-saas-black hover:bg-saas-yellow/90 py-6 px-8 text-lg font-semibold rounded-xl shadow-md"
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
