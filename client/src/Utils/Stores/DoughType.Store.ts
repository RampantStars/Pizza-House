import { create } from 'zustand';
import { IDoughTypeStore } from '../interface/interface';
import { DoughType, Error } from '../types/types';
import ky from 'ky';

export const useDoughTypeStore = create<IDoughTypeStore>()((set) => ({
  doughTypes: [],
  Error: {} as Error,
  fetchDoughTypes: async () => {
    try {
      const doughTypes: DoughType[] = await ky.get('http://localhost:5000/doughType').json();
      set({ doughTypes: [...doughTypes] });
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
}));
