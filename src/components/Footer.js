import React, { useState, useEffect } from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
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
        <button className="back-to-top" onClick={scrollToTop} title={t("backToTop")}>
          <FaArrowUp />
        </button>
      )}

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-section about">
            <h3>{t("aboutTitle")}</h3>
            <p>
              {t("aboutDescription")} <strong>Surabhi K</strong> <br />
              <strong>{t("collegeName")}</strong>,<br />
              {t("departmentFull")}
            </p>
          </div>

          <div className="footer-section links">
            <h3>{t("connectWithUs")}</h3>
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
            <h3>{t("contact")}</h3>
            <p>{t("Surabhi")}</p>
            <p>{t("department")}</p>
            <p>{t("college")}</p>
            <p>surabhiksonu2004@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2025 Surabhi K | {t("allRightsReserved")}
        </div>
      </footer>
    </>
  );
}

export default Footer;
