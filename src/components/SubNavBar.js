// SubNavBar.js
import React from 'react';
import './SubNavBar.css';
import { FaBars } from 'react-icons/fa';

const menuItems = [
  "Prime Day Deals", "Fresh", "MX Player", "Sell",
  "Bestsellers", "Mobiles", "Prime", "Customer Service",
  "New Releases", "Fashion", "Amazon Pay", "Electronics",
  "Home & Kitchen", "Computers", "Books", "Car & Motorbike"
];

const SubNavBar = () => {
  return (
    <div className="subnav">
      <div className="subnav-container">
        <span className="subnav-icon"><FaBars /> All</span>
        {menuItems.map((item, index) => (
          <span key={index} className="subnav-link">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default SubNavBar;
