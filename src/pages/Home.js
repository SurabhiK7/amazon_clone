import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import HomePromos from '../components/HomePromos';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="container mt-3">
      <BannerCarousel />
      <HomePromos />
      <ProductList />
      <Footer />
    </div>
  );
}
export default Home;