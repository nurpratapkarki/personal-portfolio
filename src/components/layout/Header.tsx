
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const headerClass = cn(
    'fixed top-0 left-0 w-full z-50 transition-all duration-300',
    {
      'py-6 bg-transparent': scrollPosition < 20,
      'py-3 bg-background/80 backdrop-blur-lg shadow-sm': scrollPosition >= 20
    }
  );
  
  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-display tracking-tight text-gradient">
          John.Dev
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors custom-button"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Hire Me
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
        {
          'opacity-100 visible': isMenuOpen,
          'opacity-0 invisible': !isMenuOpen
        }
      )}>
        <nav className="flex flex-col space-y-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="mt-4 text-xl font-medium px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            onClick={toggleMenu}
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
