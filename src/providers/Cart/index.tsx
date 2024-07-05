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
  const { isAuthenticated, clearAuth } = useAuth();

  const [cart, setCart] = useState<Cart>({ ...storedCart });
  const [addingId, setAddingId] = useState();
  const [removingId, setRemovingId] = useState();
  const updateStore = (data: any) => {
    if (isAuthenticated) return;
    localStorage.setItem('cowas_cart', JSON.stringify({ ...cart, ...data }));
  };
  const { refetch } = useQuery<any>({
    enabled: isAuthenticated,
    queryKey: ['cart'],
    queryFn: async () => {
      try {
        const data = await getCart();
        setCart(data.cart ?? { items: [], bill: 0 });
        return data;
      } catch (error: any) {
        if (error?.status == 401) {
          clearAuth();
        } else {
          toast.error(error.data.message);
        }
      }
    },
    ...{ refetchOnMount: false, refetchOnWindowFocus: false },
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
      onError(err) {
        toast.error(err?.message);
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
        items: prevCart.items?.filter(
          (item) => item.itemId.toString() !== id.toString()
        ),
        bill: (Number(prevCart.bill) - price).toString(),
      }));
      updateStore({
        items: cart.items?.filter((item) => item.itemId.toString() !== id),
        bill: Number(cart.bill) - price,
      });
    }
  };
  const { mutate: addItemtoCart, isPending: adding } = useMutation<
    any,
    any,
    any,
    unknown
  >({
    mutationFn: (data: any) => addToCart(data),
    ...{
      onSuccess() {
        refetch();
      },
      onError(err) {
        toast.error(err?.message);
        return false;
      },
    },
  });
  const updateQuantity = (data: any) => {
    const itemIndex = cart.items.findIndex((i) => i.itemId == data.itemId);
    if (itemIndex !== -1) {
      const updatedItems = [...cart.items];
      const item = updatedItems[itemIndex];
      const newBill = cart.items.reduce(
        (acc, item) =>
          acc +
          (item.itemId === data.itemId
            ? data.quantity * item.price
            : item.quantity * item.price),
        0
      );

      updatedItems[itemIndex] = { ...item, quantity: data.quantity };
      try {
        console.log('updating');
        console.log({ updatedItems, newBill });
        setCart((prev) => ({
          ...prev,
          items: updatedItems,
          bill: newBill.toString(),
        }));
      } catch (e) {
        console.log(e);
      }
      // setTimeout(() => {
      updateStore({
        items: updatedItems,
        bill: newBill,
      });
      // }, 1000);
    }
  };
  const add = (data: any) => {
    if (isAuthenticated) {
      setAddingId(data.itemId);
      addItemtoCart({
        itemId: data.itemId,
        quantity: data.quantity,
      });
    } else {
      const [item] = cart.items.filter((i) => i.itemId == data.itemId);
      if (item) return updateQuantity(data);
      try {
        setCart((prev) => ({
          ...prev,
          items: [...prev.items, { ...data, price: data.price }],
          bill: (
            Number(data.price * data.quantity) + Number(prev.bill)
          ).toString(),
        }));
      } catch (e) {
        console.log(e);
      }
      updateStore({
        items: [...cart.items, { ...data, price: data.price }],
        bill: Number(data.price * data.quantity) + Number(cart.bill),
      });
    }
  };

  // Function to set total
  const getCartTotal = (price: number) =>
    (Number(cart.bill) + price).toFixed(2);

  // Function to remove item from wishlist

  const resetCart = () => {
    setCart({ ...storedCart });
  };
  const clearCart = () => {
    localStorage.removeItem('cowas_cart');
    const c: any = { items: [], bill: 0 };
    setCart(c);
  };

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
    setCart((prevCart: any) => ({
      ...prevCart,
      items: [...items],
      bill: Number(getCartTotal(item.price)),
    }));
    updateStore({ items: [...items], bill: Number(getCartTotal(item.price)) });
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
      bill: Number(getCartTotal(-item.price)),
    }));
    updateStore({ items: [...items], bill: Number(getCartTotal(-item.price)) });
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
    refetch,
    resetCart,
    clearCart,
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
