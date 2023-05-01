import React from 'react';
import styles from './OrderList.module.scss';
import { useUserStore } from '../../Utils/Stores/UserStore';
import { Order } from '../Order/Order';

export const OrderList = () => {
  const orders = useUserStore((state) => state.orders);
  const currentOrders = orders.filter((order) => order.orderStatus.name !== 'Завершен');
  return (
    <div className={styles.orderList}>
      {currentOrders.length ? (
        <>
          <h2>Текущий заказ</h2>
          {currentOrders.map((order) => (
            <Order />
          ))}
        </>
      ) : (
        ''
      )}
      <h2>История заказов</h2>
      {orders.length ? orders.map((order) => <Order />) : 'У вас еще нет заказов'}
    </div>
  );
};
