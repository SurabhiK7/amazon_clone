// LanguageDropdown.js
import React from 'react';
import './LanguageDropdown.css';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = ({ show }) => {
  const { i18n } = useTranslation();

  if (!show) return null; // ⛔ don't render unless `show` is true

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-dropdown">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('hi')}>हिन्दी (Hindi)</button>
      <button onClick={() => changeLanguage('kn')}>ಕನ್ನಡ (Kannada)</button>
    </div>
  );
};

export default LanguageDropdown;
