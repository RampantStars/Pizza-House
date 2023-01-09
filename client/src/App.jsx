import React from 'react';
import { Route, Routes } from 'react-router-dom';
import shallow from 'zustand/shallow';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';

import styles from './app.module.scss';
import { categoryStore } from './Utils/Store/Store';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className={styles.container}>
      <div className={styles.App}>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
