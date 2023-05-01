import { Error, Order, Role, User } from '../types/types';

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
