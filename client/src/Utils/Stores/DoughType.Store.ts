import { create } from 'zustand';
import { IDoughTypeCreate, IDoughTypeStore } from '../interface/interface';
import { DoughType, Error } from '../types/types';
import ky from 'ky';

export const useDoughTypeStore = create<IDoughTypeStore>()((set, get) => ({
  doughTypes: [] as DoughType[],
  editingDoughType: {} as DoughType,
  isEdit: false,
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
  createDoughType: async (data) => {
    try {
      const doughType: DoughType = await ky
        .post('http://localhost:5000/doughType', { json: data })
        .json();
      set((state) => ({ doughTypes: [...state.doughTypes, { ...doughType }] }));
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  deleteDoughType: async (id: number) => {
    try {
      await ky.delete(`http://localhost:5000/doughType/${id}`).json();
      set((state) => ({
        doughTypes: state.doughTypes.filter((doughType) => doughType.id !== id),
      }));
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  updateDoughType: async (id: number, data: IDoughTypeCreate) => {
    const doughTypeData: DoughType = await ky
      .patch(`http://localhost:5000/doughType/${id}`, {
        json: data,
      })
      .json();
    const newDoughType = get().doughTypes.map((doughType) =>
      doughType.id === doughTypeData.id ? { ...doughTypeData } : doughType,
    );
    set({ doughTypes: [...newDoughType] });
    try {
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  setEdit: async (id: number) => {
    try {
      const doughType: DoughType = await ky.get(`http://localhost:5000/doughType/${id}`).json();
      set({ editingDoughType: { ...doughType } });
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
