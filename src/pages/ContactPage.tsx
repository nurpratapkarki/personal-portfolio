
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ContactIntro from '../components/contact/ContactIntro';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ContactFAQ from '../components/contact/ContactFAQ';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <ContactIntro />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <ContactInfo />
            <ContactForm />
          </div>
          
          <ContactFAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
