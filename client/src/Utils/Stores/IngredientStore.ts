import { create } from 'zustand';
import { IIngredientStore } from '../interface/interface';
import { Error, Ingredient } from '../types/types';
import ky from 'ky';

export const useIngredientStore = create<IIngredientStore>()((set) => ({
  ingredients: [],
  Error: {} as Error,
  fetchIngredients: async () => {
    try {
      const ingredients: Ingredient[] = await ky.get('http://localhost:5000/ingredient').json();
      set({ ingredients: [...ingredients] });
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
}));
