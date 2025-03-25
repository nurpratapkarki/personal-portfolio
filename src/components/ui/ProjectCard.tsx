
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
    <motion.div 
      className={cn(
        "project-card rounded-xl overflow-hidden bg-card border border-border shadow-sm", 
        animationDelay
      )}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: parseInt(animationDelay.replace(/\D/g, '')) * 0.001 || 0
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -10, 
        transition: { 
          type: "spring", 
          stiffness: 400,
          damping: 10
        }
      }}
    >
      <motion.div className="relative h-64 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${imageUrl})` }}
          initial={{ scale: 1.2 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center"
            aria-label="View live site"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink size={18} />
          </motion.a>
          <motion.a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center"
            aria-label="View on GitHub"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={18} />
          </motion.a>
        </motion.div>
      </motion.div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-2 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, staggerChildren: 0.05 }}
          viewport={{ once: true }}
        >
          {tags.map((tag, index) => (
            <motion.span 
              key={tag} 
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                transition: { delay: 0.3 + (index * 0.05) }
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.a 
          href={liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 3 }}
          >
            <ArrowRight size={16} className="ml-1" />
          </motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
