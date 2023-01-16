export type Category = {
  id: string;
  value: string;
};

export type Pizza = {
  id: number;
  imageUrl: string;
  title: string;
  types: number[] | number;
  sizes: number[] | number;
  price: number;
  category: Category[];
  rating: number;
};

export type Filter = {
  name: string;
  sortProperty: 'rating' | 'price' | 'title';
  sortOrder: 'asc' | 'desc';
};

export type PizzaCart = {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  category: Category[];
};

export type CartItem = {
  id: string;
  item: PizzaCart;
  quantity: number;
};
