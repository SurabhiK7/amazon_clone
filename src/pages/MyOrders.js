import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import { AuthContext } from '../context/AuthContext';

function MyOrders() {
  const { orders, setOrders } = useContext(OrderContext);
  const { user } = useContext(AuthContext);

  const handleDeleteOrders = () => {
    const isConfirmed = window.confirm(
      user?.username
        ? "Are you sure you want to delete your order history?"
        : "No user is signed in. This will delete ALL order history. Continue?"
    );

    if (isConfirmed) {
      if (user?.username) {
        const filtered = orders.filter(order => order.username !== user.username);
        setOrders(filtered);
        localStorage.setItem('orders', JSON.stringify(filtered));
      } else {
        setOrders([]);
        localStorage.removeItem('orders');
      }
    }
  };

  const visibleOrders = user
    ? orders.filter(order => order.username === user.username)
    : orders;

  return (
    <div className="container mt-4">
      <h2 className="mb-4 d-flex justify-content-between align-items-center">
        My Orders
        {visibleOrders.length > 0 && (
          <button onClick={handleDeleteOrders} className="btn btn-danger btn-sm">
            Delete Order History
          </button>
        )}
      </h2>

      {visibleOrders.length === 0 ? (
        <p>No past orders found.</p>
      ) : (
        <div className="accordion" id="orderAccordion">
          {[...visibleOrders].reverse().map((order, index) => (
            <div className="accordion-item" key={order.id}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                >
                  Order #{order.id} - {new Date(order.date).toLocaleString()}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#orderAccordion"
              >
                <div className="accordion-body">
                  <ul className="list-group">
                    {order.items.map((item, i) => (
                      <li
                        key={i}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <div>
                          <strong>{item.title}</strong> <br />
                          Quantity: {item.quantity} <br />
                          Price: ₹{item.price.toFixed(2)} <br />
                          Total: ₹{(item.price * item.quantity).toFixed(2)}
                        </div>
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{
                              width: '60px',
                              height: '60px',
                              objectFit: 'contain',
                            }}
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                  <hr />
                  <h6 className="text-end">
                    Order Total: ₹{order.total.toFixed(2)}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyOrders;
