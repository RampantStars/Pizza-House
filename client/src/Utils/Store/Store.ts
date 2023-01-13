import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Category = {
  id: string;
  value: string;
};

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

type Filter = {
  name: string;
  sortProperty: 'rating' | 'price' | 'title';
  sortOrder: 'asc' | 'desc';
};

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
