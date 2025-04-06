
import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProjectCard from '../components/ui/ProjectCard';
import { Code, Layers, Palette, Sparkles, Brain, Zap, Filter } from 'lucide-react';
import { useTheme } from '../components/theme/ThemeProvider';

const ProjectsPage = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'E-commerce Dashboard',
      description: 'A comprehensive dashboard for managing online store inventory, orders, and customers with real-time analytics.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'frontend',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A Kanban-style project management tool with drag-and-drop functionality, team collaboration, and progress tracking.',
      tags: ['React', 'Redux', 'Firebase', 'Styled Components'],
      imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'fullstack',
      featured: true
    },
    {
      title: 'Travel Booking Platform',
      description: 'A travel website with hotel booking, flight search, and personalized itinerary planning for travelers.',
      tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'fullstack',
      featured: false
    },
    {
      title: 'Social Media Dashboard',
      description: 'A unified dashboard to manage and schedule posts across multiple social media platforms with analytics.',
      tags: ['React', 'GraphQL', 'Node.js', 'Material UI'],
      imageUrl: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'fullstack',
      featured: false
    },
    {
      title: 'Health & Fitness App',
      description: 'A fitness tracking application with workout plans, nutrition tracking, and progress visualization.',
      tags: ['React Native', 'Redux', 'Firebase', 'Expo'],
      imageUrl: 'https://images.unsplash.com/photo-1559855146-d7f51d39f3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'mobile',
      featured: true
    },
    {
      title: 'Educational Platform',
      description: 'An online learning platform with course management, video lessons, quizzes, and student progress tracking.',
      tags: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      imageUrl: 'https://images.unsplash.com/photo-1587614313085-5da51cebd8ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'fullstack',
      featured: false
    },
    {
      title: 'Portfolio Website Template',
      description: 'A customizable portfolio template for developers and designers to showcase their work and skills.',
      tags: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
      imageUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'frontend',
      featured: false
    },
    {
      title: 'Music Streaming Service',
      description: 'A Spotify-like music streaming application with playlist creation, artist following, and song recommendations.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      category: 'fullstack',
      featured: true
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.category === filter);
  
  const categories = [
    { id: 'all', label: 'All Projects', icon: <Layers size={16} /> },
    { id: 'featured', label: 'Featured', icon: <Sparkles size={16} /> },
    { id: 'frontend', label: 'Frontend', icon: <Palette size={16} /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Code size={16} /> },
    { id: 'mobile', label: 'Mobile', icon: <Zap size={16} /> },
  ];
  
  const stats = [
    { value: '25+', label: 'Projects Completed', icon: <Layers className="text-primary" size={30} /> },
    { value: '15+', label: 'Happy Clients', icon: <Sparkles className="text-primary" size={30} /> },
    { value: '3+', label: 'Years Experience', icon: <Brain className="text-primary" size={30} /> },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <motion.div 
            className={`absolute inset-0 -z-10 ${theme === 'dark' ? 'opacity-30' : 'opacity-10'}`}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            style={{ 
              backgroundImage: `url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px)'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-display"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gradient">My Creative</span> <br />
                <span className="text-gradient">Portfolio</span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A showcase of my latest projects, experiments, and development work
              </motion.p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className={`p-6 rounded-lg w-64 ${theme === 'dark' ? 'bg-card/30 backdrop-blur-lg border border-white/10' : 'bg-card shadow-md'}`}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex flex-col items-center">
                    {stat.icon}
                    <h3 className="text-3xl font-bold mt-4">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold mb-4 md:mb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Browse Projects
              </motion.h2>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Filter size={20} className="mr-2 text-muted-foreground" />
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilter(category.id)}
                    className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium transition-all ${
                      filter === category.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted/50 hover:bg-muted text-muted-foreground'
                    }`}
                  >
                    <span className="mr-1">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </motion.div>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={filter} // Remount when filter changes
            >
              {filteredProjects.length === 0 ? (
                <motion.div 
                  className="col-span-full text-center py-20"
                  variants={itemVariants}
                >
                  <p className="text-xl text-muted-foreground">No projects found for this filter.</p>
                </motion.div>
              ) : (
                filteredProjects.map((project, index) => (
                  <motion.div key={project.title} variants={itemVariants}>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      imageUrl={project.imageUrl}
                      liveUrl={project.liveUrl}
                      githubUrl={project.githubUrl}
                      animationDelay={`animate-delay-${index % 3 * 100}`}
                    />
                  </motion.div>
                ))
              )}
            </motion.div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className={`py-16 ${theme === 'dark' ? 'bg-secondary/30 backdrop-blur-lg' : 'bg-secondary/10'}`}>
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 font-display">My Development Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A structured approach to ensure every project meets the highest standards
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Research",
                  description: "Understanding project requirements, researching the market, and analyzing user needs",
                  icon: <motion.div 
                          whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                        >
                          01
                        </motion.div>
                },
                {
                  step: "02",
                  title: "Design & Prototyping",
                  description: "Creating wireframes, designing UI components, and building interactive prototypes",
                  icon: <motion.div 
                          whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                        >
                          02
                        </motion.div>
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Writing clean, maintainable code, implementing responsive design, and ensuring accessibility",
                  icon: <motion.div 
                          whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                        >
                          03
                        </motion.div>
                },
                {
                  step: "04",
                  title: "Testing & Optimization",
                  description: "Conducting thorough testing, optimizing performance, and refining the user experience",
                  icon: <motion.div 
                          whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                          className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                        >
                          04
                        </motion.div>
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className={`${theme === 'dark' ? 'bg-card/30 backdrop-blur-sm border border-white/10' : 'bg-card shadow-md'} p-6 md:p-8 rounded-xl relative overflow-hidden`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="mb-6 flex justify-center">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                  
                  {/* Connector line (only for desktop) */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border z-10" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Technologies section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 font-display">Tools & Technologies</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My expertise spans across a wide range of modern development tools
              </p>
            </motion.div>
            
            <motion.div
              className={`rounded-xl p-8 ${theme === 'dark' ? 'bg-secondary/30 backdrop-blur-lg border border-white/10' : 'bg-secondary/50'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Node.js', 'GraphQL', 'REST API', 'Jest', 'React Testing Library', 'Figma'].map((tech, index) => (
                  <motion.div 
                    key={tech}
                    className={`flex items-center p-4 rounded-lg border ${theme === 'dark' ? 'bg-card/30 backdrop-blur-sm border-white/5' : 'bg-card border-border/50'}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.03, backgroundColor: "var(--primary-foreground)" }}
                  >
                    <Code size={16} className="text-primary mr-2" />
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              className={`max-w-4xl mx-auto rounded-xl p-12 text-center ${theme === 'dark' ? 'bg-gradient-to-br from-primary/20 to-secondary/30 backdrop-blur-lg border border-white/10' : 'bg-gradient-to-br from-primary/10 to-secondary/20'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="/contact" 
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Let's Discuss Your Project
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
