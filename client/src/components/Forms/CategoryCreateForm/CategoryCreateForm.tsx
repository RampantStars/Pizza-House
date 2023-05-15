import React from 'react';
import styles from './CategoryCreateForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { useCategoryStore } from '../../../Utils/Stores/CategoryStore';
import { onErrorToast, onSuccessToast } from '../../../Utils/toast';
import { Error } from '../../../Utils/types/types';

export const CategoryCreateForm = () => {
  const { setIsOpen, categoryModalIsOpen } = useModalFramesStore(
    ({ setIsOpen, categoryModalIsOpen }) => ({
      setIsOpen,
      categoryModalIsOpen,
    }),
  );

  const createCategory = useCategoryStore((state) => state.createCategory);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string }>();

  const onSubmit: SubmitHandler<{ name: string }> = async (data) => {
    try {
      await createCategory(data.name);
      setIsOpen('categoryModalIsOpen', !categoryModalIsOpen);
      onSuccessToast(`Категория ${data.name} успешно создана`);
    } catch (e: any) {
      const error = { ...(e as Error) };
      onErrorToast({ ...error });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__container}>
        <label className={styles.label}>
          Название
          <input type="text" {...register('name')} />
          <p className={styles.error}>{errors.name?.message}</p>
        </label>
      </div>
      <div className={styles.btn__container}>
        <button className={`${styles.btn} ${styles.success}`} type="submit">
          Создать
        </button>
        <button
          className={`${styles.btn} ${styles.cancel}`}
          onClick={() => setIsOpen('categoryModalIsOpen', !categoryModalIsOpen)}
          type="button">
          Отменить
        </button>
      </div>
    </form>
  );
};
