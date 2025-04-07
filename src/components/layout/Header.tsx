
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../theme/ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      
      // Update position and last scroll
      setScrollPosition(currentScrollY);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Improved header class for better mobile experience
  const headerClass = cn(
    'fixed w-full z-50 transition-all duration-300',
    {
      'py-4 sm:py-6 bg-transparent': scrollPosition < 20,
      'py-2 sm:py-3 bg-background/80 backdrop-blur-lg shadow-sm': scrollPosition >= 20,
      'top-0': isScrollingUp || scrollPosition < 20 || isMenuOpen,
      // Instead of hiding completely, we now slide it partly out of view
      'transform -translate-y-16 md:translate-y-0': !isScrollingUp && scrollPosition >= 20 && !isMenuOpen && isMobile,
      'left-0': true
    }
  );

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };
  
  return (
    <motion.header 
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={headerClass}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-20"
        >
          <Link to="/" className="text-lg sm:text-xl md:text-2xl font-bold font-display tracking-tight text-gradient">
            Nur Pratap Karki
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                variants={navItemVariants}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors custom-button",
                    location.pathname === link.href 
                      ? "text-primary" 
                      : "text-foreground/80 hover:text-primary"
                  )}
                  aria-current={location.pathname === link.href ? "page" : undefined}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          
          <motion.div 
            variants={navItemVariants}
            custom={4}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/contact"
              className="ml-2 text-sm font-medium px-5 py-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Hire Me
            </Link>
          </motion.div>
          
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          
          <motion.button 
            className="text-foreground relative z-20 p-2" // Added padding for larger hit area
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      
      {/* New Mobile Navigation - Bottom Bar */}
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div 
            className="fixed inset-0 z-10 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-background/90 dark:bg-background/95 backdrop-blur-md"></div>
            
            <div className="relative h-full flex flex-col items-center justify-center px-6">
              <motion.nav 
                className="flex flex-col space-y-6 sm:space-y-8 items-center w-full max-w-sm"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08
                    }
                  }
                }}
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          type: 'spring',
                          stiffness: 300,
                          damping: 24
                        }
                      }
                    }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-center"
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "text-lg sm:text-xl font-medium transition-colors block w-full py-2",
                        location.pathname === link.href 
                          ? "text-primary" 
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        type: 'spring',
                        stiffness: 300,
                        damping: 24,
                        delay: 0.3
                      }
                    }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <Link
                    to="/contact"
                    className="mt-4 text-lg font-medium px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors block w-full text-center"
                  >
                    Hire Me
                  </Link>
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        ) : (
          // Bottom navigation bar for quick access when menu is closed
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg border-t border-border/40 py-2 px-4 md:hidden z-40"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-around items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "flex flex-col items-center p-1 transition-colors",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  )}
                >
                  <span className="text-xs font-medium mt-1">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
