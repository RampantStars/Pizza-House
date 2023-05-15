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

import styles from './RecipeEditForm.module.scss';

export const RecipeEditForm = () => {
  const animatedComponents = makeAnimated();

  const {
    setIsOpen,
    categoryModalIsOpen,
    sizeModalIsOpen,
    recipeModalIsOpen,
    ingredientModalIsOpen,
    doughTypeModalIsOpen,
  } = useModalFramesStore(
    ({
      setIsOpen,
      categoryModalIsOpen,
      sizeModalIsOpen,
      recipeModalIsOpen,
      ingredientModalIsOpen,
      doughTypeModalIsOpen,
    }) => ({
      setIsOpen,
      categoryModalIsOpen,
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
  const { updateRecipe, editingRecipe, setIsEdit } = useRecipeStore(
    ({ updateRecipe, editingRecipe, setIsEdit }) => ({ updateRecipe, editingRecipe, setIsEdit }),
  );

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
  } = useForm<IRecipeCreate>({
    defaultValues: {
      name: editingRecipe.name || '',
      price: editingRecipe.price || 0,
      description: editingRecipe.description || '',
      salePercent: editingRecipe.salePercent || 0,
    },
  });

  const onSubmit: SubmitHandler<IRecipeCreate> = async (data) => {
    try {
      const newData = new FormData();
      newData.append('name', data.name);
      newData.append('price', data.price.toString());
      newData.append('description', data.description);
      newData.append('salePercent', data.salePercent.toString());
      if (data.sizes)
        data.sizes.forEach((str, index) => {
          newData.append(`sizes[${index}]`, str.toString());
        });
      if (data.ingredients)
        data.ingredients.forEach((str, index) => {
          newData.append(`ingredients[${index}]`, str.toString());
        });
      if (data.doughTypes)
        data.doughTypes.forEach((str, index) => {
          newData.append(`doughTypes[${index}]`, str.toString());
        });
      if (data.categories)
        data.categories.forEach((str, index) => {
          newData.append(`categories[${index}]`, str.toString());
        });
      if (data.image) newData.append('image', data.image[0]);
      await updateRecipe(editingRecipe.id, newData);
      setIsEdit(false);
      setIsOpen('recipeModalIsOpen', !recipeModalIsOpen);
    } catch (e: any) {
      console.log('error :>> ', e);
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
              <img
                alt="Загруженная картинка"
                className={styles.img}
                src={`http://localhost:5000/${editingRecipe.imageUrl}`}
                onLoad={handleImageLoad}
              />
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
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <div>
                    <div className={styles.select__group}>
                      <Select
                        className={styles.select}
                        options={categories}
                        getOptionLabel={(category: Category) => category.name}
                        getOptionValue={(category: Category) => category.name}
                        defaultValue={editingRecipe.categories}
                        filterOption={(categories) => categories.label !== 'Все'}
                        closeMenuOnSelect={false}
                        onChange={(newValue) => onChange(newValue.map((value) => value.name))}
                        components={animatedComponents}
                        placeholder="Категории пиццы"
                        isMulti
                        noOptionsMessage={() => 'Нет категории'}
                      />
                      <button
                        onClick={() => setIsOpen('categoryModalIsOpen', !categoryModalIsOpen)}
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
              Доступные размеры рецепта
              <Controller
                control={control}
                name="sizes"
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                  <div>
                    <div className={styles.select__group}>
                      <Select
                        className={styles.select}
                        options={sizes}
                        getOptionLabel={(size: Size) => size.name}
                        getOptionValue={(size: Size) => size.name}
                        defaultValue={editingRecipe.sizes}
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
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <div>
                    <div className={styles.select__group}>
                      <Select
                        className={styles.select}
                        options={doughTypes}
                        getOptionLabel={(doughType: DoughType) => doughType.name}
                        getOptionValue={(doughType: DoughType) => doughType.name}
                        defaultValue={editingRecipe.doughtTypes}
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
                render={({ field: { onChange }, fieldState: { error } }) => (
                  <div>
                    <div className={styles.select__group}>
                      <Select
                        className={styles.select}
                        options={ingredients}
                        getOptionLabel={(ingredient: Ingredient) => ingredient.name}
                        getOptionValue={(ingredient: Ingredient) => ingredient.name}
                        defaultValue={editingRecipe.ingredients}
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
            Сохранить
          </button>
          <button
            className={`${styles.btn} ${styles.cancel}`}
            onClick={() => {
              setIsEdit(false);
              setIsOpen('recipeModalIsOpen', !recipeModalIsOpen);
            }}
            type="button">
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
};
