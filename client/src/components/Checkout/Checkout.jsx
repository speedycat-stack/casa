import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Checkout.css";

const Checkout = () => {
  const navigate = useNavigate(); 

  const handleContinue = () => {
    
    navigate("/payment"); 
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2>Checkout</h2>
        <p>Shipping Information</p>

        <div className="form-group">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="phone" placeholder="Phone" />
          <input type="text" placeholder="Country" />
          <select>
            <option>Your Donation Area</option>
            
          </select>
          <div>
            <input type="checkbox" /> Save contact information
          </div>
        </div>

        <button className="continue-btn" onClick={handleContinue}>
          CONTINUE TO SHIPPING
        </button>
      </div>

    
    </div>
  );
};

export default Checkout;
