
import React from 'react';
import { motion } from 'framer-motion';

const ContactIntro = () => {
  return (
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
  );
};

export default ContactIntro;
