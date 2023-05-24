import { useState } from 'react';
import styles from './AdditionalIngredientCreateForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { onErrorToast, onSuccessToast } from '../../../Utils/toast';
import { IAdditionalIngredientCreate } from '../../../Utils/interface/interface';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { useAdditionalIngredientStore } from '../../../Utils/Stores/AdditionalIngredientsStore';
import { Error } from '../../../Utils/types/types';

export const AdditionalIngredientCreateForm = () => {
  const { setIsOpen, additionalIngredientModalIsOpen } = useModalFramesStore(
    ({ setIsOpen, additionalIngredientModalIsOpen }) => ({
      setIsOpen,
      additionalIngredientModalIsOpen,
    }),
  );

  const createAdditionalIngredient = useAdditionalIngredientStore(
    (state) => state.createAdditionalIngredient,
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
  } = useForm<IAdditionalIngredientCreate>();

  const onSubmit: SubmitHandler<IAdditionalIngredientCreate> = async (data) => {
    console.log('data. :>> ', data.image);
    try {
      const newData = new FormData();
      newData.append('name', data.name);
      newData.append('image', data.image[0]);
      newData.append('price', data.price.toString());
      newData.append('weight', data.weight.toString());
      newData.append('maxCount', data.maxCount.toString());
      await createAdditionalIngredient(newData);
      setIsOpen('additionalIngredientModalIsOpen', !additionalIngredientModalIsOpen);
      onSuccessToast(`Дополнительный ингредиент ${data.name} успешно создан`);
    } catch (e: any) {
      const error = { ...(e as Error) };
      onErrorToast({ ...error });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__container}>
        <label className={styles.label}>
          Картинка дополнительного ингредиента
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
          Создать
        </button>
        <button
          className={`${styles.btn} ${styles.cancel}`}
          onClick={() =>
            setIsOpen('additionalIngredientModalIsOpen', !additionalIngredientModalIsOpen)
          }
          type="button">
          Отменить
        </button>
      </div>
    </form>
  );
};
