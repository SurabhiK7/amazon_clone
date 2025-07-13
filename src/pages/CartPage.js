import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  {item.name} (x{item.quantity}) - ₹{(item.price * item.quantity).toFixed(2)}
                </div>
                <div>
                  <button className="btn btn-sm btn-secondary me-2" onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <button className="btn btn-sm btn-secondary me-2" onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h5>Total: ₹{total.toFixed(2)}</h5>
          <button className="btn btn-primary mt-3" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}
export default CartPage;