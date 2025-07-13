import React from 'react';
import i18n from '../i18n';
import './LanguageDropdown.css'
const LanguageDropdown = ({ show }) => {
  if (!show) return null; 
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); 
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