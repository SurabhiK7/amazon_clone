import React, { useState, useContext, useEffect, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import locationIcon from '../assets/location-icon.jpg';
import logo from '../assets/amazon-logo.png';
import flag from '../assets/flag.png';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import LocationModal from './LocationModal';
import products from '../data/products';
import { useSearchFilter } from '../context/SearchFilterContext';
import LanguageDropdown from './LanguageDropdown';
import { useTranslation } from 'react-i18next';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import i18n from '../i18n';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cartCount } = useContext(CartContext);
  const { user, login, logout } = useAuth();
  const isLoggedIn = !!user;

  const handleSignOut = () => {
    logout();
    localStorage.removeItem('location');
    setAccountDropdownOpen(false);
    window.location.reload();
  };

  const openSignInModal = () => {
    setShowSignInModal(true);
    setAccountDropdownOpen(false);
  };

  const { t } = useTranslation();
  const {
    searchTerm, setSearchTerm,
    selectedCategory, setSelectedCategory,
    maxPrice, setMaxPrice
  } = useSearchFilter();

  const [showLocationModal, setShowLocationModal] = useState(false);
  const [location, setLocation] = useState(localStorage.getItem('location') || 'Bengaluru 562130');

  const handleApplyLocation = (newLocation, username) => {
    setLocation(newLocation);
    localStorage.setItem('location', newLocation);
    if (username) login(username);
  };

  const dropdownRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAccountDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [t('All Categories'), ...new Set(products.map(p => p.category))];

  return (
    <header className="amazon-header fixed-top">
      <div className="nav-top">
        <div className="left-block">
          <button className="mobile-menu-toggle" onClick={() => setMenuOpen(prev => !prev)}>
            ☰
          </button>
          <a href="/" className="logo-link">
            <img src={logo} className="logo" alt="Amazon Logo" />
          </a>
          <div className="location-block">
            <img src={locationIcon} className="location-icon" alt="location" />
            <div className="location-text">
              <span className="small-text">{t('Delivering to')}</span>
              <span className="update-location">{location}</span>
            </div>
          </div>
        </div>

        <div className={`nav-content ${menuOpen ? 'open' : ''}`}>
          <div className="search-bar">
            <select
              className="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="text"
              className="form-control"
              placeholder={t('search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button><FaSearch /></button>
          </div><br /><br />

          <div className="price-filter">
            <label htmlFor="priceRange" className="form-label">
              {t('Max Price')}: ₹{maxPrice}
            </label>
            <input
              type="range"
              id="priceRange"
              className="form-range"
              min="0"
              max="50000"
              step="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>

          <div
            className="lang-box"
            onClick={() => setShowLangDropdown(prev => !prev)}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            <img src={flag} alt="IN" />
            <span>{i18n.language.toUpperCase()} ▾</span>
            <LanguageDropdown show={showLangDropdown} />
          </div>

          <div className="nav-option dropdown" ref={dropdownRef} style={{ position: 'relative' }}>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                if (user) {
                  setAccountDropdownOpen(prev => !prev);
                } else {
                  setShowLocationModal(true);
                }
              }}
            >
              <span>{user ? `${t('hello')}, ${user.username}` : t('helloSignIn')}</span><br />
              <strong>{t('accountLists')} {accountDropdownOpen ? '▴' : '▾'}</strong>
            </div>

            {accountDropdownOpen && (
              <div className="account-dropdown">
                {isLoggedIn ? (
                  <button onClick={handleSignOut}>{t('signOut')}</button>
                ) : (
                  <button onClick={openSignInModal}>{t('signIn')}</button>
                )}
              </div>
            )}
          </div>

          <Link to="/orders" className="nav-option">
            <span>{t('returns')}</span>
            <strong>{t('orders')}</strong>
          </Link>

          <Link to="/cart" className="cart position-relative">
            <FaShoppingCart />
            <span>{t('cart')}</span>
            {cartCount > 0 && (
              <span className="cart-count badge bg-warning text-dark position-absolute top-0 start-100 translate-middle">
                {cartCount}
              </span>
            )}
          </Link>

          <button onClick={toggleTheme} className="btn btn-sm btn-outline-secondary">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {showLocationModal && (
            <LocationModal
              onClose={() => setShowLocationModal(false)}
              onApply={handleApplyLocation}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
