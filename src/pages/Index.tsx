
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import { useTheme } from '../components/theme/ThemeProvider';

const Index = () => {
  const { theme } = useTheme();
  
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col theme-transition"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Header />
      <main className="flex-grow">
        <Hero />
        <section className={`${theme === 'dark' ? 'glassmorphic-container' : ''}`}>
          <About />
        </section>
        <section className={`${theme === 'dark' ? 'glassmorphic-container' : ''}`}>
          <Projects />
        </section>
        <section className={`${theme === 'dark' ? 'glassmorphic-container' : ''}`}>
          <Contact />
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
