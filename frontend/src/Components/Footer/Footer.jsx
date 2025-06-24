import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import insta from '../Assets/instagram_icon.png';
import pint from '../Assets/pintester_icon.png';
import wp from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="Logo" />
        <p>SHOPPER</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={insta} alt="Instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={pint} alt="Pinterest" />
        </div>
        <div className="footer-icons-container">
          <img src={wp} alt="WhatsApp" />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2025 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
