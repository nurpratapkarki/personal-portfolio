
import React from 'react';
import { motion } from 'framer-motion';

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
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
];

const ContactFAQ = () => {
  return (
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
        {faqs.map((faq, index) => (
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
  );
};

export default ContactFAQ;
