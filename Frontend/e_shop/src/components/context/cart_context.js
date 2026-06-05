'use client'
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const taxes = 1.00;

  function addItem(item) {
    setCartItems(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  function removeItem(name) {
    setCartItems(prev => prev.filter(item => item.name !== name));
  }

  function updateQuantityById(id, quantity) {
    setCartItems(prev =>
      prev.map(prod =>
        prod._id === id ? { ...prod, quantity: quantity } : prod
      )
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  useEffect(() => {
    const newSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setSubtotal(newSubtotal);
  }, [cartItems]);

  useEffect(() => {
    setTotal(subtotal > 0 ? taxes + subtotal : 0);
  }, [subtotal, taxes]);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, updateQuantityById, clearCart, subtotal, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}