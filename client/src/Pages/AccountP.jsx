import React from "react";
import Navbar2 from "../components/Navbar/Navbar2";
import Account from "../components/Account/Account";
import Footer from "../components/Footer/Footer";
import BackButton from '../components/BackButton/BackButton';
const AccountP = () => {
  return (
    <div>
      <Navbar2 />
      <BackButton bgColor="white" arrowColor="#34343466" />
      <Account />
      <Footer />
    </div>
  );
};

export default AccountP;
