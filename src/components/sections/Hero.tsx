
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
      
      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.03, 1.03, 1.03)`;
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
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl order-2 lg:order-1">
          <div className="overflow-hidden inline-block mb-4">
            <span className="inline-block text-sm md:text-base font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary animate-fade-down">
              Frontend Developer & UI Designer
            </span>
          </div>
          
          <div className="mb-6 overflow-hidden">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight animate-fade-up text-balance">
              Creating <span className="text-gradient">beautiful</span> digital experiences that <span className="text-gradient">matter</span>
            </h1>
          </div>
          
          <div className="overflow-hidden mb-8">
            <p className="text-lg text-muted-foreground max-w-md animate-fade-up animate-delay-100">
              I build responsive, user-friendly websites and applications with meticulous attention to detail and a focus on performance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-up animate-delay-300">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div 
          ref={imageRef}
          className="relative order-1 lg:order-2 mx-auto lg:mx-0 w-full max-w-md animate-fade-up animate-delay-200 transition-transform duration-200 ease-out"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 shadow-2xl before:absolute before:inset-0 before:z-10 before:border before:border-white/20 before:rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/0 opacity-70 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
              alt="Professional Headshot" 
              className="w-full h-full object-cover rounded-2xl"
            />
            
            <div className="absolute -bottom-3 -right-3 z-20 bg-card p-4 rounded-lg shadow-lg border border-border animate-fade-up animate-delay-400">
              <p className="text-sm font-medium">5+ years experience</p>
              <p className="text-xs text-muted-foreground">Frontend Development</p>
            </div>
            
            <div className="absolute -top-3 -left-3 z-20 bg-card p-4 rounded-lg shadow-lg border border-border animate-fade-up animate-delay-300">
              <p className="text-sm font-medium">100+ Projects</p>
              <p className="text-xs text-muted-foreground">Completed</p>
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
