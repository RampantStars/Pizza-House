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

export const SearchContext = React.createContext();

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.App}>
        <Header />
        <div className={styles.content}>
          <Routes>
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
