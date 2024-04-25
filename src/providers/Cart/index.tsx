/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { useAuth } from '../AuthProvider';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getCart } from '../../queries/cartQueries';
import { addToCart, removeFromCart } from '../../mutations/cartMutations';
//Define the context
const CartContext = createContext<any>({});

const storedCart: Cart = JSON.parse(
  localStorage.getItem('cowas_cart') || JSON.stringify({ items: [], bill: 0 })
);
// Create a custom hook to use the cart context
// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  return useContext<CartHooks>(CartContext);
};
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  console.log({ isAuthenticated });
  const [cart, setCart] = useState<Cart>({ ...storedCart });
  const [addingId, setAddingId] = useState();
  const [removingId, setRemovingId] = useState();
  const { refetch } = useQuery<any>({
    enabled: isAuthenticated,
    queryKey: ['cart'],
    queryFn: async () => {
      const data = await getCart();
      setCart(data.cart ?? { items: [], bill: 0 });
      return data;
    },
    ...{
      throwOnError() {
        toast.error('problem with cart');
        return false;
      },
    },
  });
  const { mutate: removeItemFromCart, isPending: removing } = useMutation<
    any,
    any,
    string,
    unknown
  >({
    mutationFn: (id) => removeFromCart(id),
    ...{
      onSuccess() {
        refetch();
      },
      throwOnError() {
        toast.error('problem with removing');

        return false;
      },
    },
  });
  const remove = (id: any, price: number) => {
    if (isAuthenticated) {
      setRemovingId(id);
      removeItemFromCart(id);
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        items: prevCart.items?.filter((item) => item.itemId.toString() !== id),
        totalPrice: Number(prevCart.bill) - price,
      }));
      updateStore();
    }
  };
  const { mutate: addItemtoCart, isPending: adding } = useMutation<
    any,
    any,
    string,
    unknown
  >({
    mutationFn: (data: any) => addToCart(data),
    ...{
      onSuccess() {
        refetch();
      },
      throwOnError(err) {
        console.log(err);
        toast.error('problem with adding');
        return false;
      },
    },
  });

  const add = (data: any) => {
    if (isAuthenticated) {
      setAddingId(data.itemId);
      addItemtoCart(data);
    } else {
      setCart((prev) => ({
        ...prev,
        items: [...prev.items, { ...data }],
        totalPrice: data.price + prev.bill,
      }));
      updateStore();
    }
  };

  const updateStore = () => {
    if (isAuthenticated) return;
    localStorage.setItem('cc_cart', JSON.stringify({ ...cart }));
  };

  // Function to set total
  const getCartTotal = (price: number) =>
    (Number(cart.bill) + price).toFixed(2);

  // Function to remove item from wishlist

  // Function to increase quantity of an item in cart

  const increaseQuantity = (itemId: string) => {
    const [item] = cart.items.filter(
      (item) => item.itemId.toString() == itemId
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
      (item) => item.itemId.toString() == itemId
    );
    // if (item.quantity <= 1) return removeItemFromCart(itemId);
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

  // const addItemToCart = (cartItem: Cart['items'][0]) => {
  //   setCart((prev) => ({
  //     ...prev,
  //     items: [...prev.items, { ...cartItem }],
  //     totalPrice: cartItem.price + prev.bill,
  //   }));
  //   updateStore();
  // };
  // Function to add item to wishlist

  // Provide the cart state and functions through the context
  const cartContextValue = {
    cart,
    removeItemFromCart: {
      remove,
      removing: (id: number) => id == removingId && removing,
    },
    addItemtoCart: {
      add,
      adding: (id: number) => id == addingId && adding,
    },
    increaseQuantity,
    reduceQuantity,
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
