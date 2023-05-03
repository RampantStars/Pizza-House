import { create } from 'zustand';
import { IModalFramesStore } from '../interface/interface';

export const useModalFramesStore = create<IModalFramesStore>()((set, get) => ({
  recipeModalIsOpen: false,
  sizeModalIsOpen: false,
  setIsOpen: (name: string, value: boolean) => set((state) => ({ ...state, [name]: value })),
}));
