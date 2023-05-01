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

export type Role = {
  id: number;
  value: string;
  description: string;
};

export type Error = {
  statusCode: number;
  message: string;
  error: string;
};

export type TypeIngredient = {
  id: number;
  name: string;
  ingredients: Ingredient[];
};

export type Ingredient = {
  id: number;
  name: string;
  imageUrl: string;
  typeIngredient: TypeIngredient;
};

export type Size = {
  id: number;
  name: string;
  price: number;
  pizzaVariations: PizzaVariation[];
};

export type DoughType = {
  id: number;
  name: string;
  price: number;
  pizzaVariations: PizzaVariation[];
};

export type Recipe = {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
  description: string;
  salePercent: number;
  sizes: Size[];
  doughtTypes: DoughType[];
  ingredients: Ingredient[];
  pizzaVariations: PizzaVariation[];
};

export type AdditionalIngredient = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  weight: number;
  maxCount: number;
  inStock: boolean;
};

export type PizzaVariation = {
  id: number;
  price: number;
  additionalIngredients: AdditionalIngredient[];
  size: Size;
  doughType: DoughType;
  recipe: Recipe;
};

export type OrderLine = {
  id: number;
  price: number;
  quantity: number;
  pizzaVariation: PizzaVariation;
  order: Order;
};

export type OrderStatus = {
  id: number;
  name: string;
  order: Order[];
};

export type Order = {
  id: number;
  price: number;
  date: Date;
  address: string;
  quantityItem: number;
  comment: string;
  user: User;
  orderStatus: OrderStatus;
  orderLines: OrderLine[];
};

export type User = {
  id: number;
  login: string;
  password: string;
  telephone: string;
  FCs: string;
  email: string;
  address: string;
  roles: Role[];
};
