
import { Code, Layout, Sparkles, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

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

interface SkillBarProps {
  name: string;
  level: number;
}

const SkillBar = ({ name, level }: SkillBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: `${level}%`, transitionDelay: '300ms' }}
        />
      </div>
    </div>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <div className={cn(
      "bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all", 
      "opacity-0 animate-fade-up",
      delay
    )}>
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-up">About Me</h2>
          <p className="section-subtitle animate-fade-up animate-delay-100">
            With over 5 years of experience, I specialize in creating elegant, efficient, and user-centered digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold mb-4 animate-fade-up">My Story</h3>
            <p className="text-muted-foreground mb-4 animate-fade-up animate-delay-100">
              I'm a passionate frontend developer with a keen eye for design and a commitment to creating intuitive user interfaces that deliver exceptional experiences. My journey began with a fascination for the web and how it connects people globally.
            </p>
            <p className="text-muted-foreground mb-6 animate-fade-up animate-delay-200">
              Today, I combine my technical expertise with creative problem-solving to build responsive, accessible, and performant web applications that help businesses achieve their goals.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-up animate-delay-300">
              {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'Jest', 'Figma', 'UI/UX', 'Responsive Design'].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
            
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all animate-fade-up animate-delay-400"
              download
            >
              Download Resume
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 animate-fade-up">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-xl font-bold mb-8 text-center animate-fade-up">Services I Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={<Layout size={24} />}
              title="Web Development"
              description="I build responsive websites that provide optimal user experiences across all devices."
              delay="animate-delay-100"
            />
            <ServiceCard 
              icon={<Code size={24} />}
              title="Frontend Development"
              description="I create responsive, interactive interfaces using modern JavaScript frameworks."
              delay="animate-delay-200"
            />
            <ServiceCard 
              icon={<Sparkles size={24} />}
              title="UI/UX Design"
              description="I design intuitive interfaces that create meaningful and relevant experiences."
              delay="animate-delay-300"
            />
            <ServiceCard 
              icon={<Zap size={24} />}
              title="Performance Optimization"
              description="I optimize web applications for speed and efficiency across all platforms."
              delay="animate-delay-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
