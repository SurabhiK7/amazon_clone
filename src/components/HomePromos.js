import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const promoData = [
  { title: 'Top Deals', text: 'Explore latest discounts', color: '#FFD814' },
  { title: 'Electronics', text: 'Best gadgets for you', color: '#C6F6D5' },
  { title: 'Fashion', text: 'Stylish Accessories', color: '#FEE2E2' },
  { title: 'Home', text: 'Home Decor', color: '#DBEAFE' }
];

function HomePromos() {
  return (
    <div className="container mt-4">
      <Row>
        {promoData.map((promo, idx) => (
          <Col sm={6} md={3} key={idx}>
            <Card className="mb-3 shadow-sm" style={{ background: promo.color }}>
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
