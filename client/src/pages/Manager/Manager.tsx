import React from 'react';
import styles from './Manager.module.scss';
import { Tab } from '@headlessui/react';
import { AdminRecipe } from '../../components/AdminRecipe';
import { ManagerOrder } from '../../components/ManagerOrder';
import { useUserStore } from '../../Utils/Stores/UserStore';

export const Manager = () => {
  const fetchOrderStatus = useUserStore((state) => state.fetchOrderStatus);
  React.useEffect(() => {
    fetchOrderStatus();
  }, []);
  return (
    <div data-testid="Manager" className={styles.manager}>
      <Tab.Group vertical defaultIndex={1}>
        <Tab.List className={styles.tab__list}>
          <Tab>Заказы</Tab>
          <Tab>Меню</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ManagerOrder />
          </Tab.Panel>
          <Tab.Panel>
            <AdminRecipe />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
