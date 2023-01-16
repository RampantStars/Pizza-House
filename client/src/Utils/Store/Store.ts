import { nanoid } from 'nanoid';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Category, Filter, PizzaCart } from '../types/types';

interface ICategoryStore {
  categories: Category[];
  currentCategory: Category;
  selectCategory: (category: Category) => void;
  addCategory: (newCategory: Category) => void;
  deleteCategory: (id: string) => void;
  updateCategory: (updateCategory: Category) => void;
}

export const categoryStore = create<ICategoryStore>()(
  persist(
    (set, get) => ({
      categories: [
        { id: '0', value: 'Все' },
        { id: '1', value: 'Мясные' },
        { id: '2', value: 'Вегетарианская' },
        { id: '3', value: 'Гриль' },
        { id: '4', value: 'Острые' },
        { id: '5', value: 'Закрытые' },
      ],
      currentCategory: { id: '0', value: 'Все' },

      selectCategory: (category) => {
        set({ currentCategory: category });
      },

      addCategory: (newCategory) => {
        set({ categories: [...get().categories, newCategory] });
      },

      deleteCategory: (id) => {
        set((state) => ({ categories: state.categories.filter((category) => category.id !== id) }));
      },

      updateCategory: (updateCategory) => {
        set((state) => ({
          categories: state.categories.map((category) =>
            category.id === updateCategory.id ? updateCategory : category,
          ),
        }));
      },
    }),
    { name: 'Category-Store', getStorage: () => sessionStorage },
  ),
);

interface IFilterStore {
  search: string;
  filters: Filter[];
  currentFilter: Filter;
  setSearch: (text: string) => void;
  selectedFilter: (id: number) => void;
}

export const filterStore = create<IFilterStore>()((set, get) => ({
  search: ' ',
  filters: [
    { name: 'Популярности ↑', sortProperty: 'rating', sortOrder: 'asc' },
    { name: 'Популярности ↓', sortProperty: 'rating', sortOrder: 'desc' },
    { name: 'Цене ↑', sortProperty: 'price', sortOrder: 'asc' },
    { name: 'Цене ↓', sortProperty: 'price', sortOrder: 'desc' },
    { name: 'Алфавиту ↑', sortProperty: 'title', sortOrder: 'desc' },
    { name: 'Алфавиту ↓', sortProperty: 'title', sortOrder: 'asc' },
  ],
  currentFilter: { name: 'Популярности ↑', sortProperty: 'rating', sortOrder: 'asc' },
  setSearch: (text) => {
    set({ search: text });
  },
  selectedFilter: (id) => {
    set({ currentFilter: get().filters[id] });
  },
}));

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

export const cartStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (newPizza: PizzaCart) => {
        const { cart } = get();
        const itemInCart = cart.find(
          (i) =>
            i.item.id === newPizza.id &&
            i.item.size === newPizza.size &&
            i.item.type === newPizza.type,
        );
        const newCart = itemInCart
          ? cart.map((i) =>
              i.item.id === newPizza.id &&
              i.item.size === newPizza.size &&
              i.item.type === newPizza.type
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
