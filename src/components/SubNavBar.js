// SubNavBar.js
import React from 'react';
import './SubNavBar.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const menuItems = [
  { key: "primeDayDeals", link: "https://www.amazon.in/primeday?ref_=nav_cs_td_pd_dt_cr" },
  { key: "fresh", link: "https://www.amazon.in/alm/storefront?almBrandId=ctnow&ref_=nav_cs_fresh" },
  { key: "mxPlayer", link: "https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav" },
  { key: "sell", link: "https://www.amazon.in/b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3" },
  { key: "bestsellers", link: "https://www.amazon.in/gp/bestsellers/?ref_=nav_cs_bestsellers" },
  { key: "mobiles", link: "https://www.amazon.in/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles" },
  { key: "prime", link: "https://www.amazon.in/amazonprime?ref_=nav_cs_primelink_nonmember" },
  { key: "customerService", link: "https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help" },
  { key: "newReleases", link: "https://www.amazon.in/gp/new-releases/?ref_=nav_cs_newreleases" },
  { key: "fashion", link: "https://www.amazon.in/gp/browse.html?node=6648217031&ref_=nav_cs_fashion" },
  { key: "amazonPay", link: "https://www.amazon.in/amazonpay/home?ref_=nav_cs_apay" },
  { key: "electronics", link: "https://www.amazon.in/electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics" },
  { key: "homeKitchen", link: "https://www.amazon.in/Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home" },
  { key: "computers", link: "https://www.amazon.in/computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc" },
  { key: "books", link: "https://www.amazon.in/Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books" },
  { key: "carMotorbike", link: "https://www.amazon.in/Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive" }
];


const SubNavBar = () => {
  
const { t } = useTranslation();
  return (
    <div className="subnav">
      <div className="subnav-container">
        <Link to="/" className="subnav-icon">
  <FaBars />{t('Home')}
</Link>

        {menuItems.map((item, index) => (
  <a key={index} href={item.link} className="subnav-link">
    {t(item.key)}
  </a>
))}

      </div>
    </div>
  );
};

export default SubNavBar;
