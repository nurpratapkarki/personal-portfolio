
import ProjectCard from '../ui/ProjectCard';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for managing online store inventory, orders, and customers with real-time analytics.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style project management tool with drag-and-drop functionality, team collaboration, and progress tracking.',
    tags: ['React', 'Redux', 'Firebase', 'Styled Components'],
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Travel Booking Platform',
    description: 'A travel website with hotel booking, flight search, and personalized itinerary planning for travelers.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A unified dashboard to manage and schedule posts across multiple social media platforms with analytics.',
    tags: ['React', 'GraphQL', 'Node.js', 'Material UI'],
    imageUrl: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Health & Fitness App',
    description: 'A fitness tracking application with workout plans, nutrition tracking, and progress visualization.',
    tags: ['React Native', 'Redux', 'Firebase', 'Expo'],
    imageUrl: 'https://images.unsplash.com/photo-1559855146-d7f51d39f3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Educational Platform',
    description: 'An online learning platform with course management, video lessons, quizzes, and student progress tracking.',
    tags: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
    imageUrl: 'https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
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
