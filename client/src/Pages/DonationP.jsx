import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DonationP.css"; 

// Import components from the correct paths
import Payment from "../../components/Payment/Payment"; // Correct path for Payment component
import Checkout from "../../components/Checkout/Checkout"; // Correct path for Checkout component
import Box from "../../components/Box/Box"; // Correct path for Box component

const DonationP = () => {
  const [step, setStep] = useState(1); 

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2); // Move to Payment step
    }
  };

  return (
    <div className="donation-container">
      <header className="donation-header">
        <h1>Donation Process</h1>
      </header>

      <main className="donation-main">
        {/* Order Summary Section */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-item">
            <p>Item 1</p>
            <p>300</p>
          </div>
          <div className="summary-item">
            <p>Item 2</p>
            <p>300</p>
          </div>
          <div className="total">
            <p>Total</p>
            <p>600</p>
          </div>
          {step === 1 && (
            <Link to="/checkout">
              <button className="checkout-btn" onClick={handleNextStep}>
                CONTINUE TO CHECKOUT
              </button>
            </Link>
          )}
        </div>

        {/* Donation Content Section */}
        <div className="donation-content">
          {step === 1 && <Box />}
          {step === 1 && <Checkout handleNextStep={handleNextStep} />}
          {step === 2 && <Payment handleNextStep={handleNextStep} />}
        </div>
      </main>
    </div>
  );
};

export default DonationP;
