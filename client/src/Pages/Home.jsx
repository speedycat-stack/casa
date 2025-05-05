import React from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Mission from '../components/Mission/Mission';
import Partners from '../components/Partners/Partners';
import Footer from '../components/Footer/Footer';
import bgIndex from '../assets/sdf.png'; 
import Navbar from '../components/Navbar/Navbar'; 

const Home = () => {
  return (
    <>
      <Header
        variant="light"
        bgImage={bgIndex}
        showHero={true}
      />
      <Navbar />
      <About />
      <Mission />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
