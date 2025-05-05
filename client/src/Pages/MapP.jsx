import React from "react";
import Navbar2 from "../components/Navbar/Navbar2";  
import BackButton from "../components/BackButton/BackButton";  
import Footer from "../components/Footer/Footer"; 
import Map from "../components/Map/Map";  

const MapP = () => {
  return (
    <div>
      <Navbar2 /> 
      <BackButton  bgColor="white" arrowColor="#34343466"  /> 
      <Map />  
      <Footer />  
    </div>
  );
};

export default MapP;
