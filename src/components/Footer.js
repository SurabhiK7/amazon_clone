import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaArrowUp } from 'react-icons/fa';

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop} title="Back to Top">
          <FaArrowUp />
        </button>
      )}

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h3>About</h3>
            <p>
              This e-commerce website is a demo project created by <strong>Surabhi K</strong> from <br />
              <strong>VIDYAVARDHAKA COLLEGE OF ENGINEERING</strong>,<br /> Dept of <strong>Information Science Engineering</strong>.
            </p>
          </div>

          <div className="footer-section links">
            <h3>Connect with Us</h3>
            <ul>
              <li><a href="https://www.instagram.com/">Instagram</a></li>
              <li><a href="https://www.linkedin.com/">LinkedIn</a></li>
              <li><a href="https://x.com/?lang=en">Twitter</a></li>
              <li><a href="https://www.facebook.com/">Facebook</a></li>
            </ul>
            <div className="social-icons">
              <FaInstagram />
              <FaLinkedin />
              <FaTwitter />
              <FaFacebook />
            </div>
          </div>

          <div className="footer-section contact">
            <h3>Contact</h3>
            <p>Surabhi K</p>
            <p>ISE</p>
            <p>VVCE, Mysuru, India</p>
            <p>surabhiksonu2004@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 Surabhi K | All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
