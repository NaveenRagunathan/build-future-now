
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    painPoints: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - in a real application, this would send data to your backend
    setTimeout(() => {
      console.log('Form submitted:', formData);
      
      toast({
        title: "Consultation Request Received!",
        description: "We'll reach out to schedule your call within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        painPoints: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Future?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Book your free consultation call to discuss how we can help your business grow with a modern, conversion-focused website.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="bg-zinc-900 border-gray-700 focus:border-saas-yellow"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    className="bg-zinc-900 border-gray-700 focus:border-saas-yellow"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="bg-zinc-900 border-gray-700 focus:border-saas-yellow"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="painPoints">What challenges are you facing with your current website? (optional)</Label>
                <Textarea
                  id="painPoints"
                  name="painPoints"
                  placeholder="Share your current challenges or goals..."
                  className="bg-zinc-900 border-gray-700 focus:border-saas-yellow min-h-[120px]"
                  value={formData.painPoints}
                  onChange={handleChange}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-saas-yellow text-saas-black hover:bg-saas-yellow/90 py-6 text-lg font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Book Your Free Consultation'}
              </Button>

              <p className="text-center text-gray-500 text-sm">
                By submitting this form, you agree to our <a href="#" className="text-saas-yellow hover:underline">Privacy Policy</a> and <a href="#" className="text-saas-yellow hover:underline">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-2">Or reach us directly</h3>
          <p className="text-gray-400">Email: <a href="mailto:contact@buildfuture.com" className="text-saas-yellow">contact@buildfuture.com</a></p>
          <p className="text-gray-400">Phone: <a href="tel:+15551234567" className="text-saas-yellow">(555) 123-4567</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
