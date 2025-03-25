
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  animationDelay?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  githubUrl,
  animationDelay = ''
}: ProjectCardProps) => {
  return (
    <div className={cn(
      "project-card rounded-xl overflow-hidden bg-card border border-border shadow-sm", 
      "opacity-0 animate-fade-up", 
      animationDelay
    )}>
      <div className="relative h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="project-overlay absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center gap-4">
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="View live site"
          >
            <ExternalLink size={18} />
          </a>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="View on GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View Project
          <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
