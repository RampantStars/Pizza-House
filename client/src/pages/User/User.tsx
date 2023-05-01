import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../../Utils/Stores/UserStore';
import { onInfoToast } from '../../Utils/toast';
import { UserInfo } from '../../components/UserInfo';

import button from '../../scss/button.module.scss';
import styles from './User.module.scss';
import { OrderList } from '../../components/OrderList';

export const User = () => {
  const logOut = useUserStore((state) => state.logOut);

  const navigate = useNavigate();

  const onLogOut = () => {
    logOut();
    onInfoToast('Вы вышли из аккаунта');
    navigate('/');
  };

  return (
    <div className={styles.user__container}>
      <UserInfo />
      <OrderList />
      <button className={`${button.button} ${styles.button}`} onClick={onLogOut}>
        Выход
      </button>
    </div>
  );
};
