import React, { useState } from 'react';
import './Product.css'; 
import farina from "../../assets/farina.png";
import hlib from "../../assets/hlib.jpg";
import hrissa from "../../assets/hrissa.png";
import makarouna from "../../assets/makarouna.png";
import ProductModal from './ProductModal';
import AddtoModal from './AddtoModal'; 

const products = [
  { id: 1, name: "Farina", price: "1DT", image: farina },
  { id: 2, name: "Hlib Délice", price: "1DT", image: hlib },
  { id: 3, name: "Hrissa", price: "1DT", image: hrissa },
  { id: 4, name: "Makarouna", price: "1DT", image: makarouna },
  { id: 5, name: "Farina", price: "1DT", image: farina },
  { id: 6, name: "Hlib Délice", price: "1DT", image: hlib },
  { id: 7, name: "Hrissa", price: "1DT", image: hrissa },
  { id: 8, name: "Makarouna", price: "1DT", image: makarouna },
  { id: 9, name: "Hlib Délice", price: "1DT", image: hlib },
];

const Product = () => {
  const [modalProduct, setModalProduct] = useState(null); 
  const [showAddToCartModal, setShowAddToCartModal] = useState(false); 

  const openProductModal = (product) => {
    setModalProduct(product); 
    document.body.classList.add('modal-open'); 
  };

  const closeProductModal = () => {
    setModalProduct(null);
    document.body.classList.remove('modal-open'); 
  };

  const openAddToCartModal = (product) => {
    setShowAddToCartModal(true); 
    setModalProduct(product); 
  };

  const closeAddToCartModal = () => {
    setShowAddToCartModal(false); 
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-btn" onClick={() => openProductModal(product)}>
              +
            </button>
          </div>
        </div>
      ))}

     
      {modalProduct && <ProductModal product={modalProduct} onClose={closeProductModal} onAddToCart={openAddToCartModal} />}

     
      {showAddToCartModal && <AddtoModal product={modalProduct} onClose={closeAddToCartModal} />}
    </div>
  );
};

export default Product;