import React from 'react';

import styles from './CartBlock.module.scss';
import button from '../../scss/button.module.scss';
import { shallow } from 'zustand/shallow';
import { PizzaVariation } from '../../Utils/types/types';
import { useCartStore } from '../../Utils/Stores/CartStore';
import { Popover } from '@headlessui/react';

type CardBlockProps = {
  id: string;
  item: PizzaVariation;
  quantity: number;
};

export const CardBlock: React.FC<CardBlockProps> = ({ id, item, quantity }) => {
  const { getItemPrice, decrementQuantity, incrementQuantity, removeFromCart } = useCartStore(
    ({ getItemPrice, decrementQuantity, incrementQuantity, removeFromCart }) => ({
      getItemPrice,
      decrementQuantity,
      incrementQuantity,
      removeFromCart,
    }),
    shallow,
  );

  return (
    <li className={styles.cart__item}>
      <div className={styles.cart__item_img}>
        <img
          className="pizza-block__image"
          src={`http://localhost:5000/${item.recipe.imageUrl}`}
          alt="Pizza"
        />
      </div>
      <div className={styles.cart__itemInfo}>
        <h3>{item.recipe.name}</h3>
        <p>{` ${item.doughType.name}, ${item.size.name}`}</p>
        {item.additionalIngredients?.length ? (
          <Popover className={styles.popover}>
            <Popover.Button className={styles.popover__btn}>ℹ️</Popover.Button>
            <Popover.Panel className={styles.popover__panel}>
              <p className={styles.list__title}>Дополнительные ингредиенты</p>
              <ul className={`${styles.list} ${styles.popover__list}`}>
                {item.additionalIngredients.map((ingredient) => (
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
        <button
          onClick={() => {
            if (quantity === 1) removeFromCart(id);
            decrementQuantity(id);
          }}
          className={`${button.button} ${button.outline} ${button.circle} ${styles.cart__itemCountMinus}`}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            />
          </svg>
        </button>
        <b>{quantity}</b>
        <button
          onClick={() => {
            incrementQuantity(id);
          }}
          className={`${button.button} ${button.outline} ${button.circle} ${styles.cart__itemCountPlus}`}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            />
          </svg>
        </button>
      </div>
      <div className={styles.cart__itemPrice}>
        <b>{getItemPrice(id)} ₽</b>
      </div>
      <div className={styles.cart__itemRemove}>
        <button
          onClick={() => {
            removeFromCart(id);
          }}
          className={`${button.button} ${button.outline} ${button.circle}`}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#EB5A1E"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#EB5A1E"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};
