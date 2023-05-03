import { create } from 'zustand';
import { IModalFramesStore } from '../interface/interface';

export const useModalFramesStore = create<IModalFramesStore>()((set, get) => ({
  recipeModalIsOpen: false,
  setRecipeModalIsOpen: () => {
    const { recipeModalIsOpen } = get();
    set({ recipeModalIsOpen: !recipeModalIsOpen });
  },
}));
