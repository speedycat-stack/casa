import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Product from '../components/Products/Product';
import BackButton from '../components/BackButton/BackButton';
import bgProduct from '../assets/sleep.png';

const ProductP = () => {
  return (
    <>
      <BackButton bgColor="#34343466" arrowColor="#FFFFFF" />
      <Navbar variant="dark" />
      <Header
        variant="Light"
        bgImage={bgProduct}
        showHero={true}
        customTitle="PRODUCT"
      />
      <Product />
      <Footer />
    </>
  );
};

export default ProductP;
