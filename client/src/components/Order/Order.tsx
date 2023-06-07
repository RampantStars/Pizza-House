import styles from './Order.module.scss';
import { Order, OrderStatus } from '../../Utils/types/types';
import { useOrderDateParser } from '../../hooks/useOrderDateParser';
import { Disclosure, Popover } from '@headlessui/react';
import Select from 'react-select';
import { useState } from 'react';
import { useUserStore } from '../../Utils/Stores/UserStore';
import { useCartStore } from '../../Utils/Stores/CartStore';

export const OrderCard = ({ order, isManager = false }: { order: Order; isManager?: boolean }) => {
  const [orderStatusId, setOrderStatusId] = useState<number>(0);
  const { orderStatus, setStatus } = useUserStore(({ orderStatus, setStatus }) => ({
    orderStatus,
    setStatus,
  }));
  const createOrder = useCartStore((state) => state.createOrder);
  const parseOrderDate = useOrderDateParser();
  const date = parseOrderDate(order.date);
  const onSave = () => {
    order.id && setStatus(order.id, orderStatusId);
  };
  return (
    <div className={styles.order}>
      <h3>Заказ № {order.id}</h3>
      <div className={styles.order__info}>
        <h5>Заказчик {order.user.FCs}</h5>
        <p>Адрес доставки: {order.address}</p>
        <p>
          Дата заказа: {date.day}.{date.month}.{date.year} в {date.hour}:{date.minute}
        </p>
        <p>Сумма заказа: {order.price} ₽</p>
        <p>Общее количество позиций: {order.quantityItem}</p>
      </div>
      <Disclosure>
        <Disclosure.Button className={styles.order__btn}>Подробнее о заказе</Disclosure.Button>
        <Disclosure.Panel>
          <ul className={styles.order__list}>
            {order.orderLines.map((line) => (
              <li key={line.id} className={styles.cart__item}>
                <img
                  className={styles.cart__item_img}
                  src={`http://localhost:5000/${line.pizzaVariation.recipe.imageUrl}`}
                  alt="Pizza"
                />
                <div className={styles.cart__itemInfo}>
                  <h3> {line.pizzaVariation.recipe.name}</h3>
                  <p>{` ${line.pizzaVariation.doughType.name}, ${line.pizzaVariation.size.name}`}</p>
                  {line.pizzaVariation.additionalIngredients?.length ? (
                    <Popover className={styles.popover}>
                      <Popover.Button className={styles.popover__btn}>ℹ️</Popover.Button>
                      <Popover.Panel className={styles.popover__panel}>
                        <p className={styles.list__title}>Дополнительные ингредиенты</p>
                        <ul className={`${styles.list} ${styles.popover__list}`}>
                          {line.pizzaVariation.additionalIngredients.map((ingredient) => (
                            <li key={ingredient.id} className={styles.popover__item}>
                              {ingredient.name}
                            </li>
                          ))}
                        </ul>
                      </Popover.Panel>
                    </Popover>
                  ) : (
                    ''
                  )}
                </div>
                <div className={styles.cart__itemCount}>
                  <b>{line.quantity}шт.</b>
                </div>
                <div className={styles.cart__itemPrice}>
                  <b>{line.price} ₽</b>
                </div>
                <div className={styles.cart__itemRemove}></div>
              </li>
            ))}
          </ul>
        </Disclosure.Panel>
      </Disclosure>
      <button onClick={() => createOrder(order)}>Повторить заказ</button>
      <p className={styles.order_status}>Статус: {order.orderStatus.name}</p>
      {isManager && (
        <>
          <Popover className={styles.popover}>
            <Popover.Button className={styles.popover__btnEdit}>Изменить статус</Popover.Button>
            <Popover.Panel className={styles.popover__panelRole}>
              <Select
                className={styles.select}
                options={orderStatus}
                getOptionLabel={(status: OrderStatus) => status.name}
                getOptionValue={(role: OrderStatus) => role.id.toString()}
                noOptionsMessage={() => 'Нет статуса'}
                onChange={(tags) => {
                  tags && setOrderStatusId(tags?.id);
                }}
                placeholder="Нет статуса"
                defaultValue={order.orderStatus}
              />
              <button onClick={() => onSave()} className={styles.select__btn}>
                Сохранить
              </button>
            </Popover.Panel>
          </Popover>
        </>
      )}
    </div>
  );
};
