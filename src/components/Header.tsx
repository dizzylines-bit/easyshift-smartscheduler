import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 80; // Account for fixed header
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold text-foreground">EasyShift</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('advantages')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Why EasyShift
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('demo')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Schedule Demo
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </button>
            <Button variant="feature">
              Get Started Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-4 pt-4 pb-6">
            <nav className="space-y-4">
              <button 
                onClick={() => {
                  scrollToSection('features');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => {
                  scrollToSection('advantages');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Why EasyShift
              </button>
              <button 
                onClick={() => {
                  scrollToSection('pricing');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => {
                  scrollToSection('demo');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Schedule Demo
              </button>
              <div className="pt-4 space-y-3">
                <button className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
                  Sign In
                </button>
                <Button variant="feature" className="w-full">
                  Get Started Free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;