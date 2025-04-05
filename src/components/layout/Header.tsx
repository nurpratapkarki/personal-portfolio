
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../theme/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  
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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
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
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="text-2xl font-bold font-display tracking-tight text-gradient relative z-10">
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
        
        {/* Mobile Menu and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          
          <motion.button 
            className="text-foreground relative z-10"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-background/98 backdrop-blur-sm z-40 flex flex-col items-center justify-center md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <motion.nav 
              className="flex flex-col space-y-8 items-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {navLinks.map((link, i) => (
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
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      "text-xl font-medium transition-colors",
                      location.pathname === link.href 
                        ? "text-primary" 
                        : "text-foreground hover:text-primary"
                    )}
                    onClick={toggleMenu}
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
                      delay: 0.4
                    }
                  }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="mt-4 text-xl font-medium px-8 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  onClick={toggleMenu}
                >
                  Hire Me
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
