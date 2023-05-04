import styles from './TypeIngredientCreateForm.module.scss';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { useTypeIngredientStore } from '../../../Utils/Stores/TypeIngredientSrote';
import { SubmitHandler, useForm } from 'react-hook-form';
import { onErrorToast } from '../../../Utils/toast';
import { Error } from '../../../Utils/types/types';
import { ITypeIngredientCreate } from '../../../Utils/interface/interface';

export const TypeIngredientCreateForm = () => {
  const { setIsOpen, typeIngredientModalIsOpen } = useModalFramesStore(
    ({ setIsOpen, typeIngredientModalIsOpen }) => ({
      setIsOpen,
      typeIngredientModalIsOpen,
    }),
  );

  const createTypeIngredient = useTypeIngredientStore((state) => state.createTypeIngredient);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITypeIngredientCreate>();

  const onSubmit: SubmitHandler<ITypeIngredientCreate> = async (data) => {
    await createTypeIngredient(data);
    setIsOpen('typeIngredientModalIsOpen', !typeIngredientModalIsOpen);
    try {
      setIsOpen('typeIngredientModalIsOpen', !typeIngredientModalIsOpen);
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
          onClick={() => setIsOpen('typeIngredientModalIsOpen', !typeIngredientModalIsOpen)}
          type="button">
          Отменить
        </button>
      </div>
    </form>
  );
};
