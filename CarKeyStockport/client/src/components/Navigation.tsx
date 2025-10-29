import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#areas", label: "Areas" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+44161XXXXXX';
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a 
              href="#" 
              className={`font-heading font-bold text-xl md:text-2xl transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
              data-testid="link-nav-logo"
            >
              Lost Car Keys Stockport
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-white/80'
                }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <Button 
              onClick={handleCallClick}
              size="sm"
              className={isScrolled ? '' : 'bg-white text-primary hover:bg-white/90'}
              data-testid="button-nav-call"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-2 text-foreground hover:text-primary font-medium"
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <Button 
              onClick={handleCallClick}
              className="w-full"
              data-testid="button-mobile-call"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
