
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import About from '../components/sections/About';

const AboutPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
          >
            <About />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-24 bg-secondary/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-border/50"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">My Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-3">Education</h3>
                <ul className="space-y-4">
                  <li className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <p className="text-sm text-primary">2015 - 2019</p>
                    <h4 className="font-medium mt-1">Bachelor of Computer Science</h4>
                    <p className="text-muted-foreground">University of Technology</p>
                  </li>
                  <li className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <p className="text-sm text-primary">2019 - 2021</p>
                    <h4 className="font-medium mt-1">Master's in UI/UX Design</h4>
                    <p className="text-muted-foreground">Design Institute</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Experience</h3>
                <ul className="space-y-4">
                  <li className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <p className="text-sm text-primary">2019 - 2021</p>
                    <h4 className="font-medium mt-1">Frontend Developer</h4>
                    <p className="text-muted-foreground">Tech Solutions Inc.</p>
                  </li>
                  <li className="bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <p className="text-sm text-primary">2021 - Present</p>
                    <h4 className="font-medium mt-1">Senior UI Developer</h4>
                    <p className="text-muted-foreground">InnovateUI</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
