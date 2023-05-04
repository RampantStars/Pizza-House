import styles from './IngredientCreateForm.module.scss';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { useIngredientStore } from '../../../Utils/Stores/IngredientStore';
import { onErrorToast, onSuccessToast } from '../../../Utils/toast';
import { Error, TypeIngredient } from '../../../Utils/types/types';
import { IIngredientCreate } from '../../../Utils/interface/interface';
import Select from 'react-select';
import { useTypeIngredientStore } from '../../../Utils/Stores/TypeIngredientSrote';

export const IngredientCreateForm = () => {
  const { setIsOpen, ingredientModalIsOpen, recipeModalIsOpen } = useModalFramesStore(
    ({ setIsOpen, ingredientModalIsOpen, recipeModalIsOpen }) => ({
      setIsOpen,
      ingredientModalIsOpen,
      recipeModalIsOpen,
    }),
  );

  const createIngredient = useIngredientStore((state) => state.createIngredient);
  const typeIngredients = useTypeIngredientStore((state) => state.typeIngredients);

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
  } = useForm<IIngredientCreate>();

  const onSubmit: SubmitHandler<IIngredientCreate> = async (data) => {
    try {
      const newData = new FormData();
      newData.append('image', data.image[0]);
      newData.append('name', data.name);
      newData.append('typeIngredientId', data.typeIngredientId.id.toString());
      console.log('newData :>> ', data);
      await createIngredient(newData);
      setIsOpen('ingredientModalIsOpen', !ingredientModalIsOpen);
      onSuccessToast(`Ингредиент ${data.name} успешно создан`);
    } catch (e: any) {
      const error = { ...(e as Error) };
      onErrorToast({ ...error });
    }
  };

  return (
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
            Название ингредиента
            <input type="text" {...register('name')} />
            <p className={styles.error}>{errors.name?.message}</p>
          </label>
        </div>
        <div className={styles.form__right}>
          <label className={styles.label}>
            Доступные размеры рецепта
            <Controller
              control={control}
              name="typeIngredientId"
              rules={{ required: 'Это поле обязательное' }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <div>
                  <div className={styles.select__group}>
                    <Select
                      className={styles.select}
                      options={typeIngredients}
                      getOptionLabel={(typeIngredient: TypeIngredient) => typeIngredient.name}
                      getOptionValue={(typeIngredient: TypeIngredient) =>
                        typeIngredient.id.toString()
                      }
                      isClearable
                      placeholder="Тип ингредиента пиццы"
                      noOptionsMessage={() => 'Нет такого типа'}
                      onChange={(newValue) => onChange(newValue)}
                      // value={(value: string) =>
                      //   value
                      //     ? typeIngredients.find((option) => option.id.toString() === value)
                      //     : ''
                      // }
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
        </div>
      </div>
      <div className={styles.btn__container}>
        <button className={`${styles.btn} ${styles.success}`} type="submit">
          Создать
        </button>
        <button
          className={`${styles.btn} ${styles.cancel}`}
          onClick={() => setIsOpen('ingredientModalIsOpen', !ingredientModalIsOpen)}
          type="button">
          Отменить
        </button>
      </div>
    </form>
  );
};
