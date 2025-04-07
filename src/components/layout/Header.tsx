import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Home, FolderOpen, Pencil, Mail, User } from 'lucide-react';
import { ThemeToggle } from '../theme/ThemeToggle';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Navigation links with icons
  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Blog', href: '/blog', icon: Pencil },
    { name: 'Contact', href: '/contact', icon: Mail }
  ];
  
  // Handle scroll events with reduced threshold and simplified logic
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);
  
  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  
  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);
  
  // Simplified header animation - reduced to just a subtle fade
  const headerVariants = {
    initial: { opacity: 1 },
    animate: { opacity: 1 }
  };
  
  // Mobile menu animation
  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      height: "100vh",
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
    closed: { 
      opacity: 0,
      height: 0,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  // Enhanced glassmorphic effect
  const headerClass = cn(
    "fixed w-full transition-all duration-300 z-50 py-4",
    scrolled 
      ? "bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" 
      : "bg-transparent dark:bg-transparent backdrop-blur-0"
  );
  
  // Always keep mobile menu with glassmorphic effect regardless of scroll position
  const mobileMenuClass = "fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md md:hidden overflow-hidden";
  
  const logoClass = cn(
    "text-xl font-bold tracking-tight",
    "bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-indigo-300 dark:to-violet-300 bg-clip-text text-transparent"
  );
  
  // Improved link underline animation - faster, smoother
  const linkClass = (isActive) => cn(
    "relative px-1 py-2 text-sm font-medium transition-all duration-200 inline-flex items-center",
    "before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:rounded-full before:origin-left before:transition-transform before:duration-300",
    "hover:before:scale-x-100 hover:text-black dark:hover:text-white",
    isActive 
      ? "text-black dark:text-white before:bg-indigo-500 before:scale-x-100" 
      : "text-gray-700 dark:text-gray-300 before:bg-indigo-500/70 before:scale-x-0"
  );
  
  const Logo = () => (
    <div>
      <Link to="/" className={logoClass}>
        Nur Pra<span className="text-black dark:text-white">tap Karki</span>
      </Link>
    </div>
  );
  
  const DesktopNav = () => (
    <nav className="hidden md:flex items-center space-x-6">
      {navLinks.map((link, i) => (
        <div key={link.name}>
          <Link
            to={link.href}
            className={linkClass(location.pathname === link.href)}
          >
            {link.name}
          </Link>
        </div>
      ))}
      
      <div>
        <Link
          to="/contact"
          className="ml-2 px-4 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white flex items-center gap-1 font-medium text-sm transition-all duration-200"
        >
          Get Started <ChevronRight size={16} />
        </Link>
      </div>
      
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
  
  const MobileMenuButton = () => (
    <div className="md:hidden flex items-center gap-4">
      <ThemeToggle />
      
      <button
        className="relative z-50 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
  
  const MobileNav = () => (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileMenuVariants}
          className={mobileMenuClass}
        >
          <div className="flex flex-col h-full pt-20 pb-6 px-6">
            <nav className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <div key={link.name}>
                    <Link
                      to={link.href}
                      className={cn(
                        "flex items-center text-xl font-medium py-2",
                        location.pathname === link.href
                          ? "text-indigo-500 dark:text-indigo-400"
                          : "text-gray-800 dark:text-gray-200"
                      )}
                    >
                      <Icon className="mr-3" size={20} />
                      {link.name}
                    </Link>
                  </div>
                );
              })}
              
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-colors"
                >
                  Get Started <ChevronRight size={18} />
                </Link>
              </div>
            </nav>
            
            <div className="mt-auto">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Nur Pratap Karki
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
  
  // Mobile footer navigation
  const MobileFooterNav = () => (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-800">
      <div className="flex justify-around items-center py-2">
        {navLinks.map(link => {
          const Icon = link.icon;
          const isActive = location.pathname === link.href;
          
          return (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "flex flex-col items-center py-1 px-3",
                isActive 
                  ? "text-indigo-500 dark:text-indigo-400" 
                  : "text-gray-600 dark:text-gray-400"
              )}
            >
              <Icon size={18} />
              <span className="text-xs mt-1">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
  
  return (
    <>
      <motion.header
        variants={headerVariants}
        className={headerClass}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Logo />
          <DesktopNav />
          <MobileMenuButton />
        </div>
      </motion.header>
      
      <MobileNav />
      <MobileFooterNav />
    </>
  );
};

export default Header;