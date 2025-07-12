import React from 'react';
import { Link } from 'react-router-dom';

function OrderSuccessPage() {
  return (
    <div className="container mt-5 text-center">
      <h2 className="text-success">✅ Your order has been placed successfully!</h2>
      <p className="mt-3">Thank you for shopping with us.</p>
      <Link to="/" className="btn btn-primary mt-3">Go to Home</Link>
    </div>
  );
}

export default OrderSuccessPage;
