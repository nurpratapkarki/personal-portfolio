
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDuration: number;
}

export const StarryBackground = () => {
  const { theme } = useTheme();
  const [stars, setStars] = useState<Star[]>([]);
  
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
          });
        }
        
        setStars(newStars);
      };
      
      generateStars();
      
      window.addEventListener('resize', generateStars);
      return () => {
        window.removeEventListener('resize', generateStars);
      };
    } else {
      setStars([]);
    }
  }, [theme]);
  
  if (theme !== 'dark') return null;
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
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
      ))}
    </div>
  );
};
