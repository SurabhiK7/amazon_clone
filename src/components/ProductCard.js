import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import RatingStars from './RatingStars'

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card product-card h-100 shadow-sm">
      <img
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{ height: '180px', objectFit: 'contain', padding: '1rem' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="text-muted">₹{product.price.toLocaleString()}</p>
        <RatingStars rating={product.rating} />
        <div className="mt-auto">
          <Link to={`/product/${product.id}`} className="btn btn-sm btn-outline-primary me-2">
            View
          </Link>
          <button className="btn btn-sm btn-warning" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;