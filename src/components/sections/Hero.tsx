import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      controls.start({
        rotateY: x * 10,
        rotateX: -y * 10,
        scale: 1.05,
        transition: { duration: 0.1, type: 'spring', stiffness: 300 }
      });
    };
    
    const handleMouseLeave = () => {
      controls.start({
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        transition: { duration: 0.3, type: 'spring', stiffness: 200 }
      });
    };
    
    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove);
      imageRef.current?.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      imageRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered, controls]);
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Subtle Background Animations */}
      <motion.div 
        className="absolute inset-0 opacity-20 blur-3xl"
        initial={{ rotate: 0 }}
        animate={{ 
          rotate: [0, 10, -10, 0],
          transition: { 
            duration: 10, 
            repeat: Infinity, 
            repeatType: 'mirror' 
          }
        }}
      />
      
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="max-w-2xl order-2 lg:order-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <span className="inline-block text-sm md:text-base font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary animate-pulse">
              Frontend Developer & UI Designer
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight text-balance">
            Creating{' '}
            <motion.span 
              className="text-gradient"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              beautiful
            </motion.span>{' '}
            digital experiences that{' '}
            <motion.span 
              className="text-gradient"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              matter
            </motion.span>
          </h1>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-md mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: 'spring' }}
          >
            I build responsive, user-friendly websites and applications with meticulous attention to detail and a focus on performance and user experience.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: 'spring' }}
          >
            <motion.a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Image Placeholder with 3D Hover Effect */}
        <motion.div 
          ref={imageRef}
          animate={controls}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="order-1 lg:order-2 flex items-center justify-center"
        >
          <motion.div 
            className="w-full max-w-md aspect-square bg-primary/10 rounded-2xl flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-muted-foreground">Profile Image Placeholder</span>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.a 
        href="#about" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <motion.span 
          className="text-sm mb-2"
          animate={{ 
            opacity: [0.6, 1, 0.6],
            transition: { 
              duration: 2, 
              repeat: Infinity 
            } 
          }}
        >
          Scroll Down
        </motion.span>
        <motion.div
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 1,
              repeat: Infinity,
              repeatType: 'loop'
            }
          }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;