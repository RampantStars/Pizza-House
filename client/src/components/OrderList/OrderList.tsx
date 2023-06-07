import React from 'react';
import styles from './OrderList.module.scss';
import { useUserStore } from '../../Utils/Stores/UserStore';
import { OrderCard } from '../Order';

export const OrderList = () => {
  const { orders, fetchOrder, user } = useUserStore(({ orders, fetchOrder, user }) => ({
    orders,
    fetchOrder,
    user,
  }));
  const currentOrders = orders.filter((order) => order.orderStatus.name !== 'Выдан');
  const ordersGiven = orders
    .filter((order) => order.orderStatus.name === 'Выдан')
    .slice(0)
    .slice(-5);

  React.useEffect(() => {
    fetchOrder(user.id);
  }, []);
  return (
    <div className={styles.orderList}>
      {currentOrders.length ? (
        <>
          <h2>Текущий заказ</h2>
          <ul className={styles.list}>
            {currentOrders.map((order) => (
              <OrderCard key={order.id} isManager order={order} />
            ))}
          </ul>
        </>
      ) : (
        ''
      )}
      <>
        <h2>История заказов</h2>
        <ul className={styles.list}>
          {ordersGiven.length
            ? ordersGiven.map((order) => <OrderCard order={order} />)
            : 'У вас еще нет выданных заказов'}
        </ul>
      </>
    </div>
  );
};
