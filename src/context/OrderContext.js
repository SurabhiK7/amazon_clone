import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const stored = localStorage.getItem('orders');
    return stored ? JSON.parse(stored) : [];
  });
  const { user } = useContext(AuthContext);
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);
  const placeOrder = (newOrder) => {
    if (!user?.username) return;
    const orderWithUser = { ...newOrder, username: user.username };
    setOrders(prev => [...prev, orderWithUser]);
  };
  return (
    <OrderContext.Provider value={{ orders, placeOrder, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};