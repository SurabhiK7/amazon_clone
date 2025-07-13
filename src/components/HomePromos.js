import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSearchFilter } from '../context/SearchFilterContext';

const promoData = [
  { title: 'Top Deals', text: 'Explore latest discounts', color: '#FFD814', category: 'All Categories', path: '/' },
  { title: 'Electronics', text: 'Best gadgets for you', color: '#C6F6D5', category: 'Electronics', path: '/shop' },
  { title: 'Fashion', text: 'Stylish Accessories', color: '#FEE2E2', category: 'Fashion', path: '/shop' },
  { title: 'Home', text: 'Home Decor', color: '#DBEAFE', category: 'Home_Decor', path: '/shop' }
];

function HomePromos() {
  const { setSelectedCategory } = useSearchFilter();
  const navigate = useNavigate();

  const handleClick = (category, path) => {
    setSelectedCategory(category);
    navigate(path);
  };

  return (
    <div className="container mt-4">
      <Row>
        {promoData.map((promo, idx) => (
          <Col sm={6} md={3} key={idx}>
            <Card
              className="mb-3 shadow-sm"
              style={{ background: promo.color, cursor: 'pointer' }}
              onClick={() => handleClick(promo.category, promo.path)}
            >
              <Card.Body>
                <Card.Title>{promo.title}</Card.Title>
                <Card.Text>{promo.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomePromos;
