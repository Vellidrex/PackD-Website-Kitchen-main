import React from 'react';
import Ball1 from "./Ball1.png"
import "./home.css"

export default function PBBall({ onClose }) {
  const handleClickOutside = (event) => {
    if (event.target.classList.contains('ModalBackground')) {
      onClose();
    }
  };

  return (
    <div
      className="detailspace"
      onClick={handleClickOutside}
    >
      <div className="details">
        <p>Pack'd Kitchen's Protein Snacks</p>
        <p>Delicious Nutrious Protien snack sure to help you live a healthy lifestyle</p>
        <img src={Ball1} width="200" height="300" />
        <p>Collagen Powder Avaliable</p>
        <button><a href="mailto: packdkitchenllc@gmail.com?subject= 1 Order of The Peanut Butter Protein Balls &Body= Hey David, I would like to make an order please let me know what other information you need to place this order.">Order Now</a></button>
      </div>
    </div>
  );
}
