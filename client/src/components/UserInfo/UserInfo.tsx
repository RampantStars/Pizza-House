import React from 'react';
import styles from './UserInfo.module.scss';
import { useUserStore } from '../../Utils/Stores/UserStore';

export const UserInfo = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div className={styles.userInfo}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h2 className={styles.FCs}>{user.FCs}</h2>
        </li>
        <li className={styles.item}>
          {user.roles.map((role) => (
            <p>
              <span>Роль: </span>
              {role.description}
            </p>
          ))}
        </li>
        <li className={styles.item}>
          <span>Телефон: </span>
          {user.telephone}
        </li>
        <li className={styles.item}>
          {user.address ? (
            <>
              <span>Адрес: </span>
              <p>{user?.address}</p>
            </>
          ) : (
            ''
          )}
        </li>
      </ul>
    </div>
  );
};
