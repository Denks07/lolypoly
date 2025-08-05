import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h5>About Us</h5>
          <ul>
            <li>Contact Person</li>
            <li>Privacy Policy</li>
            <li>Warranty</li>
            <li>Help Center</li>
            <li>Accessibility</li>
            <li>Blogs</li>
            <li>Newsroom</li>
            <li>Smart Help Center</li>
          </ul>
        </div>
        <div className="footer-social">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <i className="bi bi-globe"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-music-note"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2025 LOLYPOUX. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
