
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Briefcase, GraduationCap, Award, ArrowDown, Heart } from 'lucide-react';
import { useTheme } from '../components/theme/ThemeProvider';
import image from '../images/profile.png'

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('intro');
  const { theme } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.2;
  
  const sections = {
    intro: {
      title: "Who Am I",
      description: "I'm a passionate full stack developer with a focus on creating beautiful, performant, and accessible web applications. With years of experience in the tech industry, I've developed a deep understanding of the entire development process, from ideation to deployment."
    },
    approach: {
      title: "My Approach",
      description: "I believe in user-centered design, clean code, and continuous learning. Every project is an opportunity to create something that not only meets requirements but exceeds expectations. I combine technical expertise with creative problem-solving to deliver solutions that make an impact."
    },
    values: {
      title: "My Values",
      description: "Integrity, excellence, and innovation drive my work. I'm committed to creating products that are inclusive, respectful of users' privacy, and built with sustainability in mind. I strive to write code that's not just functional, but also maintainable and elegant."
    }
  };
  
  const timelineItems = [
    {
      year: "2021 - Present",
      title: "Senior UI Developer",
      organization: "InnovateUI",
      description: "Leading front-end development for enterprise applications, mentoring junior developers, and implementing modern UI practices.",
      icon: <Briefcase className="text-primary" size={24} />
    },
    {
      year: "2019 - 2021",
      title: "Frontend Developer",
      organization: "Tech Solutions Inc.",
      description: "Developed responsive web applications and implemented design systems for various clients.",
      icon: <Briefcase className="text-primary" size={24} />
    },
    {
      year: "2019 - 2021",
      title: "Master's in UI/UX Design",
      organization: "Design Institute",
      description: "Studied advanced principles of user experience design, interaction design, and design systems.",
      icon: <GraduationCap className="text-primary" size={24} />
    },
    {
      year: "2015 - 2019",
      title: "Bachelor of Computer Science",
      organization: "University of Technology",
      description: "Specialized in software engineering and web technologies.",
      icon: <GraduationCap className="text-primary" size={24} />
    }
  ];
  
  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Framer Motion", level: 75 },
    { name: "GraphQL", level: 70 }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section with parallax effect */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden flex items-center">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ 
              y: parallaxOffset,
              backgroundImage: theme === 'dark' 
                ? 'linear-gradient(to bottom, rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 1))' 
                : 'linear-gradient(to bottom, rgba(243, 244, 246, 0.8), rgba(243, 244, 246, 1))',
              backgroundSize: 'cover'
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">
                <span className="text-gradient">About Me</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Full Stack Developer, UI Designer, and Problem Solver
              </p>
              
              <motion.div 
                className="mt-12 animate-bounce"
                whileHover={{ scale: 1.2 }}
              >
                <ArrowDown size={30} className="mx-auto text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Introduction tabs section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className={`rounded-xl p-6 md:p-10 ${theme === 'dark' ? 'bg-secondary/30 backdrop-blur-lg border border-white/10' : 'bg-secondary/50 shadow-md'}`}>
              <div className="flex flex-col md:flex-row gap-8">
                {/* Profile image */}
                <motion.div 
                  className="flex-shrink-0 flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
                    <img 
                      src={image} 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                {/* Tabs */}
                <div className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {Object.entries(sections).map(([key, section]) => (
                      <button
                        key={key}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          activeSection === key 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted/50 hover:bg-muted text-muted-foreground'
                        }`}
                        onClick={() => setActiveSection(key)}
                      >
                        {section.title}
                      </button>
                    ))}
                  </div>
                  
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card/40 backdrop-blur-sm p-6 rounded-lg border border-border/50"
                  >
                    <h2 className="text-2xl font-bold mb-4">{sections[activeSection].title}</h2>
                    <p className="text-lg text-muted-foreground">{sections[activeSection].description}</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Timeline section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 font-display tracking-tight">My Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A timeline of my professional and educational experiences
              </p>
            </motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-border"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : ''
                    }`}
                  >
                    {/* Timeline point */}
                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-card flex items-center justify-center border-4 border-primary/70 z-10">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                      <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-card/30 backdrop-blur-sm border border-white/10' : 'bg-card shadow-md'}`}>
                        <span className="text-sm font-semibold text-primary block mb-1">{item.year}</span>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-2">{item.organization}</p>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 font-display tracking-tight">My Skills</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Technologies and skills I've mastered over the years
              </p>
            </motion.div>
            
            <div className={`rounded-xl p-8 ${theme === 'dark' ? 'bg-secondary/30 backdrop-blur-lg border border-white/10' : 'bg-secondary/50 shadow-md'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mb-2 flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Personal interests */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 font-display tracking-tight">Beyond Coding</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                When I'm not writing code, here's what keeps me busy
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Photography", description: "Capturing moments and exploring visual storytelling" },
                { title: "Hiking", description: "Finding peace and inspiration in nature's beauty" },
                { title: "Reading", description: "Expanding my horizons through books and articles" },
                { title: "Music", description: "Playing guitar and discovering new artists" },
                { title: "Community", description: "Contributing to open source and mentoring new developers" },
                { title: "Learning", description: "Constantly exploring new technologies and concepts" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-card/30 backdrop-blur-sm border border-white/10' : 'bg-card shadow-md'}`}
                >
                  <Heart size={24} className="text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`max-w-3xl mx-auto p-10 rounded-xl ${theme === 'dark' ? 'bg-secondary/30 backdrop-blur-lg border border-white/10' : 'bg-secondary/50 shadow-md'}`}
            >
              <Award size={40} className="mx-auto text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-4 font-display tracking-tight">Let's Work Together</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Interested in collaborating on a project or just want to say hello? I'd love to hear from you!
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90"
                >
                  Get in Touch
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

export default AboutPage;
