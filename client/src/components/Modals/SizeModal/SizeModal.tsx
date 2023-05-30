import { Dialog } from '@headlessui/react';
import styles from './SizeModal.module.scss';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { SizeCreateForm } from '../../Forms';
import { useSizeStore } from '../../../Utils/Stores/SizeStore';
import { SizeEditForm } from '../../Forms/SizeEditForm';

export const SizeModal = () => {
  const { setIsEdit, isEdit, sizes } = useSizeStore(({ setIsEdit, isEdit, sizes }) => ({
    setIsEdit,
    isEdit,
    sizes,
  }));
  const { sizeModalIsOpen, setIsOpen } = useModalFramesStore(({ sizeModalIsOpen, setIsOpen }) => ({
    sizeModalIsOpen,
    setIsOpen,
  }));

  const onClose = () => {
    setIsEdit(false);
    setIsOpen('sizeModalIsOpen', !sizeModalIsOpen);
  };

  return (
    <Dialog open={sizeModalIsOpen} onClose={() => onClose()}>
      <div className={styles.bg} aria-hidden="true">
        <Dialog.Panel className={styles.modal}>
          <div className={styles.modal__container}>
            <Dialog.Title className={styles.title}>Размер пиццы</Dialog.Title>
            {isEdit ? (
              <>
                <Dialog.Description className={styles.description}>
                  Изменение размера пиццы
                </Dialog.Description>
                <SizeEditForm />
              </>
            ) : (
              <>
                <Dialog.Description className={styles.description}>
                  Создание размера пиццы
                </Dialog.Description>
                <SizeCreateForm />
              </>
            )}
            <div className={styles.sizes__container}>
              <h4 className={styles.sizes__title}>Существующие размеры пицц</h4>
              <ul className={styles.sizes__list}>
                {sizes.map((size) => (
                  <li key={size.id} className={styles.sizes__item}>
                    <p className={styles.sizes__name}>{size.name}</p>
                    <p className={styles.sizes__price}>{size.price} ₽</p>
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={() => onClose()} className={styles.btn__close}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="#0F1729"
                />
              </svg>
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
