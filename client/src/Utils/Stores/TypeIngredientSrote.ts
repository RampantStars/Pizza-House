import { create } from 'zustand';
import { ITypeIngredientCreate, ITypeIngredientStore } from '../interface/interface';
import { Error, TypeIngredient } from '../types/types';
import ky from 'ky';

export const useTypeIngredientStore = create<ITypeIngredientStore>()((set, get) => ({
  typeIngredients: [] as TypeIngredient[],
  editingTypeIngredient: {} as TypeIngredient,
  isEdit: false,
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
      const typeIngredientData: TypeIngredient = await ky
        .get(`http://localhost:5000/typeIngredient/${typeIngredient.id}`)
        .json();
      set((state) => ({ typeIngredients: [...state.typeIngredients, { ...typeIngredientData }] }));
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  updateTypeIngredient: async (id, data) => {
    const typeIngredientData: TypeIngredient = await ky
      .patch(`http://localhost:5000/typeIngredient/${id}`, {
        json: data,
      })
      .json();
    const newTypeIngredient = get().typeIngredients.map((typeIngredient) =>
      typeIngredient.id === typeIngredientData.id
        ? { ...typeIngredientData }
        : { ...typeIngredient },
    );
    set({ typeIngredients: [...newTypeIngredient] });
    try {
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  deleteTypeIngredient: async (id) => {
    try {
      await ky.delete(`http://localhost:5000/typeIngredient/${id}`).json();
      set((state) => ({
        typeIngredients: state.typeIngredients.filter((typeIngredient) => typeIngredient.id !== id),
      }));
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  setEdit: async (id: number) => {
    try {
      const typeIngredient: TypeIngredient = await ky
        .get(`http://localhost:5000/typeIngredient/${id}`)
        .json();
      set({ editingTypeIngredient: { ...typeIngredient } });
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
