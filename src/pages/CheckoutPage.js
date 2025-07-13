import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const { cartItems, clearCart } = useContext(CartContext);
  const { placeOrder } = useContext(OrderContext);
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handleCheckout = () => {
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total,
      date: new Date().toISOString(),
    };
    placeOrder(newOrder);
    clearCart();
    navigate('/success');
  };
  return (
    <div className="container mt-4">
      <h2>Checkout Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item, i) => (
              <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} (x{item.quantity}) - ₹{(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <h5>Total: ₹{total.toFixed(2)}</h5>
          <button className="btn btn-success mt-3" onClick={handleCheckout}>Place Order</button>
        </>
      )}
    </div>
  );
}
export default CheckoutPage;