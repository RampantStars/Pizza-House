import { create } from 'zustand';
import { ICategoryStore } from '../interface/interface';
import { Category, Error } from '../types/types';
import ky from 'ky';

export const useCategoryStore = create<ICategoryStore>()((set, get) => ({
  categories: [],
  Error: {} as Error,
  currentCategory: {} as Category,
  isLoad: true,
  fetchCategories: async () => {
    try {
      const categories: Category[] = await ky.get('http://localhost:5000/category').json();
      set({ categories: [...categories], currentCategory: { ...categories[0] }, isLoad: false });
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  createCategory: async (name: string) => {
    try {
      const category: Category = await ky
        .post('http://localhost:5000/category', {
          json: name,
        })
        .json();
      set((state) => ({ categories: [...state.categories, { ...category }] }));
    } catch (error) {}
  },
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
}));
