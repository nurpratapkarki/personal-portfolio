import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import image from '../../images/profile.png'

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };
  
  const imageVariants = {
    initial: { scale: 0.8, opacity: 0, rotateY: 0, rotateX: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.6
      }
    },
    hover: {
      scale: 1.05,
      rotateY: 10,
      rotateX: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };
  
  const backgroundCircle = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: [0, 0.2, 0.1],
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Background Animation Elements */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 mix-blend-multiply filter blur-3xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ 
          opacity: 0.4, 
          x: 0,
          y: [0, 20, 0],
          transition: { 
            x: { duration: 1 },
            y: { 
              duration: 6, 
              repeat: Infinity, 
              repeatType: 'reverse' 
            }
          }
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-primary/20 mix-blend-multiply filter blur-3xl"
        initial={{ opacity: 0, x: 100 }}
        animate={{ 
          opacity: 0.4, 
          x: 0,
          y: [0, -20, 0],
          transition: { 
            x: { duration: 1 },
            y: { 
              duration: 7, 
              repeat: Infinity, 
              repeatType: 'reverse' 
            }
          }
        }}
      />
      
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="max-w-2xl order-2 lg:order-1"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            className="inline-block mb-4"
            variants={item}
          >
            <motion.span 
              className="inline-block text-sm md:text-base font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary"
              animate={{ 
                scale: [1, 1.05, 1],
                transition: { 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: "easeInOut" 
                }
              }}
            >
              Full Stack Developer 
            </motion.span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight text-balance"
            variants={item}
          >
            Creating{' '}
            <motion.span 
              className="text-gradient"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ 
                opacity: 1, 
                filter: "blur(0px)",
                transition: { delay: 0.5, duration: 0.8 }
              }}
            >
              beautiful
            </motion.span>{' '}
            digital experiences that{' '}
            <motion.span 
              className="text-gradient"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ 
                opacity: 1, 
                filter: "blur(0px)",
                transition: { delay: 0.7, duration: 0.8 }
              }}
            >
              matter
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-md mt-6"
            variants={item}
          >
            I build responsive, user-friendly websites and applications with meticulous attention to detail and a focus on performance and user experience.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8"
            variants={item}
          >
            <motion.a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Interactive Image with 3D Effect */}
        <div className="order-1 lg:order-2 flex items-center justify-center relative">
          <motion.div
            className="absolute w-[140%] h-[140%] rounded-full bg-primary/5 -z-10"
            variants={backgroundCircle}
            initial="initial"
            animate="animate"
          />
          
          <motion.div 
            ref={imageRef}
            className="w-full max-w-md relative"
            variants={imageVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{ perspective: 1000 }}
          >
            <motion.div 
              className="w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/30 p-1"
              whileHover={{ 
                boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.2)"
              }}
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-primary/5 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: 0.8, duration: 0.5 }
                  }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                >
                  {/* Fixed image rendering */}
                  <img 
                    src={image} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground"
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                x: 0,
                transition: { delay: 0.9, type: "spring" }
              }}
              whileHover={{ 
                scale: 1.2,
                rotate: 5,
                transition: { duration: 0.2 }
              }}
            >
              <span className="text-xl font-bold">✦</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-white flex items-center justify-center"
              initial={{ opacity: 0, y: -20, x: -20 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                x: 0,
                transition: { delay: 1, type: "spring" }
              }}
              whileHover={{ 
                scale: 1.2,
                rotate: -5,
                transition: { duration: 0.2 }
              }}
            >
              <span className="text-lg text-primary">★</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.a 
        href="#about" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            delay: 1.2,
            duration: 0.8,
            type: "spring"
          }
        }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.span 
          className="text-sm mb-2"
          animate={{ 
            opacity: [0.6, 1, 0.6],
            y: [0, -3, 0],
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
            y: [0, 5, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              ease: "easeInOut"
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