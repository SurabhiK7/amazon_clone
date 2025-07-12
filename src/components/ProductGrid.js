import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

function ProductGrid({ products }) {
  return (
    <div className="container my-4">
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductGrid;
