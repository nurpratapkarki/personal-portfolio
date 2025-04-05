import { useTheme } from './ThemeProvider';
import { useEffect, useRef, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  baseSize: number;
  opacity: number;
  speed: number;
  angle: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  angle: number;
}

export const StarryBackground = () => {
  const { theme } = useTheme();
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollYRef = useRef(0);
  const prevScrollYRef = useRef(0);

  useEffect(() => {
    if (theme !== 'dark') return;

    const generateStars = () => {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 8000); // More stars
      const newStars: Star[] = [];

      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          baseSize: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          speed: Math.random() * 0.04 + 0.01, // Range: 0.01 to 0.05
          angle: Math.random() * 360, // Random angle for movement direction
        });
      }

      setStars(newStars);
    };

    generateStars();

    const createShootingStar = () => {
      const id = Date.now();
      setShootingStars((prev) => [
        ...prev,
        {
          id,
          startX: Math.random() * 100,
          startY: Math.random() * 40,
          angle: Math.random() * 20 - 10,
        },
      ]);

      setTimeout(() => {
        setShootingStars((prev) => prev.filter((s) => s.id !== id));
      }, 1000);
    };

    const shootingInterval = setInterval(() => {
      if (Math.random() < 0.3) createShootingStar();
    }, 2000);

    // Track scroll position
    const handleScroll = () => {
      prevScrollYRef.current = scrollYRef.current;
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    const animate = () => {
      const time = Date.now() / 500;
      const scrollDelta = scrollYRef.current - prevScrollYRef.current;
      const scrollFactor = scrollDelta * 0.01; // Adjust this to control scroll sensitivity

      setStars((prevStars) =>
        prevStars.map((star) => {
          // Calculate movement based on star's angle and speed
          const radians = (star.angle * Math.PI) / 180;
          let newX = star.x + Math.cos(radians) * star.speed;
          let newY = star.y + Math.sin(radians) * star.speed;
          
          // Add scroll-based movement (stars move in opposite direction of scroll)
          newY -= scrollFactor;

          // Wrap around edges
          if (newX > 100) newX = 0;
          if (newX < 0) newX = 100;
          if (newY > 100) newY = 0;
          if (newY < 0) newY = 100;

          return {
            ...star,
            x: newX,
            y: newY,
            opacity: 0.2 + (0.6 * Math.abs(Math.sin(time + star.id))),
          };
        })
      );
      
      // Reset previous scroll position to current to avoid continuous movement when not scrolling
      prevScrollYRef.current = scrollYRef.current;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', generateStars);

    return () => {
      window.removeEventListener('resize', generateStars);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(shootingInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [theme]);

  if (theme !== 'dark') return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full transition-opacity"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.baseSize}px`,
            height: `${star.baseSize}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.baseSize * 2.5}px rgba(255,255,255,${star.opacity})`,
            transition: 'opacity 0.3s ease',
          }}
        />
      ))}

      {shootingStars.map((shoot) => (
        <div
          key={shoot.id}
          className="absolute bg-white animate-shoot"
          style={{
            left: `${shoot.startX}%`,
            top: `${shoot.startY}%`,
            width: '2px',
            height: '80px',
            transform: `rotate(${shoot.angle}deg)`,
            background: 'linear-gradient(white, rgba(255,255,255,0))',
            borderRadius: '9999px',
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
};