
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const Index = () => {
  const controls = {
    about: useAnimation(),
    projects: useAnimation(),
    contact: useAnimation()
  };
  
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [contactRef, contactInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (aboutInView) controls.about.start('visible');
    if (projectsInView) controls.projects.start('visible');
    if (contactInView) controls.contact.start('visible');
  }, [aboutInView, projectsInView, contactInView, controls]);
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={controls.about}
          variants={sectionVariants}
        >
          <About />
        </motion.div>
        
        <motion.div
          ref={projectsRef}
          initial="hidden"
          animate={controls.projects}
          variants={sectionVariants}
        >
          <Projects />
        </motion.div>
        
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={controls.contact}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
