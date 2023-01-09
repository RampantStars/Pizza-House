import create from 'zustand';
import { persist } from 'zustand/middleware';

// type Category = {
//   id: string,
//   value: string,
// };

// interface ICategoryStore {
//   category: Category[];
//   currentCategory: Category;
// }

export const categoryStore = create(
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

      selectCategory: (id) => {
        set({ currentCategory: get().categories[id] });
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
