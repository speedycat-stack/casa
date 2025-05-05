import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import Information from '../components/Contact/Information';
import './ContactP.css';
import BackButton from '../components/BackButton/BackButton';


const ContactP = () => {
  return (
    <>
   
      <Navbar
        variant="dark"
        backgroundColor="#0D0235"
        linkColor="#FFFFFF"
        position={{ top: '20px', left: '40px' }}
      />
      <BackButton bgColor="#34343466" arrowColor="#FFFFFF" />

 
      <div className="contact-page-bg"></div>

      <div className="ContactPage-container">
        <section className="Contact-section">
          <Contact />
        </section>
        <section className="Information-section">
          <Information />
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContactP;