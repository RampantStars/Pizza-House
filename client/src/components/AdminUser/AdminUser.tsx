import { Fragment } from 'react';
import styles from './AdminUser.module.scss';
import { useUserStore } from '../../Utils/Stores/UserStore';
import { UserCard } from '../UserCard';
import { Tab } from '@headlessui/react';

export const AdminUser = () => {
  const users = useUserStore((state) => state.users);
  return (
    <div className={styles.adminUser}>
      <h2>Пользователи</h2>

      <Tab.Group>
        <Tab.List className={styles.tab__list}>
          <Tab
            className={({ selected }) =>
              `${styles.tab__item} ${selected ? `${styles.active}` : ''}`
            }>
            Пользователи
          </Tab>
          <Tab
            className={({ selected }) =>
              `${styles.tab__item} ${selected ? `${styles.active}` : ''}`
            }>
            Менеджеры
          </Tab>
          <Tab
            className={({ selected }) =>
              `${styles.tab__item} ${selected ? `${styles.active}` : ''}`
            }>
            Админы
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className={styles.tab__panel}>
            <ul className={styles.user__list}>
              {users.map((user) => (
                <div key={user.id}>
                  {user.roles.find((role) => role.value === 'USER') && (
                    <li className={styles.user__item}>
                      <UserCard {...user} />
                    </li>
                  )}
                </div>
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel className={styles.tab__panel}>
            <ul className={styles.user__list}>
              {users.map((user) => (
                <div key={user.id}>
                  {user.roles.find((role) => role.value === 'MANAGER') && (
                    <li className={styles.user__item}>
                      <UserCard {...user} />
                    </li>
                  )}
                </div>
              ))}
            </ul>
          </Tab.Panel>{' '}
          <Tab.Panel className={styles.tab__panel}>
            <ul className={styles.user__list}>
              {users.map((user) => (
                <div key={user.id}>
                  {user.roles.find((role) => role.value === 'ADMIN') && (
                    <li className={styles.user__item}>
                      <UserCard {...user} />
                    </li>
                  )}
                </div>
              ))}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
