import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = imageRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.05, 1.05, 1.05)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1, 1, 1)';
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    imageRef.current?.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      imageRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl order-2 lg:order-1">
          <span className="inline-block text-sm md:text-base font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary animate-fade-down">
            Frontend Developer & UI Designer
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight animate-fade-up">
            Designing <span className="text-gradient">engaging</span> digital experiences that <span className="text-gradient">leave an impact</span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground max-w-md animate-fade-up animate-delay-100">
            I craft responsive, high-performance websites and applications with a keen eye for detail and seamless user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-up animate-delay-300">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
        
        <div 
          ref={imageRef}
          className="relative order-1 lg:order-2 mx-auto lg:mx-0 w-full max-w-md animate-fade-up animate-delay-200 transition-transform duration-300 ease-out"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/0 opacity-70 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
              alt="Professional Headshot" 
              className="w-full h-full object-cover rounded-2xl"
            />
            
            <div className="absolute -bottom-3 -right-3 z-20 bg-card p-4 rounded-lg shadow-lg border border-border animate-fade-up animate-delay-400">
              <p className="text-sm font-medium">5+ Years of Experience</p>
              <p className="text-xs text-muted-foreground">Frontend Development</p>
            </div>
            
            <div className="absolute -top-3 -left-3 z-20 bg-card p-4 rounded-lg shadow-lg border border-border animate-fade-up animate-delay-300">
              <p className="text-sm font-medium">100+ Successful Projects</p>
              <p className="text-xs text-muted-foreground">Delivered</p>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors animate-fade-in animate-delay-600"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
};

export default Hero;
