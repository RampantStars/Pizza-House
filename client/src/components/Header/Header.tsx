import { Link } from 'react-router-dom';

import { Search } from '../Search';
import { useCartStore } from '../../Utils/Stores/CartStore';
import { useUserStore } from '../../Utils/Stores/UserStore';
import { UserControls } from '../UserControls';

import logoSvg from '../../assets/img/pizza-logo.svg';

import styles from './Header.module.scss';
import button from '../../scss/button.module.scss';

export const Header: React.FC = () => {
  const { isAuth, user } = useUserStore(({ isAuth, user }) => ({
    isAuth,
    user,
  }));

  const { getTotalQuantity, getTotalPrice } = useCartStore(
    ({ getTotalQuantity, getTotalPrice }) => ({
      getTotalQuantity,
      getTotalPrice,
    }),
  );

  return (
    <div className={styles.header}>
      <div className={`${styles.container}`}>
        <Link to="/">
          <div className={styles.logo}>
            <img width="38" src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>Pizza House</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className={styles.right}>
          <div className="header__cart">
            <Link to="/cart" className={`${button.button} ${styles.button}`}>
              <span>{`${getTotalPrice()} ₽`}</span>
              <div className={styles.delimiter}></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{getTotalQuantity()}</span>
            </Link>
          </div>
          <Search />
          {!!isAuth ? (
            <>
              <UserControls />
              <Link to={'/user'}>
                <div className={styles.user}>
                  <svg
                    enableBackground="new -27 24 100 100"
                    height="50px"
                    id="male3"
                    version="1.1"
                    viewBox="-27 24 100 100"
                    width="50px"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    strikethroughThickness="http://www.bohemiancoding.com/sketch/ns"
                    xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g>
                      <g>
                        <circle className={styles.userBg} cx="23" cy="74" fill="#F5EEE5" r="50" />
                        <g>
                          <defs>
                            <circle cx="23" cy="74" id="SVGID_1_" r="50" />
                          </defs>
                          <clipPath id="SVGID_2_">
                            <use overflow="visible" xlinkHref="#SVGID_1_" />
                          </clipPath>
                          <path
                            clipPath="url(#SVGID_2_)"
                            d="M38,99.9l27.9,7.7c3.2,1.1,5.7,3.5,7.1,6.6v9.8H-27v-9.8      c1.3-3.1,3.9-5.5,7.1-6.6L8,99.9V85h30V99.9z"
                            fill="#E6C19C"
                          />
                          <g clipPath="url(#SVGID_2_)">
                            <defs>
                              <path
                                d="M38,99.9l27.9,7.7c3.2,1.1,5.7,3.5,7.1,6.6v9.8H-27v-9.8c1.3-3.1,3.9-5.5,7.1-6.6L8,99.9V85h30V99.9z"
                                id="SVGID_3_"
                              />
                            </defs>
                            <clipPath id="SVGID_4_">
                              <use overflow="visible" xlinkHref="#SVGID_3_" />
                            </clipPath>
                            <path
                              clipPath="url(#SVGID_4_)"
                              d="M-27,82H73v42H-27V82z M23,112c11,0,20-6.3,20-14s-9-14-20-14S3,90.3,3,98       S12,112,23,112z"
                              fill="#E6A422"
                            />
                            <path
                              clipPath="url(#SVGID_4_)"
                              d="M23,102c-1.7,0-3.9-0.4-5.4-1.1c-1.7-0.9-8-6.1-10.2-8.3       c-2.8-3-4.2-6.8-4.6-13.3c-0.4-6.5-2.1-29.7-2.1-35c0-7.5,5.7-19.2,22.1-19.2l0.1,0l0,0l0,0l0.1,0       c16.5,0.1,22.1,11.7,22.1,19.2c0,5.3-1.7,28.5-2.1,35c-0.4,6.5-1.8,10.2-4.6,13.3c-2.1,2.3-8.4,7.4-10.2,8.3       C26.9,101.6,24.7,102,23,102L23,102z"
                              fill="#D4B08C"
                            />
                            <path
                              clipPath="url(#SVGID_4_)"
                              d="M23,82C10.3,82,0,89.4,0,98.5S10.3,115,23,115s23-7.4,23-16.5       S35.7,82,23,82z M23,111c-10.5,0-19-6-19-13.5S12.5,84,23,84s19,6,19,13.5S33.5,111,23,111z"
                              fill="#D98C21"
                            />
                          </g>
                        </g>
                        <path
                          d="M23,98c-1.5,0-3.5-0.3-4.8-0.9c-1.6-0.7-7.2-4.6-9.1-6.3c-2.5-2.3-3.8-5.1-4.2-10S3,58.5,3,54.5     C3,48.8,8.1,40,23,40l0,0l0,0l0,0l0,0C37.9,40,43,48.8,43,54.5c0,4-1.5,21.5-1.9,26.4s-1.6,7.7-4.2,10c-1.9,1.7-7.6,5.6-9.1,6.3     C26.5,97.7,24.5,98,23,98L23,98z"
                          fill="#F2CEA5"
                        />
                        <path
                          d="M30,85.5c-1.9,2-5.2,3-8.1,2.4c-2.7-0.6-4.7-2-5.7-4.3L30,85.5z"
                          fill="#A3705F"
                        />
                        <path
                          d="M30,85.5c-1.9,2-5.2,3-8.1,2.4     c-2.7-0.6-4.7-2-5.7-4.3L30,85.5z"
                          fill="none"
                          stroke="#A3705F"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <g>
                          <defs>
                            <rect height="5" id="SVGID_5_" width="31" x="7" y="65" />
                          </defs>
                          <clipPath id="SVGID_6_">
                            <use overflow="visible" xlinkHref="#SVGID_5_" />
                          </clipPath>
                          <circle clipPath="url(#SVGID_6_)" cx="32" cy="69" fill="#291F21" r="2" />
                          <circle clipPath="url(#SVGID_6_)" cx="14" cy="69" fill="#291F21" r="2" />
                        </g>
                        <path
                          d="M8,66c0,0,1.1-3,6.1-3c3.4,0,5.4,1.5,6.4,3"
                          fill="none"
                          stroke="#CC9872"
                          strokeWidth="2"
                        />
                        <path
                          d="M38.1,66c0,0-1.1-3-6.1-3c-4.8,0-7,3-7,5c0,1.9,0,9,0,9"
                          fill="none"
                          stroke="#BB8660"
                          strokeWidth="2"
                        />
                        <path
                          d="M41.8,72.2c0,0,0.8-6.3,3.7-7.2c0.4-1.8,1.5-7,1.5-9.9s-0.3-5.7-1.9-8.1c-1.8-2.6-5.6-4.1-7.6-4.1     c-2.3,1.4-7.7,4.6-9.4,6.5c-0.9,1,0.4,1.8,0.4,1.8s1.2-0.5,1.7-0.6c2.5-0.7,8-1.2,9.7,1.3C42,54.9,42,63.7,42,65     C42,66.2,41.8,72.2,41.8,72.2z"
                          fill="#452228"
                        />
                        <path
                          d="M0.5,65c2.9,1,3.7,7.2,3.7,7.2S4,66.2,4,65c0-1.6,0.2-9.1,3.4-12.7c3.6-4,8.4-5.3,11.1-3.5     c1.4,0.9,6.1,5.5,11.1,1.7c3-2.3,8.5-7.5,8.5-7.5s-2.9-8.9-16.1-7.9c-5.6,0.5-11.8-0.9-11.8-0.9s-0.1,2.5,0.9,3.8     C2.8,40.4,0.1,46.4-0.7,51c-0.2,0.9-0.3,1.8-0.3,2.7c0,0.5,0,1,0,1.4C-1,58,0.1,63.1,0.5,65z"
                          fill="#6B363E"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </Link>
            </>
          ) : (
            <div className={styles.button_container}>
              <Link to={'/login'} className={`${button.button} ${styles.buttonLogin}`}>
                Войти
              </Link>
              <Link
                to={'/registration'}
                className={`${button.button} ${styles.buttonRegistration}`}>
                Регистрация
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
