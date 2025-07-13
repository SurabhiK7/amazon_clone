// SubNavBar.js
import React from 'react';
import './SubNavBar.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const menuItems = [
  { label: "Prime Day Deals", link: "https://www.amazon.in/primeday?ref_=nav_cs_td_pd_dt_cr" },
  { label: "Fresh", link: "https://www.amazon.in/alm/storefront?almBrandId=ctnow&ref_=nav_cs_fresh" },
  { label: "MX Player", link: "https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav" },
  { label: "Sell", link: "https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3" },
  { label: "Bestsellers", link: "https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers" },
  { label: "Mobiles", link: "https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles" },
  { label: "Prime", link: "https://www.amazon.in/amazonprime?ref_=nav_cs_primelink_nonmember" },
  { label: "Customer Service", link: "https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help" },
  { label: "New Releases", link: "https://www.amazon.in/gp/new-releases/?ref_=nav_cs_newreleases" },
  { label: "Fashion", link: "https://www.amazon.in/gp/browse.html?node=6648217031&ref_=nav_cs_fashion" },
  { label: "Amazon Pay", link: "https://www.amazon.in/amazonpay/home?ref_=nav_cs_apay" },
  { label: "Electronics", link: "https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics" },
  { label: "Home & Kitchen", link: "https://www.amazon.in/Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home" },
  { label: "Computers", link: "https://www.amazon.in/computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc" },
  { label: "Books", link: "https://www.amazon.in/Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books" },
  { label: "Car & Motorbike", link: "https://www.amazon.in/Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive" }
];


const SubNavBar = () => {
  return (
    <div className="subnav">
      <div className="subnav-container">
        <Link to="/" className="subnav-icon">
  <FaBars />Home
</Link>

        {menuItems.map((item, index) => (
  <a key={index} href={item.link} className="subnav-link">
    {item.label}
  </a>
))}

      </div>
    </div>
  );
};

export default SubNavBar;
