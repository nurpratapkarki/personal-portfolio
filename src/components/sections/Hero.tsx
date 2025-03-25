
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-10 md:py-20 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <div className="overflow-hidden inline-block mb-4">
            <span className="inline-block text-sm md:text-base font-medium px-4 py-1.5 rounded-full bg-primary/10 text-primary animate-fade-down">
              Frontend Developer & UI Designer
            </span>
          </div>
          
          <div className="mb-6 overflow-hidden">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight animate-fade-up text-balance">
              Creating <span className="text-gradient">beautiful</span> digital experiences that <span className="text-gradient">matter</span>
            </h1>
          </div>
          
          <div className="overflow-hidden mb-8">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animate-delay-100">
              I build responsive, user-friendly websites and applications with meticulous attention to detail and a focus on performance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 animate-fade-up animate-delay-300">
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
