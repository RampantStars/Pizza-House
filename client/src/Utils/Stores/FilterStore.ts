import { create } from 'zustand';
import { Filter } from '../types/types';

interface IFilterStore {
  search: string;
  filters: Filter[];
  currentFilter: Filter;
  setSearch: (text: string) => void;
  selectedFilter: (obj: Filter) => void;
}

export const useFilterStore = create<IFilterStore>()((set, get) => ({
  search: '',
  filters: [
    { name: 'Популярности ↑', sortProperty: 'rating', sortOrder: 'asc' },
    { name: 'Популярности ↓', sortProperty: 'rating', sortOrder: 'desc' },
    { name: 'Цене ↑', sortProperty: 'price', sortOrder: 'asc' },
    { name: 'Цене ↓', sortProperty: 'price', sortOrder: 'desc' },
    { name: 'Алфавиту ↑', sortProperty: 'title', sortOrder: 'desc' },
    { name: 'Алфавиту ↓', sortProperty: 'title', sortOrder: 'asc' },
  ],
  currentFilter: { name: 'Популярности ↑', sortProperty: 'rating', sortOrder: 'asc' },
  setSearch: (text) => {
    set({ search: text });
  },
  selectedFilter: (obj) => {
    set({ currentFilter: { ...obj } });
  },
}));
