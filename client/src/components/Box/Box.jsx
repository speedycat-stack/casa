
import React, { useState } from "react"; 
import "./Box.css";
import lait from "../../assets/lait.png";
import hrisa from "../../assets/hrisaCap.png";
import faa from "../../assets/faa.png";
import maakrna from "../../assets/maakrna.png";
import { Link } from "react-router-dom";

const suggestedProducts = [
  { id: 1, name: "Lait - délice - 1 L", price: "1DT", image: lait },
  { id: 2, name: "Lait - délice - 1 L", price: "1DT", image: lait },
  { id: 3, name: "Hrisa Cap", price: "2DT", image: hrisa },
  { id: 4, name: "Faa", price: "2DT", image: faa },
  { id: 5, name: "Maakrna", price: "3DT", image: maakrna },
  { id: 6, name: "Lait - délice - 1 L", price: "1DT", image: lait },
  { id: 7, name: "Lait - délice - 1 L", price: "1DT", image: lait },
  { id: 8, name: "Hrisa Cap", price: "2DT", image: hrisa },
  { id: 9, name: "Faa", price: "2DT", image: faa },
  { id: 10, name: "Maakrna", price: "3DT", image: maakrna },
  { id: 11, name: "Maakrna", price: "3DT", image: maakrna },
  { id: 12, name: "Lait - délice - 1 L", price: "1DT", image: lait },
  { id: 13, name: "Lait - délice - 1 L", price: "1DT", image: lait },
  { id: 14, name: "Hrisa Cap", price: "2DT", image: hrisa },
  { id: 15, name: "Faa", price: "2DT", image: faa },
  { id: 16, name: "Maakrna", price: "3DT", image: maakrna },
  { id: 17, name: "Lait - délice - 1 L", price: "1DT", image: lait },
  { id: 18, name: "Lait - délice - 1 L", price: "1DT", image: lait },
  { id: 19, name: "Hrisa Cap", price: "2DT", image: hrisa },
  { id: 20, name: "Faa", price: "2DT", image: faa },
  { id: 21, name: "Maakrna", price: "3DT", image: maakrna },
  { id: 22, name: "Lait - délice - 1 L", price: "1DT", image: lait },
  { id: 23, name: "Lait - délice - 1 L", price: "1DT", image: lait },
  { id: 24, name: "Hrisa Cap", price: "2DT", image: hrisa },
  
];

const Box = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage =10;

  const handleNext = () => {
    if (currentIndex + productsPerPage < suggestedProducts.length) {
      setCurrentIndex(currentIndex + productsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - productsPerPage >= 0) {
      setCurrentIndex(currentIndex - productsPerPage);
    }
  };

  const displayedProducts = suggestedProducts.slice(
    currentIndex,
    currentIndex + productsPerPage
  );

  return (
    <div className="card-container">
      <div className="card-title">CARD</div>

      <div className="product-list">
        <div className="product-item">
          <img src={faa} alt="Product" />
          <div className="product-info">
            <p>Lorem Ipsum Dolor</p>
            <div className="product-options">
              <button>-</button>
              <span>1</span>
              <button>+</button>
              <span>3 DT</span>
            </div>
            <button className="remove-btn">X</button>
          </div>
        </div>
        <div className="product-item">
          <img src={lait} alt="Product" />
          <div className="product-info">
            <p>Lorem Ipsum Dolor</p>
            <div className="product-options">
              <button>-</button>
              <span>1</span>
              <button>+</button>
              <span>1.2 DT</span>
            </div>
            <button className="remove-btn">X</button>
          </div>
        </div>
        <div className="product-item">
          <img src={maakrna} alt="Product" />
          <div className="product-info">
            <p>Lorem Ipsum Dolor</p>
            <div className="product-options">
              <button>-</button>
              <span>1</span>
              <button>+</button>
              <span>7 DT</span>
            </div>
            <button className="remove-btn">X</button>
          </div>
        </div>
      </div>

     
      
      <div className="suggestion-section">
        <h4 className="suggestion-title">To Complete Your Order</h4>
        <div className="products-container">
          <div className="arrow-left" onClick={handlePrev} style={{ cursor: 'pointer' }}>‹</div>
          <div className="products-row">
            {displayedProducts.map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button className="plus-btn">+</button>
              </div>
            ))}
          </div>
          <div className="arrow-right" onClick={handleNext} style={{ cursor: 'pointer' }}>›</div>
        </div>
      </div>
    </div>
  );
};

export default Box;