import { create } from 'zustand';
import { IAdditionalIngredientStore } from '../interface/interface';
import { AdditionalIngredient, Error } from '../types/types';
import ky from 'ky';

export const useAdditionalIngredientStore = create<IAdditionalIngredientStore>()((set, get) => ({
  additionalIngredients: [],
  editingAdditionalIngredient: {} as AdditionalIngredient,
  isEdit: false,
  Error: {} as Error,
  fetchAdditionalIngredients: async () => {
    try {
      const additionalIngredients: AdditionalIngredient[] = await ky
        .get('http://localhost:5000/additionalIngredient')
        .json();
      set({ additionalIngredients: [...additionalIngredients] });
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  deleteAdditionalIngredient: async (id: number) => {
    try {
      await ky.delete(`http://localhost:5000/additionalIngredient/${id}`).json();
      set((state) => ({
        additionalIngredients: state.additionalIngredients.filter(
          (additionalIngredient) => additionalIngredient.id !== id,
        ),
      }));
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  createAdditionalIngredient: async (additionalIngredientData: FormData) => {
    try {
      const additionalIngredient: AdditionalIngredient = await ky
        .post('http://localhost:5000/additionalIngredient', {
          body: additionalIngredientData,
        })
        .json();
      set((state) => ({
        additionalIngredients: [...state.additionalIngredients, { ...additionalIngredient }],
      }));
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  updateAdditionalIngredient: async (id: number, data: FormData) => {
    await ky.patch(`http://localhost:5000/additionalIngredient/${id}`, { body: data });
    const additionalIngredientData: AdditionalIngredient = await ky
      .get(`http://localhost:5000/additionalIngredient/${id}`)
      .json();
    const newAdditionalIngredients = get().additionalIngredients.map((additionalIngredient) =>
      additionalIngredient.id === additionalIngredientData.id
        ? { ...additionalIngredientData }
        : { ...additionalIngredient },
    );
    set({ additionalIngredients: [...newAdditionalIngredients] });
    try {
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  setEdit: async (id: number) => {
    try {
      const additionalIngredient: AdditionalIngredient = await ky
        .get(`http://localhost:5000/additionalIngredient/${id}`)
        .json();
      set({ editingAdditionalIngredient: { ...additionalIngredient } });
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
