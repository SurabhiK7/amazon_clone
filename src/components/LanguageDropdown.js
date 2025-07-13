import React from 'react';
import i18n from '../i18n'; // import the configured i18n instance
import './LanguageDropdown.css'
const LanguageDropdown = ({ show }) => {
  if (!show) return null; // hide dropdown if not toggled

  // Change language and persist selection
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); // Save selected language
  };

  return (
    <ul className="language-dropdown-menu">
      <li onClick={() => changeLanguage('en')}>English</li>
      <li onClick={() => changeLanguage('hi')}>हिंदी</li>
      <li onClick={() => changeLanguage('kn')}>ಕನ್ನಡ</li>
    </ul>
  );
};

export default LanguageDropdown;
