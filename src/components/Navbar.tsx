import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#services', label: 'Services' },
    { href: '#why', label: 'Why' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-border shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110">
              <span className="text-foreground font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-semibold text-foreground">PhoenixCloud</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get early access
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 glass border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get early access
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
