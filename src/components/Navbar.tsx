import { Zap } from "lucide-react";
import { useEffect, useState } from 'react';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

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

  // Nav items and their section IDs
  const navItems = [
    { label: "Process", id: "process" },
    { label: "Solutions", id: "solutions" },
    { label: "Testimonials", id: "testimonials" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-sm py-3 shadow-md' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo and Zap icon on the same line */}
        <a href="#" className="flex items-center font-poppins font-bold text-2xl">
          <span className="text-white">Build</span>
          <span className="text-saas-yellow">Future</span>
          <Zap className="text-saas-yellow h-7 w-7 ml-3" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="text-white hover:text-saas-yellow transition-colors bg-transparent border-none outline-none cursor-pointer"
              style={{ font: "inherit" }}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://calendly.com/naveenrlinkedin/build-future-discovery-call"
            className="ml-4 bg-saas-yellow text-saas-black font-semibold rounded-lg px-6 py-3 hover:bg-saas-yellow/90 transition-colors"
            style={{ textDecoration: "none", display: "inline-block" }}
            target="_blank" rel="noopener noreferrer"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className=""
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
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 py-4">
          <nav className="flex flex-col items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="text-white hover:text-saas-yellow transition-colors bg-transparent border-none outline-none cursor-pointer"
                style={{ font: "inherit" }}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://calendly.com/naveenrlinkedin/build-future-discovery-call"
              className="bg-saas-yellow text-saas-black font-semibold rounded-lg px-6 py-3 hover:bg-saas-yellow/90 mt-2 transition-colors"
              style={{ textDecoration: "none", display: "inline-block" }}
              target="_blank" rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;