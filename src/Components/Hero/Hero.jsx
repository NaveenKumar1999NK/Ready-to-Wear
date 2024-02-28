import React from "react";
import "./Hero.css";
import hero_img from '../Assets/hero_image.png';
import hand_icon from '../Assets/hand_icon.png'
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt=""></img>
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
          <div className="hero-arrow-icon">
            <div>Latest Collection</div>
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt=""></img>
      </div>
    </div>
  );
};

export default Hero;
