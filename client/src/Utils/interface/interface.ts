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

export interface IDoughTypeCreate {
  name: string;
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

export interface IRecipeEdit {
  name: string;
  price: number;
  image: string;
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

export interface ITypeIngredientCreate {
  name: string;
}

export interface IDeleteModal {
  action: () => void;
  name: string;
}

export interface IModalFramesStore {
  recipeModalIsOpen: boolean;
  sizeModalIsOpen: boolean;
  ingredientModalIsOpen: boolean;
  typeIngredientModalIsOpen: boolean;
  doughTypeModalIsOpen: boolean;
  deleteModalIsOpen: boolean;
  categoryModalIsOpen: boolean;
  deleteObject: IDeleteModal;
  setIsOpen: (name: string, value: boolean) => void;
  setDeleteObject: (obj: IDeleteModal) => void;
}

export interface ISizeStore {
  sizes: Size[];
  editingSize: Size;
  isEdit: boolean;
  Error: Error;
  fetchSizes: () => void;
  createSize: (data: ISizeCreate) => void;
  deleteSize: (id: number) => void;
  updateSize: (id: number, data: ISizeCreate) => void;
  setEdit: (id: number) => void;
  setIsEdit: (value: boolean) => void;
}

export interface IIngredientStore {
  ingredients: Ingredient[];
  editingIngredient: Ingredient;
  isEdit: boolean;
  Error: Error;
  fetchIngredients: () => void;
  deleteIngredient: (id: number) => void;
  createIngredient: (data: FormData) => void;
  updateIngredient: (id: number, data: FormData) => void;
  setEdit: (id: number) => void;
  setIsEdit: (value: boolean) => void;
}

export interface ITypeIngredientStore {
  typeIngredients: TypeIngredient[];
  editingTypeIngredient: TypeIngredient;
  isEdit: boolean;
  Error: Error;
  fetchTypeIngredients: () => void;
  createTypeIngredient: (ingredient: ITypeIngredientCreate) => void;
  deleteTypeIngredient: (id: number) => void;
  updateTypeIngredient: (id: number, data: ITypeIngredientCreate) => void;
  setEdit: (id: number) => void;
  setIsEdit: (value: boolean) => void;
}

export interface IDoughTypeStore {
  doughTypes: DoughType[];
  editingDoughType: DoughType;
  isEdit: boolean;
  Error: Error;
  fetchDoughTypes: () => void;
  createDoughType: (data: IDoughTypeCreate) => void;
  deleteDoughType: (id: number) => void;
  updateDoughType: (id: number, data: IDoughTypeCreate) => void;
  setEdit: (id: number) => void;
  setIsEdit: (value: boolean) => void;
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
  deleteCategory: (id: number) => void;
  updateCategory: (updateCategory: Category) => void;
}

export interface IUserStore {
  users: User[];
  roles: Role[];
  user: User;
  orders: Order[];
  token: string;
  Error: Error;
  isAuth: boolean;
  registrationUser: (registration: IRegistration) => void;
  logIn: (login: ILogin) => void;
  logOut: () => void;
  fetchOrder: (id: number) => void;
  fetchUser: (id: number) => Promise<User>;
  fetchRole: () => void;
  fetchUsers: () => void;
  setRole: (userId: number, roleId: number) => void;
  removeRole: (userId: number, roleId: number) => void;
}

export interface IRecipeStore {
  recipes: Recipe[];
  editingRecipe: Recipe;
  isEdit: boolean;
  Error: Error;
  fetchRecipes: () => void;
  createRecipe: (data: FormData) => void;
  updateRecipe: (id: number, data: FormData) => void;
  setInStock: (id: number, value: boolean) => void;
  setEdit: (id: number) => void;
  setIsEdit: (value: boolean) => void;
}
