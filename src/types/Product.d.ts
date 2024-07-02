type Product = {
  id: number;
  name: string;
  quantity: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  amount: number;
  description?: string;
  createdAt?: string;
};
