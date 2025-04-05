import { useTheme } from './ThemeProvider';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDuration: number;
  speed: number;
}

export const StarryBackground = () => {
  const { theme } = useTheme();
  const [stars, setStars] = useState<Star[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    if (theme === 'dark') {
      const generateStars = () => {
        const newStars: Star[] = [];
        const starCount = Math.floor(window.innerWidth * window.innerHeight / 15000);
        
        for (let i = 0; i < starCount; i++) {
          newStars.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.3,
            animationDuration: Math.random() * 3 + 2,
            speed: Math.random() * 0.04 + 0.1,
          });
        }
        
        setStars(newStars);
      };
      
      generateStars();
      
      // Add scroll listener
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
      
      window.addEventListener('resize', generateStars);
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('resize', generateStars);
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setStars([]);
    }
  }, [theme]);
  
  if (theme !== 'dark') return null;
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => {
        // Calculate position based on scroll
        const yOffset = scrollPosition * star.speed;
        const yPosition = (star.y + yOffset) % 100;
        
        return (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${yPosition}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 1.5, star.opacity],
            }}
            transition={{
              duration: star.animationDuration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};