import { create } from 'zustand';
import { ISizeStore } from '../interface/interface';
import ky from 'ky';
import { Error, Size } from '../types/types';

export const useSizeStore = create<ISizeStore>()((set) => ({
  sizes: [],
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
}));
