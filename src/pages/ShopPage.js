import React from 'react';
import { useSearchFilter } from '../context/SearchFilterContext';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

function ShopPage() {
  const { selectedCategory } = useSearchFilter();

  const filteredProducts = selectedCategory === 'All Categories'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mt-4">
      <h4>{selectedCategory} Products</h4>
      <div className="row">
        {filteredProducts.length === 0 ? (
          <p>No products found in this category.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ShopPage;
