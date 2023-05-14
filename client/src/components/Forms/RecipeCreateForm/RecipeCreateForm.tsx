import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useCategoryStore } from '../../../Utils/Stores/CategoryStore';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { useSizeStore } from '../../../Utils/Stores/SizeStore';
import { useDoughTypeStore } from '../../../Utils/Stores/DoughType.Store';
import { useIngredientStore } from '../../../Utils/Stores/IngredientStore';
import { useRecipeStore } from '../../../Utils/Stores/RecipeStore';
import { onErrorToast } from '../../../Utils/toast';
import { Category, DoughType, Error, Ingredient, Size } from '../../../Utils/types/types';
import { IRecipeCreate } from '../../../Utils/interface/interface';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import styles from './RecipeCreateForm.module.scss';

export const RecipeCreateForm = () => {
  const animatedComponents = makeAnimated();

  const {
    setIsOpen,
    sizeModalIsOpen,
    recipeModalIsOpen,
    ingredientModalIsOpen,
    doughTypeModalIsOpen,
  } = useModalFramesStore(
    ({
      setIsOpen,
      sizeModalIsOpen,
      recipeModalIsOpen,
      ingredientModalIsOpen,
      doughTypeModalIsOpen,
    }) => ({
      setIsOpen,
      sizeModalIsOpen,
      recipeModalIsOpen,
      ingredientModalIsOpen,
      doughTypeModalIsOpen,
    }),
  );
  const categories = useCategoryStore((state) => state.categories);
  const sizes = useSizeStore((state) => state.sizes);
  const doughTypes = useDoughTypeStore((state) => state.doughTypes);
  const ingredients = useIngredientStore((state) => state.ingredients);
  const createRecipe = useRecipeStore((state) => state.createRecipe);

  const [image, setImage] = useState<string>('');

  const onImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleImageLoad = (event: any) => {
    URL.revokeObjectURL(event.target.src);
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRecipeCreate>();

  const onSubmit: SubmitHandler<IRecipeCreate> = async (data) => {
    try {
      const newData = new FormData();
      newData.append('name', data.name);
      newData.append('price', data.price.toString());
      newData.append('description', data.description);
      newData.append('salePercent', data.salePercent.toString());
      data.sizes.forEach((str, index) => {
        newData.append(`sizes[${index}]`, str.toString());
      });
      data.ingredients.forEach((str, index) => {
        newData.append(`ingredients[${index}]`, str.toString());
      });
      data.doughTypes.forEach((str, index) => {
        newData.append(`doughTypes[${index}]`, str.toString());
      });
      data.categories.forEach((str, index) => {
        newData.append(`categories[${index}]`, str.toString());
      });
      newData.append('image', data.image[0]);
      createRecipe(newData);
      setIsOpen('recipeModalIsOpen', !recipeModalIsOpen);
    } catch (e: any) {
      const error = { ...(e as Error) };
      onErrorToast({ ...error });
    }
  };
  return (
    <div className={styles.recipeCreateForm}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__container}>
          <label className={styles.label}>
            Картинка рецепта
            {!image ? (
              <svg
                className={styles.input__svg}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title />

                <g id="Complete">
                  <g id="upload">
                    <g>
                      <path
                        d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
                        fill="none"
                        stroke="#000000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />

                      <g>
                        <polyline
                          data-name="Right"
                          fill="none"
                          id="Right-2"
                          points="7.9 6.7 12 2.7 16.1 6.7"
                          stroke="#000000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />

                        <line
                          fill="none"
                          stroke="#000000"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          x1="12"
                          x2="12"
                          y1="16.3"
                          y2="4.8"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            ) : (
              <img
                alt="Загруженная картинка"
                className={styles.img}
                src={image}
                onLoad={handleImageLoad}
              />
            )}
            <input
              type="file"
              {...register('image')}
              onChange={onImageChange}
              className={styles.input__img}
            />
            <p className={styles.error}>{errors.image?.message}</p>
          </label>
          <div className={styles.form__left}>
            <label className={styles.label}>
              Название рецепта
              <input type="text" {...register('name')} />
              <p className={styles.error}>{errors.name?.message}</p>
            </label>
            <label className={styles.label}>
              Цена рецепта
              <input type="number" {...register('price')} />
              <p className={styles.error}>{errors.price?.message}</p>
            </label>
            <label className={styles.label}>
              Описание рецепта
              <input type="text" {...register('description')} />
            </label>
            <label className={styles.label}>
              Скидка рецепта
              <input type="number" {...register('salePercent')} />
            </label>
          </div>
          <div className={styles.form__right}>
            <label className={styles.label}>
              Доступные категории рецепта
              <Controller
                control={control}
                name="categories"
                rules={{ required: 'Это поле обязательное' }}
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <div>
                    <div className={styles.select__group}>
                      <Select
                        className={styles.select}
                        options={categories}
                        getOptionLabel={(category: Category) => category.name}
                        getOptionValue={(category: Category) => category.name}
                        filterOption={(categories) => categories.label !== 'Все'}
                        closeMenuOnSelect={false}
                        onChange={(newValue) => onChange(newValue.map((value) => value.name))}
                        components={animatedComponents}
                        placeholder="Категории пиццы"
                        isMulti
                        noOptionsMessage={() => 'Нет категории'}
                      />
                      <button type="button" className={styles.select__btn}>
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                          <path
                            fill="#000000"
                            fillRule="evenodd"
                            d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className={styles.error}>{error?.message}</p>
                  </div>
                )}
              />
            </label>
            <label className={styles.label}>
              Доступные размеры рецепта
              <Controller
                control={control}
                name="sizes"
                rules={{ required: 'Это поле обязательное' }}
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <div>
                    <div className={styles.select__group}>
                      <Select
                        className={styles.select}
                        options={sizes}
                        getOptionLabel={(size: Size) => size.name}
                        getOptionValue={(size: Size) => size.name}
                        closeMenuOnSelect={false}
                        onChange={(newValue) => onChange(newValue.map((value) => value.name))}
                        components={animatedComponents}
                        placeholder="Размеры пиццы"
                        isMulti
                        noOptionsMessage={() => 'Нет размера'}
                      />
                      <button
                        type="button"
                        className={styles.select__btn}
                        onClick={() => setIsOpen('sizeModalIsOpen', !sizeModalIsOpen)}>
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                          <path
                            fill="#000000"
                            fillRule="evenodd"
                            d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className={styles.error}>{error?.message}</p>
                  </div>
                )}
              />
            </label>
            <label className={styles.label}>
              Типы теста
              <Controller
                control={control}
                name="doughTypes"
                rules={{ required: 'Это поле обязательное' }}
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <div>
                    <div className={styles.select__group}>
                      <Select
                        className={styles.select}
                        options={doughTypes}
                        getOptionLabel={(doughType: DoughType) => doughType.name}
                        getOptionValue={(doughType: DoughType) => doughType.name}
                        closeMenuOnSelect={false}
                        onChange={(newValue) => onChange(newValue.map((value) => value.name))}
                        components={animatedComponents}
                        placeholder="Тип теста пиццы"
                        isMulti
                        noOptionsMessage={() => 'Нет типа теста'}
                      />
                      <button
                        onClick={() => setIsOpen('doughTypeModalIsOpen', !doughTypeModalIsOpen)}
                        type="button"
                        className={styles.select__btn}>
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                          <path
                            fill="#000000"
                            fillRule="evenodd"
                            d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className={styles.error}>{error?.message}</p>
                  </div>
                )}
              />
            </label>
            <label className={styles.label}>
              Ингредиенты рецепта
              <Controller
                control={control}
                name="ingredients"
                rules={{ required: 'Это поле обязательное' }}
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <div>
                    <div className={styles.select__group}>
                      <Select
                        className={styles.select}
                        options={ingredients}
                        getOptionLabel={(ingredient: Ingredient) => ingredient.name}
                        getOptionValue={(ingredient: Ingredient) => ingredient.name}
                        closeMenuOnSelect={false}
                        onChange={(newValue) => onChange(newValue.map((value) => value.name))}
                        components={animatedComponents}
                        placeholder="Ингредиенты пиццы"
                        isMulti
                        noOptionsMessage={() => 'Нет ингредиента'}
                      />
                      <button
                        type="button"
                        className={styles.select__btn}
                        onClick={() => setIsOpen('ingredientModalIsOpen', !ingredientModalIsOpen)}>
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                          <path
                            fill="#000000"
                            fillRule="evenodd"
                            d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"
                          />
                        </svg>
                      </button>
                    </div>
                    <p className={styles.error}>{error?.message}</p>
                  </div>
                )}
              />
            </label>
          </div>
        </div>
        <div className={styles.btn__container}>
          <button className={`${styles.btn} ${styles.success}`} type="submit">
            Создать
          </button>
          <button
            className={`${styles.btn} ${styles.cancel}`}
            onClick={() => setIsOpen('recipeModalIsOpen', !recipeModalIsOpen)}
            type="button">
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
};
