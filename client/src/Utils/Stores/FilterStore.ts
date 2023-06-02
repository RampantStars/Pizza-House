import { create } from 'zustand';
import { Filter } from '../types/types';

interface IFilterStore {
  search: string;
  filters: Filter[];
  currentFilter: Filter;
  currentPage: number;
  setPage: (page: number) => void;
  setSearch: (text: string) => void;
  selectedFilter: (obj: Filter) => void;
}

export const useFilterStore = create<IFilterStore>()((set, get) => ({
  search: '',
  filters: [
    { name: 'Алфавиту ↑', sortProperty: 'name', sortOrder: 'DESC' },
    { name: 'Алфавиту ↓', sortProperty: 'name', sortOrder: 'ASC' },
    { name: 'Цене ↑', sortProperty: 'price', sortOrder: 'ASC' },
    { name: 'Цене ↓', sortProperty: 'price', sortOrder: 'DESC' },
  ],
  currentPage: 1,
  currentFilter: { name: 'Алфавиту ↑', sortProperty: 'name', sortOrder: 'DESC' },
  setSearch: (text) => {
    set({ search: text });
  },
  setPage: (page) => {
    set({ currentPage: page });
  },
  selectedFilter: (obj) => {
    set({ currentFilter: { ...obj } });
  },
}));
