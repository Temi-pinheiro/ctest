/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
//Define the context
const CartContext = createContext<any>({});

const storedCart: Cart = JSON.parse(
  localStorage.getItem('cart') ||
    JSON.stringify({ items: [], totalPrice: 0, wishList: [] })
);
// Create a custom hook to use the cart context
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext<CartHooks>(CartContext);
};
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ ...storedCart });

  const updateStore = () => {
    localStorage.setItem('cc_cart', JSON.stringify({ ...cart }));
  };

  // Function to set total
  const getCartTotal = (price: number) => (cart.totalPrice + price).toFixed(2);

  // Function to remove item from cart
  const removeItemFromCart = (itemId: string, price: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      items: prevCart.items.filter(
        (item: { id: string }) => item.id !== itemId
      ),
      totalPrice: prevCart.totalPrice - price,
    }));
    updateStore();
  };

  // Function to remove item from wishlist

  const removeItemFromWishlist = (itemId: string) => {
    setCart((prevCart) => ({
      ...prevCart,
      wishList: prevCart.wishList.filter(
        (item: { id: string }) => item.id !== itemId
      ),
    }));
    updateStore();
  };

  // Function to increase quantity of an item in cart

  const increaseQuantity = (itemId: string) => {
    const [item] = cart.items.filter(
      (item: { id: string }) => item.id == itemId
    );
    const items = cart.items;
    const indexOf = cart.items.indexOf(item);
    item.quantity = ++item.quantity;
    item.price = item.quantity * item.price;
    items[indexOf] == item;
    console.log(item);
    setCart((prevCart: any) => ({
      ...prevCart,
      items: [...items],
      totalPrice: Number(getCartTotal(item.price)),
    }));
    updateStore();
  };

  // Function to reduce quantity of an item in  cart

  const reduceQuantity = (itemId: string) => {
    const [item] = cart.items.filter(
      (item: { id: string }) => item.id == itemId
    );
    if (item.quantity <= 1) return removeItemFromCart(itemId, item.price);
    const items = cart.items;
    const indexOf = cart.items.indexOf(item);
    item.quantity = --item.quantity;
    item.price = item.quantity * item.price;
    items[indexOf] == item;

    setCart((prevCart: any) => ({
      ...prevCart,
      items: [...items],
      totalPrice: Number(getCartTotal(-item.price)),
    }));
    updateStore();
  };

  // Function to add item to cart

  const addItemToCart = (cartItem: Cart['items'][0]) => {
    setCart((prev) => ({
      ...prev,
      items: [...prev.items, { ...cartItem }],
      totalPrice: cartItem.price + prev.totalPrice,
    }));
    updateStore();
  };

  // Function to add item to wishlist

  const addItemtoWishlist = (wishListItem: Cart['wishList'][0]) => {
    console.log({ cart });
    setCart((prev) => ({
      ...prev,
      wishList: [...prev.wishList, { ...wishListItem }],
    }));
    updateStore();
  };

  // Provide the cart state and functions through the context
  const cartContextValue = {
    cart,
    removeItemFromCart,
    removeItemFromWishlist,
    increaseQuantity,
    reduceQuantity,
    addItemtoWishlist,
    addItemToCart,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
