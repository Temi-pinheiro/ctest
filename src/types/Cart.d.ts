type Cart = {
  bill: string;
  createdAt: string;
  id: number;
  items: {
    itemId: number;
    name: string;
    image: string[];
    quantity: number;
    price: number;
  }[];
  unique_id: null;
  updatedAt: string;
  user_id: number;
};

type CartHooks = {
  cart: Cart;
  resetCart: () => void;
  removeItemFromCart: {
    remove: (id: number, price: number) => void;
    removing: (id: number) => boolean;
  };
  addItemtoCart: {
    add: (
      data:
        | { itemId: number; quantity: number }
        | {
            itemId: number;
            name: string;
            image: string[];
            quantity: number;
            price: number;
          }
    ) => void;
    adding: (id: number) => boolean;
  };
  increaseQuantity: (id: string) => void;
  reduceQuantity: (id: string) => void;
};
