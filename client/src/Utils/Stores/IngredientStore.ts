import { create } from 'zustand';
import { IIngredientStore } from '../interface/interface';
import { Error, Ingredient } from '../types/types';
import ky from 'ky';

export const useIngredientStore = create<IIngredientStore>()((set, get) => ({
  ingredients: [],
  editingIngredient: {} as Ingredient,
  isEdit: false,
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
  deleteIngredient: async (id: number) => {
    try {
      await ky.delete(`http://localhost:5000/ingredient/${id}`).json();
      set((state) => ({
        ingredients: state.ingredients.filter((ingredient) => ingredient.id !== id),
      }));
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  createIngredient: async (ingredientData: FormData) => {
    try {
      const ingredient: Ingredient = await ky
        .post('http://localhost:5000/ingredient', {
          body: ingredientData,
        })
        .json();
      set((state) => ({ ingredients: [...state.ingredients, { ...ingredient }] }));
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  updateIngredient: async (id: number, data: FormData) => {
    await ky.patch(`http://localhost:5000/ingredient/${id}`, { body: data }).json();
    const ingredientData: Ingredient = await ky
      .get(`http://localhost:5000/ingredient/${id}`)
      .json();
    const newIngredients = get().ingredients.map((ingredient) =>
      ingredient.id === ingredientData.id ? { ...ingredientData } : { ...ingredient },
    );
    set({ ingredients: [...newIngredients] });
    try {
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  setEdit: async (id: number) => {
    try {
      const ingredient: Ingredient = await ky.get(`http://localhost:5000/ingredient/${id}`).json();
      set({ editingIngredient: { ...ingredient } });
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  setIsEdit: (value: boolean) => {
    set({ isEdit: value });
  },
}));
