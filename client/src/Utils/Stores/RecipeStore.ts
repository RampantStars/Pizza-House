import { create } from 'zustand';
import { IRecipeCreateModify, IRecipeStore } from '../interface/interface';
import { Error, Recipe } from '../types/types';
import ky from 'ky';

export const useRecipeStore = create<IRecipeStore>()((set) => ({
  recipes: [],
  Error: {} as Error,
  fetchRecipes: async () => {
    try {
      const recipes: Recipe[] = await ky.get('http://localhost:5000/recipe').json();
      set({ recipes: [...recipes] });
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  createRecipe: async (data: FormData) => {
    try {
      const recipe: Recipe = await ky
        .post('http://localhost:5000/recipe', {
          body: data,
        })
        .json();
      set((state) => ({ recipes: [...state.recipes, { ...recipe }] }));
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
}));
