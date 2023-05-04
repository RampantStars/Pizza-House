import { create } from 'zustand';
import { IDeleteModal, IModalFramesStore } from '../interface/interface';

export const useModalFramesStore = create<IModalFramesStore>()((set, get) => ({
  recipeModalIsOpen: false,
  sizeModalIsOpen: false,
  deleteModalIsOpen: false,
  ingredientModalIsOpen: false,
  typeIngredientModalIsOpen: false,
  deleteObject: {} as IDeleteModal,
  setIsOpen: (name: string, value: boolean) => set((state) => ({ ...state, [name]: value })),
  setDeleteObject: (ojb: IDeleteModal) => {
    set({ deleteObject: { ...ojb } });
  },
}));
