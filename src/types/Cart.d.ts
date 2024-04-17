type Cart = {
  items: {
    id: string;
    deliveryDate: string;
    vendor: { name: string; picture: string };
    meal: {
      id: number;
      quantity: number;
      price: number;
      name: string;
      description: string;
      picture: string;
      additives: { name: string; price: number }[];
    };
    price?: number;
  }[];
  totalPrice: number;
};

type CartHooks = {
  cart: Cart;
  removeItem: (id: string, price: number) => void;
  increaseQuantity: (id: string) => void;
  reduceQuantity: (id: string) => void;
  addItem: (v: Cart['items'][0]) => void;
  getDeliveryFee: () => number;
};
