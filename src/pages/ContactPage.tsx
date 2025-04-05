
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactIntro from '../components/contact/ContactIntro';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ContactFAQ from '../components/contact/ContactFAQ';
import { useTheme } from '../components/theme/ThemeProvider';

const ContactPage = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <ContactIntro />
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: theme === 'dark' 
                  ? '0 0 15px 2px rgba(255, 255, 255, 0.1)' 
                  : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
              className={`rounded-lg p-6 ${theme === 'dark' ? 'custom-glow' : 'shadow-md'}`}
            >
              <ContactInfo />
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: theme === 'dark' 
                  ? '0 0 15px 2px rgba(255, 255, 255, 0.1)' 
                  : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
              className={`rounded-lg p-6 ${theme === 'dark' ? 'custom-glow' : 'shadow-md'}`}
            >
              <ContactForm />
            </motion.div>
          </motion.div>
          
          <ContactFAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
