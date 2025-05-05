import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import BackButton from "./components/BackButton/BackButton";

import Payment from "./components/Payment/Payment";
import Box from "./components/Box/Box";
import Checkout from "./components/Checkout/Checkout";

import Orders from "./components/Orders/Orders";
import Traceability from "./components/Traceability/Traceability";
import Account from "./components/Account/Account";
import Profil from "./components/Profil/Profil";

// Lazy Loaded Pages
const Home = lazy(() => import("./Pages/Home"));
const ProductP = lazy(() => import("./Pages/ProductP"));
const ContactP = lazy(() => import("./Pages/ContactP"));
const InscriptionP = lazy(() => import("./Pages/InscriptionP"));
const About = lazy(() => import("./components/About/About"));
const Mission = lazy(() => import("./components/Mission/Mission"));
const Partners = lazy(() => import("./components/Partners/Partners"));
const Login = lazy(() => import("./components/Login/Login"));
const ProfileP = lazy(() => import("./Pages/ProfileP"));
const MapP = lazy(() => import("./Pages/MapP"));
const DonationP = lazy(() => import("./Pages/DonationP"));

function App() {
  const location = useLocation(); // 👈 مهم لاستعمال `key`

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductP />} />
        <Route path="/contact" element={<ContactP />} />
        <Route path="/inscription" element={<InscriptionP />} />
        <Route path="/login" element={<Login />} />

        <Route path="/about" element={

            <About />
           
         
        } />
        <Route path="/mission" element={
         
            <Mission />
          
        } />
        <Route path="/partners" element={
       
            <Partners />
           
     
        } />
        <Route path="/map" element={<MapP />} />

        <Route path="/profile" element={
          <>
            <Navbar />
            <BackButton />
            <ProfileP /> {/* 👇 `key` بش يعاود يعمل render */}
            <Footer />
          </>
        }>
          <Route path="orders" element={<Orders />} />
          <Route path="traceability" element={<Traceability />} />
          <Route path="account" element={<Account />} />
          <Route path="profile" element={<Profil />} />
        </Route>

        <Route path="/donation" element={
          <>
            <Navbar />
            <BackButton />
            <DonationP />
            <Footer />
          </>
        } />
        <Route path="/payment" element={<Payment />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/box" element={<Box />} />
      </Routes>
    </Suspense>
  );
}

export default App;
