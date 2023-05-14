import { useState } from 'react';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { useIngredientStore } from '../../../Utils/Stores/IngredientStore';
import { useTypeIngredientStore } from '../../../Utils/Stores/TypeIngredientSrote';
import { IIngredientCreate } from '../../../Utils/interface/interface';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { onErrorToast, onSuccessToast } from '../../../Utils/toast';
import { Error, TypeIngredient } from '../../../Utils/types/types';
import Select from 'react-select';

import styles from './IngredientEditForm.module.scss';

export const IngredientEditForm = () => {
  const { setIsOpen, ingredientModalIsOpen, typeIngredientModalIsOpen } = useModalFramesStore(
    ({ setIsOpen, ingredientModalIsOpen, typeIngredientModalIsOpen }) => ({
      setIsOpen,
      ingredientModalIsOpen,
      typeIngredientModalIsOpen,
    }),
  );

  const { updateIngredient, editingIngredient, setIsEdit } = useIngredientStore(
    ({ updateIngredient, editingIngredient, setIsEdit }) => ({
      updateIngredient,
      editingIngredient,
      setIsEdit,
    }),
  );
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
  } = useForm<IIngredientCreate>({
    defaultValues: {
      name: editingIngredient.name || '',
    },
  });

  const onSubmit: SubmitHandler<IIngredientCreate> = async (data) => {
    try {
      const newData = new FormData();
      newData.append('name', data.name);
      newData.append('typeIngredientId', data.typeIngredientId.id.toString());
      if (data.image) newData.append('image', data.image[0]);
      await updateIngredient(editingIngredient.id, newData);
      setIsEdit(false);
      setIsOpen('ingredientModalIsOpen', !ingredientModalIsOpen);
      onSuccessToast(`Ингредиент ${data.name} успешно изменён`);
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
            <img
              alt="Загруженная картинка"
              className={styles.img}
              src={`http://localhost:5000/${editingIngredient.imageUrl}`}
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
              render={({ field: { onChange }, fieldState: { error } }) => (
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
                      defaultValue={editingIngredient.typeIngredient}
                    />
                    <button
                      onClick={() =>
                        setIsOpen('typeIngredientModalIsOpen', !typeIngredientModalIsOpen)
                      }
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
        </div>
      </div>
      <div className={styles.btn__container}>
        <button className={`${styles.btn} ${styles.success}`} type="submit">
          Сохранить
        </button>
        <button
          className={`${styles.btn} ${styles.cancel}`}
          onClick={() => {
            setIsOpen('ingredientModalIsOpen', !ingredientModalIsOpen);
            setIsEdit(false);
          }}
          type="button">
          Отменить
        </button>
      </div>
    </form>
  );
};
