
import React from 'react';
import { Mail, Phone, MapPin, Clock, Linkedin, Github, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: "Email",
    details: "nurpratapkarki@gmail.com",
    link: "mailto:nurpratapkarki@gmail.com"
  },
  {
    icon: <Phone size={24} />,
    title: "Phone",
    details: "+977 (984) 069 3765",
    link: "tel:+9779840693765"
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    details: "Kohalpur Banke, Nepal",
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
    link: "https://linkedin.com/in/nurpratapkarki",
    color: "bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
  },
  {
    icon: <Github size={24} />,
    name: "GitHub",
    link: "https://github.com/nurpratapkarki",
    color: "bg-[#333]/10 text-[#333] hover:bg-[#333] hover:text-white"
  },
  {
    icon: <Twitter size={24} />,
    name: "Twitter",
    link: "https://x.com/nurpratapkarki",
    color: "bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white"
  }
];

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
