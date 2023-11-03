import React from 'react';
import Ball4 from "./Ball4.png"

export default function OatsPB({ onClose }) {
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
        <p>Inspired by Dani Knight of Dani K Gym & Wellness; OverKnight Oats, the set it and forget it of Breakfast!</p>
        <p>Delicious Nutrious Protien snack sure to help you live a healthy lifestyle</p>
        <img src={Ball4} width="200" height="300" />
        <button><a href="mailto: packdkitchenllc@gmail.com?subject= 1 Order of The Peanut Butter and Oat Protein Shake Bag &Body= Hey David, I would like to make an order please let me know what other information you need to place this order.">Order Now</a></button>
      </div>
    </div>
  );
}
