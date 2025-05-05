import React from "react";
import Navbar2 from "../components/Navbar/Navbar2"; 
import Orders from "../components/Orders/Orders"; 
import Footer from "../components/Footer/Footer";
import BackButton from '../components/BackButton/BackButton';
const OrdersP = () => {
  return (
    <div>
      <Navbar2 />
       <BackButton bgColor="white" arrowColor="#34343466" />
      <Orders />
      <Footer />
    </div>
  );
};

export default OrdersP;
