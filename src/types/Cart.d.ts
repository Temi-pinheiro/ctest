type Cart = {
  items: {
    id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
  }[];
  wishList: {
    id: string;
    name: string;
    description: string;
    price: number;
    available: boolean;
  }[];
  totalPrice: number;
};

type CartHooks = {
  cart: Cart;
  removeItemFromCart: (id: string, price: number) => void;
  removeItemFromWishlist: (id: string) => void;
  increaseQuantity: (id: string) => void;
  reduceQuantity: (id: string) => void;
  addItemToCart: (v: Cart['items'][0]) => void;
  addItemtoWishlist: (v: Cart['wishList'][0]) => void;
};
