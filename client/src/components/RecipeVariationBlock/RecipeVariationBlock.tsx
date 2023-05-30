import React from 'react';
import styles from './RecipeVariationBlock.module.scss';
import { useRecipeStore } from '../../Utils/Stores/RecipeStore';
import { useAdditionalIngredientStore } from '../../Utils/Stores/AdditionalIngredientsStore';
import { Popover } from '@headlessui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AdditionalIngredient, DoughType, PizzaVariation } from '../../Utils/types/types';
import ky from 'ky';
import { useCartStore } from '../../Utils/Stores/CartStore';

export const RecipeVariationBlock = () => {
  const currentRecipe = useRecipeStore((state) => state.currentRecipe);
  const additionalIngredients = useAdditionalIngredientStore(
    (state) => state.additionalIngredients,
  );

  const addToCart = useCartStore((state) => state.addToCart);

  const { register, handleSubmit } = useForm<PizzaVariation>();

  const onSubmit: SubmitHandler<PizzaVariation> = (data) => {
    try {
      const doughTypeData = currentRecipe.doughtTypes.find(
        (doughtType) => doughtType.id === +data.doughType,
      ) as DoughType;
      const sizeData = currentRecipe.sizes.find((size) => size.id === +data.size) as DoughType;
      const pizzaVariation: PizzaVariation = {
        ...data,
        doughType: doughTypeData,
        size: sizeData,
        recipe: currentRecipe,
      };
      if (data?.additionalIngredients) {
        const additionalIngredientData = data.additionalIngredients.map((additionalIngredientId) =>
          additionalIngredients.find(
            (additionalIngredient) => additionalIngredient.id === +additionalIngredientId,
          ),
        ) as AdditionalIngredient[];
        pizzaVariation.additionalIngredients = [...additionalIngredientData];
      } else {
        pizzaVariation.additionalIngredients = [];
      }
      addToCart(pizzaVariation);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  return (
    <div className={styles.recipeVariationBlock}>
      <div className={styles.container}>
        <img
          className={styles.pizza__img}
          src={`http://localhost:5000/${currentRecipe.imageUrl}`}
          alt={currentRecipe.name}
        />
        <div className={styles.info}>
          <Popover className={styles.popover}>
            <Popover.Button className={styles.popover__btn}>ℹ️</Popover.Button>
            <Popover.Panel className={styles.popover__panel}>
              <p className={styles.list__title}>Ингредиенты</p>
              <ul className={`${styles.list} ${styles.popover__list}`}>
                {currentRecipe.ingredients.map((ingredient) => (
                  <li key={ingredient.id} className={styles.popover__item}>
                    {ingredient.name}
                  </li>
                ))}
              </ul>
            </Popover.Panel>
          </Popover>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <p className={styles.list__title}>Размеры</p>
            <ul className={`${styles.list} ${styles.list__size}`}>
              {currentRecipe.sizes.map((size, index) => (
                <li key={`s-${size.id}`} className={styles.item}>
                  <label>
                    <input
                      className={styles.doughtType__input}
                      type="radio"
                      value={+size.id}
                      defaultChecked={index === 0 ? true : false}
                      {...register('size')}
                    />
                    <div className={styles.size}>
                      <p className={styles.size__info}>{size.name}</p>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
            <p className={styles.list__title}>Типы теста</p>
            <ul className={`${styles.list} ${styles.list__doughtType}`}>
              {currentRecipe.doughtTypes.map((doughtType, index) => (
                <li key={`d-${doughtType.id}`} className={styles.item}>
                  <label>
                    <input
                      className={styles.doughtType__input}
                      type="radio"
                      value={+doughtType.id}
                      defaultChecked={index === 0 ? true : false}
                      {...register('doughType')}
                    />
                    <div className={styles.doughtType}>
                      <p className={styles.doughtType__info}>{doughtType.name}</p>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
            <p className={styles.list__title}>Дополнительные ингредиенты</p>
            <ul className={styles.list}>
              {additionalIngredients.map((additionalIngredient) => (
                <li key={`a-${additionalIngredient.id}`} className={styles.item}>
                  <label>
                    <input
                      className={styles.additionalIngredient__input}
                      type="checkbox"
                      value={+additionalIngredient.id}
                      {...register('additionalIngredients')}
                    />
                    <div className={styles.additionalIngredient}>
                      <img
                        className={styles.additionalIngredient__img}
                        src={`http://localhost:5000/${additionalIngredient.imageUrl}`}
                        alt={additionalIngredient.name}
                      />
                      <p className={styles.additionalIngredient__info}>
                        {additionalIngredient.name}
                      </p>
                      <div>
                        <p className={styles.additionalIngredient__info}>
                          {additionalIngredient.price}₽
                        </p>
                        <p className={styles.additionalIngredient__info}>
                          {additionalIngredient.weight}гр.
                        </p>
                      </div>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};
