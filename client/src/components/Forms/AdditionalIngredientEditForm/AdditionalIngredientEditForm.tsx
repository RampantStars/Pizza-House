import { useState } from 'react';
import styles from './AdditionalIngredientEditForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { useAdditionalIngredientStore } from '../../../Utils/Stores/AdditionalIngredientsStore';
import { IAdditionalIngredientCreate } from '../../../Utils/interface/interface';
import { onErrorToast, onSuccessToast } from '../../../Utils/toast';
import { Error } from '../../../Utils/types/types';

export const AdditionalIngredientEditForm = () => {
  const { setIsOpen, additionalIngredientModalIsOpen } = useModalFramesStore(
    ({ setIsOpen, additionalIngredientModalIsOpen }) => ({
      setIsOpen,
      additionalIngredientModalIsOpen,
    }),
  );

  const { updateAdditionalIngredient, editingAdditionalIngredient, setIsEdit } =
    useAdditionalIngredientStore(
      ({ updateAdditionalIngredient, editingAdditionalIngredient, setIsEdit }) => ({
        updateAdditionalIngredient,
        editingAdditionalIngredient,
        setIsEdit,
      }),
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
    formState: { errors },
  } = useForm<IAdditionalIngredientCreate>({
    defaultValues: {
      name: editingAdditionalIngredient.name || '',
      price: editingAdditionalIngredient.price || 0,
      weight: editingAdditionalIngredient.weight || 0,
      maxCount: editingAdditionalIngredient.maxCount,
    },
  });

  const onSubmit: SubmitHandler<IAdditionalIngredientCreate> = async (data) => {
    console.log('data. :>> ', data.image);
    try {
      const newData = new FormData();
      newData.append('name', data.name);
      if (data.image) newData.append('image', data.image[0]);
      newData.append('price', data.price.toString());
      newData.append('weight', data.weight.toString());
      newData.append('maxCount', data.maxCount.toString());
      await updateAdditionalIngredient(editingAdditionalIngredient.id, newData);
      setIsOpen('additionalIngredientModalIsOpen', !additionalIngredientModalIsOpen);
      onSuccessToast(`Дополнительный ингредиент ${data.name} успешно обновлен`);
    } catch (e: any) {
      const error = { ...(e as Error) };
      console.log('e :>> ', e);
      onErrorToast({ ...error });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__container}>
        <label className={styles.label}>
          Картинка дополнительного ингредиента
          {!image ? (
            <img
              alt="Загруженная картинка"
              className={styles.img}
              src={`http://localhost:5000/${editingAdditionalIngredient.imageUrl}`}
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
            Название дополнительного ингредиента
            <input type="text" {...register('name')} />
            <p className={styles.error}>{errors.name?.message}</p>
          </label>
        </div>
        <div className={styles.form__right}>
          <label className={styles.label}>
            Цена
            <input type="number" {...register('price')} />
            <p className={styles.error}>{errors.price?.message}</p>
          </label>
          <label className={styles.label}>
            Вес
            <input type="number" {...register('weight')} />
            <p className={styles.error}>{errors.weight?.message}</p>
          </label>
          <label className={styles.label}>
            Доступное максимальное количество для добавления
            <input type="number" {...register('maxCount')} />
            <p className={styles.error}>{errors.maxCount?.message}</p>
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
            setIsOpen('additionalIngredientModalIsOpen', !additionalIngredientModalIsOpen);
            setIsEdit(false);
          }}
          type="button">
          Отменить
        </button>
      </div>
    </form>
  );
};
