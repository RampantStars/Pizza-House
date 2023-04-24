import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, PizzaCart } from '../types/types';

interface ICartStore {
  cart: CartItem[];
  addToCart: (newPizza: PizzaCart) => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  getTotalItems: () => number;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
  getItemPrice: (id: string) => number;
  removeCart: () => void;
}

export const useCartStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (newPizza: PizzaCart) => {
        const { cart } = get();
        const itemInCart = cart.find((i) => JSON.stringify(i.item) === JSON.stringify(newPizza));
        const newCart = itemInCart
          ? cart.map((i) =>
              JSON.stringify(i.item) === JSON.stringify(newPizza)
                ? { ...i, quantity: i.quantity + 1 }
                : i,
            )
          : [...cart, { id: nanoid(), item: { ...newPizza }, quantity: 1 }];
        set({ cart: newCart });
      },
      removeFromCart: (id: string) => {
        const newCart = get().cart.filter((i) => i.id !== id);
        set({ cart: newCart });
      },
      incrementQuantity: (id: string) => {
        const newCart = get().cart.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
        );
        set({ cart: newCart });
      },
      decrementQuantity: (id: string) => {
        const newCart = get().cart.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
        );
        set({ cart: newCart });
      },
      removeCart: () => {
        set({ cart: [] });
      },
      // метод для получения общего количества наименований товаров, находящихся в корзине
      getTotalItems: () => get().cart.length,
      // метод для получения общего количества товаров, находящихся в корзине
      getTotalQuantity: () => get().cart.reduce((x, y) => x + y.quantity, 0),
      // метод для получения общей стоимости товаров, находящихся в корзине
      getTotalPrice: () => get().cart.reduce((x, y) => x + y.item.price * y.quantity, 0),
      //метод для получения стоимости товара одного наименования.
      getItemPrice: (id: string) => {
        const itemCart = get().cart.find((i) => i.id === id);
        const totalPrice = itemCart ? itemCart.quantity * itemCart.item.price : 0;
        return totalPrice;
      },
    }),
    { name: 'cart-persist', getStorage: () => sessionStorage },
  ),
);
