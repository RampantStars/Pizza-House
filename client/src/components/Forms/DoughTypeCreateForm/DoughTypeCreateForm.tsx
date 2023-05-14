import styles from './DoughTypeCreateForm.module.scss';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDoughTypeStore } from '../../../Utils/Stores/DoughType.Store';
import { IDoughTypeCreate } from '../../../Utils/interface/interface';
import { onErrorToast, onSuccessToast } from '../../../Utils/toast';
import { Error } from '../../../Utils/types/types';

export const DoughTypeCreateForm = () => {
  const { setIsOpen, doughTypeModalIsOpen } = useModalFramesStore(
    ({ setIsOpen, doughTypeModalIsOpen }) => ({
      setIsOpen,
      doughTypeModalIsOpen,
    }),
  );
  const createDoughType = useDoughTypeStore((state) => state.createDoughType);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDoughTypeCreate>();

  const onSubmit: SubmitHandler<IDoughTypeCreate> = async (data) => {
    try {
      await createDoughType(data);
      setIsOpen('doughTypeModalIsOpen', doughTypeModalIsOpen);
      onSuccessToast(`Тип теста ${data.name} успешно создан`);
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
          Создать
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
