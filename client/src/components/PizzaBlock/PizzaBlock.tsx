import React from 'react';

import styles from './PizzaBlock.module.scss';
import button from '../../scss/button.module.scss';
import { Category } from '../../Utils/types/types';
import { useCartStore } from '../../Utils/Stores/CartStore';

type PizzaBlockProps = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
  category: Category[];
};

export const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  types,
  sizes,
  category,
}) => {
  const [activeTypeIndex, setActiveTypeIndex] = React.useState(0);
  const [activeSizeIndex, setActiveSizeIndex] = React.useState(0);

  const pizzaTypes = ['Тонкое', 'Традиционное'];

  const { addToCart } = useCartStore(({ addToCart }) => ({
    addToCart,
  }));

  return (
    <div className={styles.PizzaContainer}>
      <div className={styles.pizza_block}>
        <img className={styles.image} src={imageUrl} alt="Pizza" />
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.selector}>
          <ul>
            {types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveTypeIndex(typeId)}
                className={activeTypeIndex === typeId ? `${styles.active}` : ' '}>
                {pizzaTypes[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={size}
                onClick={() => setActiveSizeIndex(index)}
                className={activeSizeIndex === index ? `${styles.active}` : ' '}>
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>от {price} ₽</div>
          <button
            onClick={() =>
              addToCart({
                id,
                title,
                type: pizzaTypes[activeTypeIndex],
                size: sizes[activeSizeIndex],
                imageUrl,
                price,
                category,
              })
            }
            className={`${button.button} ${button.outline} ${button.add}`}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
          </button>
        </div>
      </div>
    </div>
  );
};
