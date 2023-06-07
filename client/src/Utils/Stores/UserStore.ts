import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Error, Order, OrderStatus, Role, User } from '../types/types';
import ky from 'ky';
import jwtDecode from 'jwt-decode';
import { ILogin, IRegistration, IResLogIn, IUserStore } from '../interface/interface';

export const useUserStore = create<IUserStore>()(
  persist(
    (set, get) => ({
      users: [] as User[],
      user: {} as User,
      orders: [] as Order[],
      orderStatus: [] as OrderStatus[],
      token: '',
      Error: {} as Error,
      isAuth: false,
      roles: [],
      fetchUser: async (id: number) => {
        try {
          const user: User = await ky.get(`http://localhost:5000/user/${id}`).json();
          if (user) {
            set({ user: { ...user }, Error: {} as Error });
          }
          return user;
        } catch (error: any) {
          const errorJson: Error = await error.response.json();
          set({ Error: { ...errorJson } });
          throw errorJson;
        }
      },
      fetchUsers: async () => {
        try {
          const users: User[] = await ky.get(`http://localhost:5000/user`).json();
          set({ users: [...users], Error: {} as Error });
        } catch (error: any) {
          const errorJson: Error = await error.response.json();
          set({ Error: { ...errorJson } });
          throw errorJson;
        }
      },

      fetchOrder: async (id: number) => {
        try {
          const orders: Order[] = await ky.get(`http://localhost:5000/user/${id}/order`).json();
          set({ orders: [...orders] });
        } catch (error: any) {
          const errorJson: Error = await error.response.json();
          set({ Error: { ...errorJson } });
          throw errorJson;
        }
      },
      fetchRole: async () => {
        try {
          const roles: Role[] = await ky.get(`http://localhost:5000/role`).json();
          set({ roles: [...roles] });
        } catch (error: any) {
          const errorJson: Error = await error.response.json();
          set({ Error: { ...errorJson } });
          throw errorJson;
        }
      },
      fetchOrderStatus: async () => {
        try {
          const orderStatus: OrderStatus[] = await ky
            .get(`http://localhost:5000/orderStatus`)
            .json();
          set({ orderStatus: [...orderStatus] });
        } catch (error: any) {
          const errorJson: Error = await error.response.json();
          set({ Error: { ...errorJson } });
          throw errorJson;
        }
      },
      setStatus: async (id: number, statusId: number) => {
        try {
          const orderData: Order = await ky
            .patch(`http://localhost:5000/order/${id}`, { json: { orderStatusId: statusId } })
            .json();
          const newOrder = get().orders.map((order) =>
            order.id === orderData.id ? { ...orderData } : { ...order },
          );
          set({ orders: [...newOrder] });
        } catch (error: any) {
          const errorJson: Error = await error.response.json();
          set({ Error: { ...errorJson } });
          throw errorJson;
        }
      },
      setRole: async (userId, roleId) => {
        try {
          await ky.post(`http://localhost:5000/user/role`, {
            json: { userId: userId, roleId: roleId },
          });
          const userData: User = await ky.get(`http://localhost:5000/user/${userId}`).json();
          set((state) => ({
            users: state.users.map((user) => (user.id === userId ? userData : user)),
          }));
        } catch (error: any) {
          const errorJson: Error = await error.response.json();
          set({ Error: { ...errorJson } });
          throw errorJson;
        }
      },
      removeRole: async (userId, roleId) => {
        try {
          await ky.delete(`http://localhost:5000/user/role`, {
            json: { userId: userId, roleId: roleId },
          });
          const userData: User = await ky.get(`http://localhost:5000/user/${userId}`).json();
          set((state) => ({
            users: state.users.map((user) => (user.id === userId ? userData : user)),
          }));
        } catch (error: any) {
          const errorJson: Error = await error.response.json();
          set({ Error: { ...errorJson } });
          throw errorJson;
        }
      },

      logIn: async (login: ILogin) => {
        const { email, password } = login;
        try {
          const { fetchUser } = get();
          const { token }: { token: string } = await ky
            .post('http://localhost:5000/auth/login', {
              json: { email, password },
            })
            .json();
          const decodeJwt: IResLogIn = jwtDecode(token);
          await fetchUser(decodeJwt.userId);
          set({ isAuth: true, token: token });
        } catch (error: any) {
          const errorJson: Error = await error.response.json();
          set({ Error: { ...errorJson } });
          throw errorJson;
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
          const user: User = await fetchUser(decodeJwt.userId);
          set((state) => ({
            users: [...state.users, { ...user }],
            isAuth: true,
            token: `Bearer ${token}`,
          }));
        } catch (error: any) {
          const errorJson: Error = await error.response.json();
          set({ Error: { ...errorJson } });
          throw errorJson;
        }
      },
      logOut: async () => {
        set({ user: {} as User, isAuth: false, token: '' });
      },
    }),
    { name: 'user-persist', getStorage: () => sessionStorage },
  ),
);
