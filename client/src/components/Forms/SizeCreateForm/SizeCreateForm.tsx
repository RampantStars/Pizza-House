import styles from './SizeCreateForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ISizeCreate } from '../../../Utils/interface/interface';
import { onErrorToast } from '../../../Utils/toast';
import { Error } from '../../../Utils/types/types';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { useSizeStore } from '../../../Utils/Stores/SizeStore';

export const SizeCreateForm = () => {
  const { setIsOpen, sizeModalIsOpen } = useModalFramesStore(({ setIsOpen, sizeModalIsOpen }) => ({
    setIsOpen,
    sizeModalIsOpen,
  }));

  const createSize = useSizeStore((state) => state.createSize);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISizeCreate>();

  const onSubmit: SubmitHandler<ISizeCreate> = async (data) => {
    await createSize(data);
    setIsOpen('sizeModalIsOpen', sizeModalIsOpen);
    try {
      setIsOpen('sizeModalIsOpen', !sizeModalIsOpen);
    } catch (e: any) {
      const error = { ...(e as Error) };
      onErrorToast({ ...error });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__container}>
        <label className={styles.label}>
          Размер
          <input type="number" {...register('value')} />
          <p className={styles.error}>{errors.value?.message}</p>
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
          onClick={() => setIsOpen('sizeModalIsOpen', !sizeModalIsOpen)}
          type="button">
          Отменить
        </button>
      </div>
    </form>
  );
};
