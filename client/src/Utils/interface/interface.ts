import {
  Category,
  DoughType,
  Error,
  Ingredient,
  Order,
  Recipe,
  Role,
  Size,
  TypeIngredient,
  User,
} from '../types/types';

export interface IRegistration {
  login: string;
  telephone: string;
  FCs: string;
  password: string;
  email: string;
  address?: string;
}

export interface ILogin {
  password: string;
  email: string;
}

export interface IResLogIn {
  userId: number;
  roles: Role[];
}

export interface ISizeCreate {
  value: number;
  price: number;
}

export interface IRecipeCreate {
  name: string;
  price: number;
  image: FileList;
  description: string;
  salePercent: number;
  categories: string[];
  sizes: string[];
  doughTypes: string[];
  ingredients: string[];
}

export interface IIngredientCreate {
  name: string;
  image: FileList;
  typeIngredientId: TypeIngredient;
}

export interface IDeleteModal {
  action: () => void;
  name: string;
}

export interface IModalFramesStore {
  recipeModalIsOpen: boolean;
  sizeModalIsOpen: boolean;
  ingredientModalIsOpen: boolean;
  deleteModalIsOpen: boolean;
  deleteObject: IDeleteModal;
  setIsOpen: (name: string, value: boolean) => void;
  setDeleteObject: (obj: IDeleteModal) => void;
}

export interface ISizeStore {
  sizes: Size[];
  Error: Error;
  createSize: (data: ISizeCreate) => void;
  fetchSizes: () => void;
}

export interface IIngredientStore {
  ingredients: Ingredient[];
  Error: Error;
  fetchIngredients: () => void;
  deleteIngredient: (id: number) => void;
  createIngredient: (data: FormData) => void;
}

export interface ITypeIngredientStore {
  typeIngredients: TypeIngredient[];
  Error: Error;
  fetchTypeIngredients: () => void;
}

export interface IDoughTypeStore {
  doughTypes: DoughType[];
  Error: Error;
  fetchDoughTypes: () => void;
}
export interface ICategoryStore {
  categories: Category[];
  currentCategory: Category;
  isLoad: boolean;
  Error: Error;
  createCategory: (name: string) => void;
  fetchCategories: () => void;
  selectCategory: (category: Category) => void;
  addCategory: (newCategory: Category) => void;
  deleteCategory: (id: string) => void;
  updateCategory: (updateCategory: Category) => void;
}

export interface IUserStore {
  user: User;
  orders: Order[];
  token: string;
  Error: Error;
  isAuth: boolean;
  registrationUser: (registration: IRegistration) => void;
  logIn: (login: ILogin) => void;
  logOut: () => void;
  fetchOrder: (id: number) => void;
  fetchUser: (id: number) => void;
}

export interface IRecipeStore {
  recipes: Recipe[];
  Error: Error;
  fetchRecipes: () => void;
  createRecipe: (data: FormData) => void;
}
