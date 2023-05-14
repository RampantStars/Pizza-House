import React from 'react';
import styles from './DoughTypeEditForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { useDoughTypeStore } from '../../../Utils/Stores/DoughType.Store';
import { IDoughTypeCreate } from '../../../Utils/interface/interface';
import { onErrorToast, onSuccessToast } from '../../../Utils/toast';
import { Error } from '../../../Utils/types/types';

export const DoughTypeEditForm = () => {
  const { setIsOpen, doughTypeModalIsOpen } = useModalFramesStore(
    ({ setIsOpen, doughTypeModalIsOpen }) => ({
      setIsOpen,
      doughTypeModalIsOpen,
    }),
  );
  const { updateDoughType, editingDoughType, setIsEdit } = useDoughTypeStore(
    ({ updateDoughType, editingDoughType, setIsEdit }) => ({
      updateDoughType,
      editingDoughType,
      setIsEdit,
    }),
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDoughTypeCreate>({
    defaultValues: { name: editingDoughType.name || '', price: editingDoughType.price || 0 },
  });

  const onSubmit: SubmitHandler<IDoughTypeCreate> = async (data) => {
    try {
      await updateDoughType(editingDoughType.id, data);
      setIsEdit(false);
      setIsOpen('doughTypeModalIsOpen', !doughTypeModalIsOpen);
      onSuccessToast(`Тип теста ${data.name} успешно изменен`);
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
        <label className={styles.label}>
          Цена
          <input type="number" {...register('price')} />
          <p className={styles.error}>{errors.price?.message}</p>
        </label>
      </div>
      <div className={styles.btn__container}>
        <button className={`${styles.btn} ${styles.success}`} type="submit">
          Сохранить
        </button>
        <button
          className={`${styles.btn} ${styles.cancel}`}
          onClick={() => setIsOpen('doughTypeModalIsOpen', !doughTypeModalIsOpen)}
          type="button">
          Отменить
        </button>
      </div>
    </form>
  );
};
