import { Code, Layout, Sparkles, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRef, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Common animation variants
const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.1 + (i * 0.1)
    }
  })
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Skill data
const skills = [
  { name: 'React.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'CSS/SCSS', level: 92 },
  { name: 'Tailwind CSS', level: 98 },
  { name: 'Next.js', level: 85 },
  { name: 'UI/UX Design', level: 80 },
  { name: 'Redux', level: 88 },
  { name: 'Jest/Testing', level: 75 }
];

// Tech tags
const techTags = [
  'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 
  'Redux', 'Jest', 'Figma', 'UI/UX', 'Responsive Design'
];

// Service data
const services = [
  {
    icon: <Layout size={24} />,
    title: "Web Development",
    description: "I build responsive websites that provide optimal user experiences across all devices."
  },
  {
    icon: <Code size={24} />,
    title: "Frontend Development",
    description: "I create responsive, interactive interfaces using modern JavaScript frameworks."
  },
  {
    icon: <Sparkles size={24} />,
    title: "UI/UX Design",
    description: "I design intuitive interfaces that create meaningful and relevant experiences."
  },
  {
    icon: <Zap size={24} />,
    title: "Performance Optimization",
    description: "I optimize web applications for speed and efficiency across all platforms."
  }
];

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

const SkillBar = ({ name, level, index }: SkillBarProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const barVariants: Variants = {
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3 + (index * 0.1)
      }
    }
  };

  return (
    <div className="mb-4" ref={ref}>
      <motion.div 
        className="flex justify-between mb-1"
        initial="hidden"
        animate={controls}
        variants={fadeInUpVariants}
        custom={index}
      >
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium text-muted-foreground">{level}%</span>
      </motion.div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary"
          initial="hidden"
          animate={controls}
          variants={barVariants}
        />
      </div>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, index }: ServiceCardProps) => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <motion.div 
      ref={ref}
      className="bg-card p-6 rounded-xl border border-border shadow-sm cursor-pointer service-card"
      variants={fadeInUpVariants}
      custom={index}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.2 }
      }}
    >
      <motion.div 
        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 service-icon"
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          backgroundColor: "var(--primary)",
          color: "var(--primary-foreground)"
        }}
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const About = () => {
  // Use the correct viewport once approach
  const inViewOptions = { 
    triggerOnce: true,
    threshold: 0.1
  };
  
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="section-title"
            variants={fadeInUpVariants}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            variants={fadeInUpVariants}
            custom={1}
          >
            With over 5 years of experience, I specialize in creating elegant, efficient, and user-centered digital experiences.
          </motion.p>
        </motion.div>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* My Story Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl font-bold mb-4"
              variants={fadeInUpVariants}
            >
              My Story
            </motion.h3>
            <motion.p 
              className="text-muted-foreground mb-4"
              variants={fadeInUpVariants}
              custom={1}
            >
              I'm a passionate frontend developer with a keen eye for design and a commitment to creating intuitive user interfaces that deliver exceptional experiences. My journey began with a fascination for the web and how it connects people globally.
            </motion.p>
            <motion.p 
              className="text-muted-foreground mb-6"
              variants={fadeInUpVariants}
              custom={2}
            >
              Today, I combine my technical expertise with creative problem-solving to build responsive, accessible, and performant web applications that help businesses achieve their goals.
            </motion.p>
            
            {/* Tech Tags */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-8"
              variants={containerVariants}
            >
              {techTags.map((tag, index) => (
                <motion.span 
                  key={tag} 
                  className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  variants={fadeInUpVariants}
                  custom={index}
                  whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Resume Button */}
            <motion.a 
              href="/resume.pdf" 
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              download
              variants={fadeInUpVariants}
              custom={3}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
          
          {/* Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl font-bold mb-6"
              variants={fadeInUpVariants}
            >
              My Skills
            </motion.h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Services Section */}
        <motion.div 
          className="mt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-xl font-bold mb-8 text-center"
            variants={fadeInUpVariants}
          >
            Services I Offer
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;