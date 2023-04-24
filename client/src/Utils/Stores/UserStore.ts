import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Error, Order, Role, User } from '../types/types';
import ky from 'ky';
import jwtDecode from 'jwt-decode';
import { IRegistration } from '../interface/interface';

interface IResLogIn {
  userId: number;
  roles: Role[];
}

interface IUserStore {
  user: User;
  orders: Order[];
  token: string;
  Error: Error;
  isAuth: boolean;
  registrationUser: (registration: IRegistration) => void;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  fetchOrder: (id: number) => void;
  fetchUser: (id: number) => void;
}

export const useUserStore = create<IUserStore>()(
  persist(
    (set, get) => ({
      user: {} as User,
      orders: [] as Order[],
      token: '',
      Error: {} as Error,
      isAuth: false,
      fetchUser: async (id: number) => {
        try {
          const user: User = await ky.get(`http://localhost:5000/user/${id}`).json();
          if (user) {
            set({ user: { ...user }, Error: {} as Error });
          }
        } catch (error: any) {
          if (error.name === 'HTTPError') {
            const errorJson: Error = await error.response.json();
            set({ Error: { ...errorJson }, user: {} as User });
          }
        }
      },
      fetchOrder: async (id: number) => {
        try {
          const orders: Order[] = await ky.get(`http://localhost:5000/user/${id}/order`).json();
          if (orders) {
            set({ orders: [...orders] });
          }
        } catch (error: any) {
          if (error.name === 'HTTPError') {
            const errorJson: Error = await error.response.json();
            set({ Error: { ...errorJson } });
          }
        }
      },
      logIn: async (email: string, password: string) => {
        try {
          const { fetchUser } = get();
          const { token }: { token: string } = await ky
            .post('http://localhost:5000/auth/login', {
              json: { email, password },
            })
            .json();

          const decodeJwt: IResLogIn = jwtDecode(token);
          fetchUser(decodeJwt.userId);
          set({ isAuth: true, token: token });
        } catch (error: any) {
          if (error.name === 'HTTPError') {
            const errorJson: Error = await error.response.json();
            set({ Error: { ...errorJson } });
          }
          return error;
        }
      },
      registrationUser: async (registration: IRegistration) => {
        try {
          const { fetchUser } = get();
          const { token }: { token: string } = await ky
            .post('http://localhost:5000/auth/registration', {
              json: { ...registration },
            })
            .json();
          const decodeJwt: IResLogIn = jwtDecode(token);
          fetchUser(decodeJwt.userId);
          set({ isAuth: true, token: token });
        } catch (error: any) {
          const errorJson: Error = await error.response.json();
          set({ Error: { ...errorJson } });
          throw errorJson;
        }
      },
      logOut: async () => {
        set({ user: {} as User, isAuth: false });
      },
    }),
    { name: 'user-persist', getStorage: () => sessionStorage },
  ),
);
