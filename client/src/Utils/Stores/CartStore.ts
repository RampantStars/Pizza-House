import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Order, OrderLine, PizzaVariation } from '../types/types';
import ky from 'ky';

interface ICartStore {
  cart: CartItem[];
  addToCart: (newPizza: PizzaVariation) => void;
  removeFromCart: (id: string) => void;
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  getTotalItems: () => number;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
  getItemPrice: (id: string) => number;
  removeCart: () => void;
  createRecipeVariation: (item: PizzaVariation) => Promise<PizzaVariation>;
  createOrderLine: (item: CartItem) => Promise<OrderLine>;
  createOrder: (item: Order) => void;
}

type Line = {
  quantity: number;
  pizzaVariation: PizzaVariation;
};

export const useCartStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (newPizza: PizzaVariation) => {
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
      //метод для получения стоимости товара одного наименования.
      getItemPrice: (id: string) => {
        const itemCart = get().cart.find((i) => i.id === id);
        let price = itemCart
          ? itemCart.item.size.price + itemCart.item.doughType.price + itemCart.item.recipe.price
          : 0;
        price = itemCart?.item?.additionalIngredients
          ? itemCart.item.additionalIngredients?.reduce((acc, x) => acc + x.price, price)
          : price;
        const totalPrice = itemCart ? itemCart.quantity * price : 0;
        return totalPrice;
      },
      // метод для получения общей стоимости товаров, находящихся в корзине
      getTotalPrice: () => get().cart.reduce((x, y) => get().getItemPrice(y.id) + x, 0),
      createOrderLine: async (item: CartItem) => {
        try {
          const pizzaVariation: PizzaVariation = await get().createRecipeVariation(item.item);
          const line: Line = {} as Line;
          line.pizzaVariation = { ...pizzaVariation };
          line.quantity = item.quantity;
          const orderLine: OrderLine = await ky
            .post('http://localhost:5000/orderLine', { json: line })
            .json<OrderLine>();
          return orderLine;
        } catch (error: any) {
          throw error;
        }
      },
      createOrder: async (item: Order) => {
        try {
          await ky.post('http://localhost:5000/order', { json: { ...item } }).json<Order>();
        } catch (error: any) {
          throw error;
        }
      },
      createRecipeVariation: async (item: PizzaVariation): Promise<PizzaVariation> => {
        try {
          const pizzaVariation: PizzaVariation = await ky
            .post('http://localhost:5000/pizzaVariation', { json: { ...item } })
            .json<PizzaVariation>();
          console.log('item :>> ', pizzaVariation);
          return pizzaVariation;
        } catch (error: any) {
          throw error;
        }
      },
    }),
    { name: 'cart-persist', getStorage: () => sessionStorage },
  ),
);
