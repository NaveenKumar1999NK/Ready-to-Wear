import React from "react";
import "./Footer.css";
import Footer_logo from "../Assets/logo_big.png";
import { GrInstagram } from "react-icons/gr";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={Footer_logo} alt=""></img>
        <p>READY to WEAR</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <p>
            <GrInstagram />
          </p>
          <p>
            <FaPinterest />
          </p>
          <p>
            <FaWhatsapp />
          </p>
        </div>
        <div className="footer-copyrights">
          <hr />
          <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
