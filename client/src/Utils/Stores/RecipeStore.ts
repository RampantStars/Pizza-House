import { create } from 'zustand';
import { IRecipeEdit, IRecipeStore } from '../interface/interface';
import { Error, Recipe } from '../types/types';
import ky from 'ky';

export const useRecipeStore = create<IRecipeStore>()((set, get) => ({
  recipes: [],
  editingRecipe: {} as Recipe,
  isEdit: false,
  Error: {} as Error,
  fetchRecipes: async () => {
    try {
      const { data, meta }: any = await ky.get('http://localhost:5000/recipe').json();
      console.log('recipes :>> ', data);
      console.log('meta :>> ', meta);
      set({ recipes: [...data] });
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  createRecipe: async (data: FormData) => {
    try {
      const recipe: Recipe = await ky
        .post('http://localhost:5000/recipe', {
          body: data,
        })
        .json();
      set((state) => ({ recipes: [...state.recipes, { ...recipe }] }));
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  updateRecipe: async (id: number, data: FormData) => {
    await ky.patch(`http://localhost:5000/recipe/${id}`, { body: data }).json();
    const recipeData: Recipe = await ky.get(`http://localhost:5000/recipe/${id}`).json();
    console.log('recipeData :>> ', recipeData);
    const newRecipes = get().recipes.map((recipe) =>
      recipe.id === recipeData.id ? { ...recipeData } : { ...recipe },
    );
    console.log('newRecipes :>> ', newRecipes);
    set({ recipes: [...newRecipes] });
    try {
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  setInStock: async (id: number, value: boolean) => {
    await ky
      .patch(`http://localhost:5000/recipe/${id}`, {
        json: { inStock: value },
      })
      .json();
    const recipeData = get().recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, inStock: value } : { ...recipe },
    );
    console.log('recipeData :>> ', recipeData);
    set({ recipes: [...recipeData] });
    try {
    } catch (error: any) {
      const errorJson: Error = await error.response.json();
      set({ Error: { ...errorJson } });
      throw errorJson;
    }
  },
  setEdit: async (id: number) => {
    try {
      const recipe: Recipe = await ky.get(`http://localhost:5000/recipe/${id}`).json();
      set({ editingRecipe: { ...recipe } });
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
