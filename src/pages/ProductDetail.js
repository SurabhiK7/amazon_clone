import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { CartContext } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id.toString() === id);
  const { addToCart } = useContext(CartContext);
  const [userRating, setUserRating] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const savedRatings = JSON.parse(localStorage.getItem(`ratings-${id}`)) || [];
    setRatings(savedRatings);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRatings = [...ratings, parseInt(userRating)];
    setRatings(newRatings);
    localStorage.setItem(`ratings-${id}`, JSON.stringify(newRatings));
    setSubmitted(true);
    setUserRating('');
  };

  const avgRating = ratings.length ? (ratings.reduce((a, b) => a + b, 0) / ratings.length) : 0;

  const renderStars = (rating) => '★'.repeat(Math.round(rating)) + '☆'.repeat(5 - Math.round(rating));

  if (!product) return <div className="container">Product not found.</div>;

  return (
    <div className="container mt-4">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="img-fluid mb-3" />
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>
      <button className="btn btn-success mb-3" onClick={() => addToCart(product)}>Add to Cart</button>
      
      <div>
        <h5>Rating</h5>
        <p className="text-warning fs-4">{renderStars(avgRating)} ({avgRating.toFixed(1)})</p>

        <h5 className="mt-4">Rate this product</h5>
        <form onSubmit={handleSubmit}>
          <select className="form-select w-auto" value={userRating} onChange={(e) => setUserRating(e.target.value)} required>
            <option value="">Select rating</option>
            {[5, 4, 3, 2, 1].map((r) => (
              <option key={r} value={r}>{r} Star{r > 1 && 's'}</option>
            ))}
          </select>
          <button type="submit" className="btn btn-primary mt-2">Submit Rating</button>
        </form>
        {submitted && <p className="text-success mt-2">Thank you for rating!</p>}
      </div>
    </div>
  );
}

export default ProductDetail;
