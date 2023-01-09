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
      category: [
        { id: '0', value: 'Все' },
        { id: '1', value: 'Мясные' },
        { id: '2', value: 'Вегетарианская' },
        { id: '3', value: 'Гриль' },
        { id: '4', value: 'Острые' },
        { id: '5', value: 'Закрытые' },
      ],
      currentCategory: { id: '0', value: 'Все' },

      selectCategory: (id) => {
        set({ currentCategory: get().category[+id] });
      },
    }),
    { name: 'Category-Store', getStorage: () => sessionStorage },
  ),
);
