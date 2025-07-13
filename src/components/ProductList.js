import React from 'react';
import { useSearchFilter } from '../context/SearchFilterContext';
import products from '../data/products';
import ProductCard from './ProductCard';

function ProductList() {
  const { searchTerm, selectedCategory, maxPrice } = useSearchFilter();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
    const matchesPrice = product.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="row">
      {filteredProducts
  .filter(product => product)
  .map(product => (
    <div className="col-md-3 mb-4" key={product.id}>
      <ProductCard product={product} />
    </div>
))}

    </div>
  );
}

export default ProductList;
