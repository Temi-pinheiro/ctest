type Order = {
  id: number;
  user_id: number;
  trx_id: string;
  order_id: string;
  items: {
    itemId: number;
    name: string;
    image: string;
    quantity: number;
    price: number;
  }[];
  amount: number;
  address: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};
