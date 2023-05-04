import { create } from 'zustand';
import { ITypeIngredientStore } from '../interface/interface';
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
}));
