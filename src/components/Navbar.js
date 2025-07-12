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


function Navbar() {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
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

  const categories = ['All Categories', ...new Set(products.map(p => p.category))];

  const handleApplyLocation = (newLocation, username) => {
    setLocation(newLocation);
    localStorage.setItem('location', newLocation);
    if (username) login(username); // triggers AuthContext to update user
  };

  // Close account dropdown on outside click
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

  return (
    <header className="amazon-header fixed-top">
      <div className="nav-top">
        <Link to="/"><img src={logo} alt="Amazon" className="logo" /></Link>

        <div className="location" onClick={() => setShowLocationModal(true)}>
          <img src={locationIcon} alt="Location" className="location-icon" />
          <div className="location-text">
            <span className="small-text">{t('Delivering to')}</span>
            <strong className="update-location">{location}</strong>
          </div>
        </div>

        <div className="search-bar">
          <select className="category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
          </select>
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button><FaSearch /></button>
        </div>

        <div className="price-filter">
          <label htmlFor="priceRange" className="form-label">{t('Max Price: ')}₹{maxPrice}</label>
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
          <span>EN ▾</span>
          <LanguageDropdown show={showLangDropdown} />
        </div>

        <div className="nav-option dropdown" ref={dropdownRef} style={{ position: 'relative' }}>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              if (user) {
                setAccountDropdownOpen(prev => !prev);
              } else {
                setShowLocationModal(true); // Trigger sign-in modal
              }
            }}
          >
            <span>{user ? 'Hello, ${user.username}' : 'Hello, sign in'}</span>
            <strong>Account & Lists {accountDropdownOpen ? '▴' : '▾'}</strong>
          </div>

{accountDropdownOpen && (
  <div className="account-dropdown">
    {isLoggedIn ? (
      <button onClick={handleSignOut}>Sign Out</button>
    ) : (
      <button onClick={openSignInModal}>Sign In</button>
    )}
  </div>
)}



        </div>

        <Link to="/orders" className="nav-option">
          <span>{t('Returns')}</span>
          <strong>{t('& Orders')}</strong>
        </Link>

        <Link to="/cart" className="cart position-relative">
          <FaShoppingCart />
          <span>{t('Cart')}</span>
          {cartCount > 0 && (
            <span className="cart-count badge bg-warning text-dark position-absolute top-0 start-100 translate-middle">
              {cartCount}
            </span>
          )}
        </Link>

        <button onClick={toggleTheme} className="btn btn-sm btn-outline-secondary">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      {showLocationModal && (
        <LocationModal
          onClose={() => setShowLocationModal(false)}
          onApply={handleApplyLocation}
        />
      )}
    </header>
  );
}

export default Navbar;