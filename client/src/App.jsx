import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { Header } from './components/Header';
import { Registration } from './pages/Registration';
import { ToastContainer } from 'react-toastify';

import styles from './app.module.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Login } from './pages/Login';
import { User } from './pages/User';
import { Admin } from './pages/Admin';
import { useCategoryStore } from './Utils/Stores/CategoryStore';
import { useSizeStore } from './Utils/Stores/SizeStore';
import { useDoughTypeStore } from './Utils/Stores/DoughType.Store';
import { useIngredientStore } from './Utils/Stores/IngredientStore';
import { useTypeIngredientStore } from './Utils/Stores/TypeIngredientSrote';

export const SearchContext = React.createContext();

function App() {
  const fetchCategories = useCategoryStore((state) => state.fetchCategories);
  const fetchSizes = useSizeStore((state) => state.fetchSizes);
  const fetchDoughTypes = useDoughTypeStore((state) => state.fetchDoughTypes);
  const fetchIngredients = useIngredientStore((state) => state.fetchIngredients);
  const fetchTypeIngredients = useTypeIngredientStore((state) => state.fetchTypeIngredients);

  const fetchData = async () => {
    fetchDoughTypes();
    fetchCategories();
    fetchSizes();
    fetchIngredients();
    fetchTypeIngredients();
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.App}>
        <Header />
        <div className={styles.content}>
          <Routes>
            <Route path="/admin" element={<Admin />} />
            <Route path="/user" element={<User />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="colored"
        />
      </div>
    </div>
  );
}

export default App;
