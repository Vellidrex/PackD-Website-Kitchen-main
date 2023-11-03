import React from 'react';
import Ball3 from "./Ball3.png"

export default function SubScreen({ onClose }) {
  const handleClickOutside = (event) => {
    if (event.target.classList.contains('ModalBackground')) {
      onClose();
    }
  };

  return (
    <div
      className="ModalBackground fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-50"
      onClick={handleClickOutside}
    >
      <div className="Modal bg-gray-200 p-4 rounded-lg shadow-lg w-3/4 h-1/4 sm:w-1/4 md:w-3/4">
        <p>Delicious Nutrious Protien snack sure to help you live a healthy lifestyle</p>
        <img src={Ball3} width="300" height="400" />
        <button>Order Now</button>
      </div>
    </div>
  );
}
