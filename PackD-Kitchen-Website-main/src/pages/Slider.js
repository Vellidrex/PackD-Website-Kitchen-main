import React from "react";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import "./home.css";
import { SliderData } from "./SliderData";

export default function Slider() {
   const [activeImageNum, setCurrent] = useState(0);
   const length = SliderData.length;
   const nextSlide = () => {
      setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
   };
   const prevSlide = () => {
      setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
   };
   if (!Array.isArray(SliderData) || SliderData.length <= 0) {
      return null;
   }
   return (
      <div>
         <section className = "image-slider">
            <div class = "left">
               <FaArrowAltCircleLeft onClick = {prevSlide} />
            </div>
            <div class="right"> 
               <FaArrowAltCircleRight onClick = {nextSlide} />
            </div>
            {SliderData.map((currentSlide, ind) => {
               return (
                  <div
                     className={ind === activeImageNum ? "currentSlide active" : "currentSlide"}
                     key={ind}
                  >
                     {ind === activeImageNum && <img src={currentSlide.image} className="image"/>}
                  </div>
               );
            })}
         </section>
      </div>
   );
}