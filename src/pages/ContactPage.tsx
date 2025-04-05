
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Contact from '../components/sections/Contact';
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Twitter } from 'lucide-react';

const ContactPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: "contact@example.com",
      link: "mailto:contact@example.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      details: "San Francisco, CA, USA",
      link: "#"
    },
    {
      icon: <Clock size={24} />,
      title: "Work Hours",
      details: "Mon - Fri: 9AM - 6PM",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      link: "https://linkedin.com",
      color: "bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
    },
    {
      icon: <Github size={24} />,
      name: "GitHub",
      link: "https://github.com",
      color: "bg-[#333]/10 text-[#333] hover:bg-[#333] hover:text-white"
    },
    {
      icon: <Twitter size={24} />,
      name: "Twitter",
      link: "https://twitter.com",
      color: "bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Contact Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can work together to bring your ideas to life
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out to me through any of the following methods:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    className="flex items-start p-4 bg-card rounded-lg border border-border"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-muted-foreground">{item.details}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <h3 className="font-bold text-lg mb-4">Connect with me</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${social.color}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.7 + (index * 0.1),
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={sectionVariants}
            >
              <Contact />
            </motion.div>
          </div>
          
          <motion.div
            className="bg-secondary/20 rounded-xl p-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Here are answers to some common questions about my services and process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "What is your typical project timeline?",
                  a: "Timelines vary depending on project scope and complexity, but most projects take between 4-12 weeks from initial consultation to launch."
                },
                {
                  q: "Do you work with clients internationally?",
                  a: "Yes, I work with clients worldwide. We can communicate via email, video calls, and project management tools to ensure seamless collaboration."
                },
                {
                  q: "What is your payment structure?",
                  a: "I typically require a 50% deposit to begin work, with the remaining 50% due upon project completion. For larger projects, we can establish a milestone-based payment schedule."
                },
                {
                  q: "Do you provide ongoing support after project completion?",
                  a: "Yes, I offer maintenance packages and support options to ensure your website or application continues to function optimally after launch."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-card p-5 rounded-lg border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + (index * 0.1), duration: 0.5 }}
                >
                  <h3 className="font-medium mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
