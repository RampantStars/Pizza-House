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
            Модераторы
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
                <>
                  {user.roles.find((role) => role.value === 'USER') && (
                    <li className={styles.user__item} key={user.id}>
                      <UserCard {...user} />
                    </li>
                  )}
                </>
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel className={styles.tab__panel}>
            <ul className={styles.user__list}>
              {users.map((user) => (
                <>
                  {user.roles.find((role) => role.value === 'MODERATOR') && (
                    <li className={styles.user__item}>
                      <UserCard {...user} key={user.id} />
                    </li>
                  )}
                </>
              ))}
            </ul>
          </Tab.Panel>{' '}
          <Tab.Panel className={styles.tab__panel}>
            <ul className={styles.user__list}>
              {users.map((user) => (
                <>
                  {user.roles.find((role) => role.value === 'ADMIN') && (
                    <li className={styles.user__item} key={user.id}>
                      <UserCard {...user} />
                    </li>
                  )}
                </>
              ))}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
