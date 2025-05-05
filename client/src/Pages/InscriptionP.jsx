import React from 'react';
import Navbar2 from '../components/Navbar/Navbar2'; 
import Footer from '../components/Footer/Footer';
import Inscription from '../components/Inscription/Inscription'; 
import './InscriptionP.css';  
import BackButton from '../components/BackButton/BackButton'; 

const InscriptionP = () => {
  return (
    <div className="inscription-page">
     
      <Navbar2 />  

 
      <BackButton bgColor="white" arrowColor="#34343466" />

      
      <Inscription />

      
      <Footer />
    </div>
  );
};

export default InscriptionP;
