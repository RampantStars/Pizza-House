import React from 'react';
import styles from './TypeIngredientEditForm.module.scss';
import { useTypeIngredientStore } from '../../../Utils/Stores/TypeIngredientSrote';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { ITypeIngredientCreate } from '../../../Utils/interface/interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import { onErrorToast, onSuccessToast } from '../../../Utils/toast';
import { Error } from '../../../Utils/types/types';
import { useIngredientStore } from '../../../Utils/Stores/IngredientStore';

export const TypeIngredientEditForm = () => {
  const { setIsOpen, typeIngredientModalIsOpen } = useModalFramesStore(
    ({ setIsOpen, typeIngredientModalIsOpen }) => ({
      setIsOpen,
      typeIngredientModalIsOpen,
    }),
  );

  const fetchIngredients = useIngredientStore((state) => state.fetchIngredients);

  const { updateTypeIngredient, editingTypeIngredient, setIsEdit, fetchTypeIngredients } =
    useTypeIngredientStore(
      ({ updateTypeIngredient, editingTypeIngredient, setIsEdit, fetchTypeIngredients }) => ({
        updateTypeIngredient,
        editingTypeIngredient,
        setIsEdit,
        fetchTypeIngredients,
      }),
    );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITypeIngredientCreate>({ defaultValues: { name: editingTypeIngredient.name || '' } });

  const onSubmit: SubmitHandler<ITypeIngredientCreate> = async (data) => {
    try {
      await updateTypeIngredient(editingTypeIngredient.id, data);
      fetchIngredients();
      fetchTypeIngredients();
      setIsEdit(false);
      setIsOpen('typeIngredientModalIsOpen', !typeIngredientModalIsOpen);
      onSuccessToast(`Тип ${data.name} успешно обновлен`);
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
          onClick={() => {
            setIsOpen('typeIngredientModalIsOpen', !typeIngredientModalIsOpen);
            setIsEdit(false);
          }}
          type="button">
          Отменить
        </button>
      </div>
    </form>
  );
};
