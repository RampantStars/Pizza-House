import { useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useCartStore } from '../../../Utils/Stores/CartStore';
import styles from './PayForm.module.scss';
import { CartItem, OrderLine } from '../../../Utils/types/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Popover } from '@headlessui/react';
import { useUserStore } from '../../../Utils/Stores/UserStore';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { onErrorToast, onSuccessToast } from '../../../Utils/toast';
import { Order } from '../../../Utils/types/types';
import { Error } from '../../../Utils/types/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const PayForm = () => {
  const [money, setMoney] = useState(false);
  const [priceMoney, setPriceMoney] = useState(0);
  const user = useUserStore((state) => state.user);
  const { cart, createOrder, getTotalQuantity, getItemPrice, createOrderLine } = useCartStore(
    ({ cart, createOrder, getTotalQuantity, getItemPrice, createOrderLine }) => ({
      cart,
      createOrder,
      getTotalQuantity,
      getItemPrice,
      createOrderLine,
    }),
    shallow,
  );

  const { setIsOpen, payModalIsOpen } = useModalFramesStore(({ setIsOpen, payModalIsOpen }) => ({
    setIsOpen,
    payModalIsOpen,
  }));

  const schema = yup
    .object({
      address: yup.string().required('Это поле обязательно'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Order>({
    defaultValues: {
      address: user.address || '',
      quantityItem: getTotalQuantity(),
      userId: user.id,
      comment: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Order> = async (data) => {
    try {
      if (priceMoney) data.comment = `Сдача с ${priceMoney}₽. ` + data.comment;
      const orderLine = await cart.map((item) => createOrderLine(item));
      const newOrderLines = await Promise.all(orderLine);
      data.orderLines = [...newOrderLines];
      await createOrder(data);
      setIsOpen('payModalIsOpen', !payModalIsOpen);
      onSuccessToast('Заказ успешно создан');
    } catch (e: any) {
      const error = { ...(e as Error) };
      onErrorToast({ ...error });
    }
  };

  return (
    <div className={styles.payForm}>
      <div className={styles.order}>
        <ul className={styles.order__list}>
          {cart.map((item: CartItem) => (
            <li key={item.id} className={styles.cart__item}>
              <img
                className={styles.cart__item_img}
                src={`http://localhost:5000/${item.item.recipe.imageUrl}`}
                alt="Pizza"
              />
              <div className={styles.cart__itemInfo}>
                <h3>{item.item.recipe.name}</h3>
                <p>{` ${item.item.doughType.name}, ${item.item.size.name}`}</p>
                {item.item.additionalIngredients?.length ? (
                  <Popover className={styles.popover}>
                    <Popover.Button className={styles.popover__btn}>ℹ️</Popover.Button>
                    <Popover.Panel className={styles.popover__panel}>
                      <p className={styles.list__title}>Дополнительные ингредиенты</p>
                      <ul className={`${styles.list} ${styles.popover__list}`}>
                        {item.item.additionalIngredients.map((ingredient) => (
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
                <b>{item.quantity}</b>
              </div>
              <div className={styles.cart__itemPrice}>
                <b>{getItemPrice(item.id)} ₽</b>
              </div>
              <div className={styles.cart__itemRemove}></div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.order__info}>
        <div className={styles.user__info}>
          <p className={styles.user__name}>{user.FCs}</p>
          <p> Email: {user.email}</p>
          <p> Телефон: {user.telephone}</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.form__container}>
            <div className={styles.form__left}>
              <label className={styles.label}>
                Адрес*
                <input
                  defaultValue={user.address || ''}
                  type="text"
                  {...register('address', { required: true })}
                />
                <p className={styles.error}>{errors.address?.message}</p>
              </label>
              <label className={styles.label}>
                Комментарий
                <textarea {...register('comment')} />
                <p className={styles.error}>{errors.comment?.message}</p>
              </label>
            </div>
          </div>
          <div className={styles.switch}>
            <label className={styles.switch__label}>
              <input onChange={() => setMoney(!money)} type="checkbox" />
              <p>Наличными</p>
            </label>
            {money && (
              <div className={styles.switch__on}>
                <p>Сдача с</p>
                <input type="number" onChange={(e: any) => setPriceMoney(e.target.value)} />
              </div>
            )}
          </div>
          <div className={styles.btn__container}>
            <button className={`${styles.btn} ${styles.success}`} type="submit">
              Заказать
            </button>
            <button
              className={`${styles.btn} ${styles.cancel}`}
              onClick={() => {
                setIsOpen('payModalIsOpen', !payModalIsOpen);
              }}
              type="button">
              Отменить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
