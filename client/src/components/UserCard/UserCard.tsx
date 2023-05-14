import React from 'react';
import styles from './UserCard.module.scss';
import { Role, User } from '../../Utils/types/types';
import { Popover } from '@headlessui/react';
import Select from 'react-select';
import { useUserStore } from '../../Utils/Stores/UserStore';

export const UserCard = (user: User) => {
  const { roles, setRole, removeRole } = useUserStore(({ roles, setRole, removeRole }) => ({
    roles,
    setRole,
    removeRole,
  }));
  const [userRoles, setUserRoles] = React.useState<Role[]>(user.roles);

  const onSave = () => {
    user.roles.map((role) =>
      userRoles.find((roleUser) => roleUser.id === role.id) ? '' : removeRole(user.id, role.id),
    );
    userRoles.map((userRole) =>
      user.roles.find((role) => role.id === userRole.id) ? '' : setRole(user.id, userRole.id),
    );
  };
  return (
    <div className={styles.userCard}>
      <svg
        className={styles.user__svg}
        enableBackground="new -27 24 100 100"
        id="male3"
        version="1.1"
        viewBox="-27 24 100 100"
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
      <p className={styles.user__FCs}>{user.FCs}</p>
      <ul className={styles.role__list}>
        <p className={styles.role__title}>Роли</p>
        {user.roles.map((role) => (
          <li key={role.id}>{role.description}</li>
        ))}
        <Popover className={styles.popover}>
          <Popover.Button className={styles.popover__btnEdit}>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path
                fill="#000000"
                fillRule="evenodd"
                d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
              />
            </svg>
          </Popover.Button>
          <Popover.Panel className={styles.popover__panelRole}>
            <Select
              className={styles.select}
              options={roles}
              getOptionLabel={(role: Role) => role.value}
              getOptionValue={(role: Role) => role.id.toString()}
              noOptionsMessage={() => 'Нет роли'}
              onChange={(tags) => {
                setUserRoles([...tags]);
              }}
              closeMenuOnSelect={false}
              placeholder="Нет роли"
              defaultValue={userRoles}
              isMulti
            />
            <button onClick={() => onSave()} className={styles.select__btn}>
              Сохранить
            </button>
          </Popover.Panel>
        </Popover>
      </ul>
      <Popover className={styles.popover}>
        <Popover.Button className={styles.popover__btn}>Доп.Информация</Popover.Button>
        <Popover.Panel className={styles.popover__panel}>
          <div className={styles.info}>
            <p className={styles.user__tel}>
              <span>Логин </span>
              {user.login}
            </p>
            <p className={styles.user__tel}>
              <span>Тел. </span>
              {user.telephone}
            </p>
            <p className={styles.user__email}>
              <span>Email. </span>
              {user.email}
            </p>
            <p className={styles.user__email}>
              <span>Кол-во Заказов. </span>
              {user.orders.length}
            </p>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
};
