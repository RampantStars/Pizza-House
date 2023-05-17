import { create } from 'zustand';
import { ISizeCreate, ISizeStore } from '../interface/interface';
import ky from 'ky';
import { Error, Size } from '../types/types';

export const useSizeStore = create<ISizeStore>()((set, get) => ({
  sizes: [],
  editingSize: {} as Size,
  isEdit: false,
  Error: {} as Error,
  fetchSizes: async () => {
    try {
      const sizes: Size[] = await ky.get('http://localhost:5000/size').json();
      set({ sizes: [...sizes] });
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  createSize: async (data: ISizeCreate) => {
    const size: Size = await ky
      .post('http://localhost:5000/size', { json: { name: data.value + 'см', price: data.price } })
      .json();
    set((state) => ({
      sizes: [...state.sizes, { ...size }].sort((sizeF, sizeS) =>
        sizeF.name.localeCompare(sizeS.name),
      ),
    }));
    try {
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  deleteSize: async (id: number) => {
    try {
      await ky.delete(`http://localhost:5000/size/${id}`).json();
      set((state) => ({
        sizes: state.sizes.filter((size) => size.id !== id),
      }));
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  updateSize: async (id: number, data: ISizeCreate) => {
    const sizeData: Size = await ky
      .patch(`http://localhost:5000/size/${id}`, {
        json: { name: data.value + 'см', price: data.price },
      })
      .json();
    const newSize = get().sizes.map((size) => (size.id === sizeData.id ? { ...sizeData } : size));
    set({ sizes: [...newSize] });
    try {
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  setEdit: async (id: number) => {
    try {
      const size: Size = await ky.get(`http://localhost:5000/size/${id}`).json();
      set({ editingSize: { ...size } });
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
