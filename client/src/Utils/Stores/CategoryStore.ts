import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Category } from '../types/types';

interface ICategoryStore {
  categories: Category[];
  currentCategory: Category;
  selectCategory: (category: Category) => void;
  addCategory: (newCategory: Category) => void;
  deleteCategory: (id: string) => void;
  updateCategory: (updateCategory: Category) => void;
}

export const useCategoryStore = create<ICategoryStore>()(
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
