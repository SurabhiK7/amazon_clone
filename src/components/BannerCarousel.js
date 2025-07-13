import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function BannerCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
export default BannerCarousel;