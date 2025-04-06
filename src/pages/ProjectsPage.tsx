
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Projects from '../components/sections/Projects';
import { Github, CheckCircle } from 'lucide-react';

const ProjectsPage = () => {
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

  const processSteps = [
    {
      title: "Discovery & Research",
      description: "Understanding project requirements, researching the market, and analyzing user needs",
      icon: <motion.div 
              whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"
            >
              1
            </motion.div>
    },
    {
      title: "Design & Prototyping",
      description: "Creating wireframes, designing UI components, and building interactive prototypes",
      icon: <motion.div 
              whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"
            >
              2
            </motion.div>
    },
    {
      title: "Development",
      description: "Writing clean, maintainable code, implementing responsive design, and ensuring accessibility",
      icon: <motion.div 
              whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"
            >
              3
            </motion.div>
    },
    {
      title: "Testing & Optimization",
      description: "Conducting thorough testing, optimizing performance, and refining the user experience",
      icon: <motion.div 
              whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary"
            >
              4
            </motion.div>
    }
  ];

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
            <Projects />
          </motion.div>
          
          <motion.section 
            className="mt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">My Development Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                I follow a structured approach to ensure every project meets the highest standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          
          <motion.section
            className="mt-20 bg-secondary/20 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-border/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Tools & Technologies</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My expertise spans across a wide range of modern development tools
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Node.js', 'GraphQL', 'REST API', 'Jest', 'React Testing Library', 'Figma'].map((tech, index) => (
                <motion.div 
                  key={tech}
                  className="flex items-center p-3 bg-card/80 backdrop-blur-sm rounded-lg border border-border/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + (index * 0.05), duration: 0.4 }}
                  whileHover={{ scale: 1.05, backgroundColor: "var(--primary-foreground)" }}
                >
                  <CheckCircle size={16} className="text-primary mr-2" />
                  <span>{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
