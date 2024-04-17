/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
//Define the context
const CartContext = createContext<any>({});

const storedCart: Cart = JSON.parse(
  localStorage.getItem('cart') || JSON.stringify({ items: [], totalPrice: 0 })
);
// Create a custom hook to use the cart context
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext<CartHooks>(CartContext);
};
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ ...storedCart });

  const updateStore = () => {
    localStorage.setItem('cart', JSON.stringify({ ...cart }));
  };

  const calcMealPrice = (item: Cart['items'][0]) => {
    let total = 0;
    item.meal.additives.map(
      (a: { price: number }) => (total = total + a.price)
    );

    console.log({ total, price: item.meal.price });

    return (item.meal.quantity * (item.meal.price + total)).toFixed(2);
  };

  // Function to set total
  const getCartTotal = (price: number) => (cart.totalPrice + price).toFixed(2);
  // Function to remove item from cart
  const removeItem = (itemId: string, price: number) => {
    setCart((prevCart: { items: any[] }) => ({
      ...prevCart,
      items: prevCart.items.filter(
        (item: { id: string }) => item.id !== itemId
      ),
      totalPrice: Number(getCartTotal(-price)),
    }));
    updateStore();
  };
  const increaseQuantity = (itemId: string) => {
    const [item] = cart.items.filter(
      (item: { id: string }) => item.id == itemId
    );
    const items = cart.items;
    const indexOf = cart.items.indexOf(item);
    item.meal.quantity = ++item.meal.quantity;
    item.price = Number(calcMealPrice(item));
    items[indexOf] == item;
    console.log(item);
    setCart((prevCart: any) => ({
      ...prevCart,
      items: [...items],
      totalPrice: Number(getCartTotal(item.meal.price)),
    }));
    updateStore();
  };
  const reduceQuantity = (itemId: string) => {
    const [item] = cart.items.filter(
      (item: { id: string }) => item.id == itemId
    );
    if (item.meal.quantity <= 1) return removeItem(itemId, item.meal.price);
    const items = cart.items;
    const indexOf = cart.items.indexOf(item);
    item.meal.quantity = --item.meal.quantity;
    item.price = Number(calcMealPrice(item));
    items[indexOf] == item;

    setCart((prevCart: any) => ({
      ...prevCart,
      items: [...items],
      totalPrice: Number(getCartTotal(-item.meal.price)),
    }));
    updateStore();
  };

  // Function to add item to cart

  const addItem = (cartItem: Cart['items'][0]) => {
    console.log(cartItem);
    setCart((prev: { items: any; totalPrice: number }) => ({
      ...prev,
      items: [
        ...prev.items,
        { ...cartItem, price: Number(calcMealPrice(cartItem)) },
      ],
      totalPrice: Number(calcMealPrice(cartItem)) + prev.totalPrice,
    }));
    updateStore();
  };

  // Function to get delivery fee
  const getDeliveryFee = () => {
    // Implement logic to calculate delivery fee
  };

  // Provide the cart state and functions through the context
  const cartContextValue = {
    cart,
    removeItem,
    increaseQuantity,
    reduceQuantity,
    addItem,
    getDeliveryFee,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
