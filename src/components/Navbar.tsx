
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm py-3 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <a href="#" className="text-saas-white font-poppins font-bold text-2xl">
          Build<span className="text-saas-yellow">Future</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#process" className="text-saas-white hover:text-saas-yellow transition-colors">Process</a>
          <a href="#solutions" className="text-saas-white hover:text-saas-yellow transition-colors">Solutions</a>
          <a href="#testimonials" className="text-saas-white hover:text-saas-yellow transition-colors">Testimonials</a>
          <a href="#faq" className="text-saas-white hover:text-saas-yellow transition-colors">FAQ</a>
          <Button className="bg-saas-yellow text-saas-black hover:bg-saas-yellow/90 ml-4" onClick={() => window.location.href = '#contact'}>
            Book a Call
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-saas-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {!mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 py-4">
          <nav className="flex flex-col items-center gap-4">
            <a 
              href="#process" 
              className="text-saas-white hover:text-saas-yellow transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a 
              href="#solutions" 
              className="text-saas-white hover:text-saas-yellow transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a 
              href="#testimonials" 
              className="text-saas-white hover:text-saas-yellow transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="text-saas-white hover:text-saas-yellow transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              className="bg-saas-yellow text-saas-black hover:bg-saas-yellow/90 mt-2" 
              onClick={() => {
                window.location.href = '#contact';
                setMobileMenuOpen(false);
              }}
            >
              Book a Call
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
