import { create } from 'zustand';
import { ITypeIngredientCreate, ITypeIngredientStore } from '../interface/interface';
import { Error, TypeIngredient } from '../types/types';
import ky from 'ky';

export const useTypeIngredientStore = create<ITypeIngredientStore>()((set) => ({
  typeIngredients: [],
  Error: {} as Error,
  fetchTypeIngredients: async () => {
    try {
      const typeIngredients: TypeIngredient[] = await ky
        .get('http://localhost:5000/typeIngredient')
        .json();
      set({ typeIngredients: [...typeIngredients] });
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  createTypeIngredient: async (ingredient: ITypeIngredientCreate) => {
    try {
      const typeIngredient: TypeIngredient = await ky
        .post('http://localhost:5000/typeIngredient', { json: ingredient })
        .json();
      set((state) => ({ typeIngredients: [...state.typeIngredients, { ...typeIngredient }] }));
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
}));
