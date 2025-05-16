
import ProjectCard from '../ui/ProjectCard';
import { Github } from 'lucide-react';
import { projects } from '@/data/data';


const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30 backdrop-blur-sm border border-border/10 rounded-lg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-up">My Projects</h2>
          <p className="section-subtitle animate-fade-up animate-delay-100">
            Here are some of my recent projects showcasing my technical skills and creative approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              animationDelay={`animate-delay-${(index % 3) * 100}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-16 animate-fade-up animate-delay-300">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work? Check out my GitHub repository for additional projects.
          </p>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
          >
            View All Projects
            <Github className="ml-2" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
