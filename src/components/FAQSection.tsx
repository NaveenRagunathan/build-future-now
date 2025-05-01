
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it typically take to build a website?",
      answer: "Our standard timeline is 4-6 weeks from the initial discovery call to launch. Complex projects with custom AI integrations may take 8-10 weeks. We provide a specific timeline during our consultation based on your requirements.",
    },
    {
      question: "What makes your websites different from others?",
      answer: "We build conversion-focused websites with integrated AI tools specifically designed for startups and SaaS businesses. Our designs don't just look great—they strategically guide visitors toward taking action and becoming customers.",
    },
    {
      question: "Do you offer maintenance and support after launch?",
      answer: "Yes, all our packages include support periods ranging from 15 - 30 Days. After that, we offer flexible maintenance plans to ensure your website remains secure, up-to-date, and optimized for performance.",
    },
    {
      question: "Can you integrate my website with other tools we're using?",
      answer: "Absolutely. We have experience integrating websites with CRMs, marketing automation platforms, payment processors, and custom APIs. During our discovery phase, we'll discuss all integrations needed for your business.",
    },
    {
      question: "Do I need to provide content for my website?",
      answer: "While providing your own content is an option, we offer professional copywriting services as an add-on to all packages. Our copywriters specialize in creating compelling, conversion-focused content for tech and SaaS businesses.",
    },
    {
      question: "What if I need changes after the website is complete?",
      answer: "Minor changes and adjustments are included during your support period. For significant changes or new features after launch, we provide competitive hourly rates or can discuss a new project scope.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes, all our websites are fully responsive and tested across a wide range of devices, including smartphones, tablets, and desktops of various sizes. Mobile optimization is a standard part of our development process.",
    },
    {
      question: "How do the AI-powered tools work with my website?",
      answer: "Our AI integrations are customized based on your specific needs. Common implementations include intelligent chatbots for customer service, personalized content recommendations, automated lead qualification, and data-driven insights dashboards.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get answers to common questions about our services, process, and what makes us different.
          </p>
        </div>


        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-gray-200 hover:text-saas-yellow hover:no-underline data-[state=open]:text-saas-yellow">
                  <span className="font-medium text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Have another question not answered here?
            </p>
            <div className="inline-flex items-center gap-2 text-saas-yellow hover:text-saas-yellow/80 transition-colors cursor-pointer group">
              <span className="font-medium">Chat with our AI assistant</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default FAQSection;
