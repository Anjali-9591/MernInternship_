import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pinterest_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Fashion Club Logo" />
        <p>FASHION CLUB</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        {[instagram_icon, pinterest_icon, whatsapp_icon].map((icon, index) => (
          <div key={index} className="footer-icons-container">
            <img src={icon} alt="Social Icon" />
          </div>
        ))}
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2023 - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
