import styles from '../../../scss/modal.module.scss';
import { Dialog } from '@headlessui/react';
import { useDoughTypeStore } from '../../../Utils/Stores/DoughType.Store';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { DoughTypeCreateForm } from '../../Forms/DoughTypeCreateForm';
import { DoughTypeEditForm } from '../../Forms/DoughTypeEditForm';

export const DoughTypeModal = () => {
  const { setIsEdit, isEdit } = useDoughTypeStore(({ setIsEdit, isEdit }) => ({
    setIsEdit,
    isEdit,
  }));
  const { doughTypeModalIsOpen, setIsOpen } = useModalFramesStore(
    ({ doughTypeModalIsOpen, setIsOpen }) => ({
      doughTypeModalIsOpen,
      setIsOpen,
    }),
  );

  const onClose = () => {
    setIsEdit(false);
    setIsOpen('doughTypeModalIsOpen', !doughTypeModalIsOpen);
  };

  return (
    <Dialog open={doughTypeModalIsOpen} onClose={() => onClose()}>
      <div className={styles.bg} aria-hidden="true">
        <Dialog.Panel className={styles.modal}>
          <Dialog.Title className={styles.title}>Размер пиццы</Dialog.Title>
          {isEdit ? (
            <>
              <Dialog.Description className={styles.description}>
                Изменение размера пиццы
              </Dialog.Description>
              <DoughTypeEditForm />
            </>
          ) : (
            <>
              <Dialog.Description className={styles.description}>
                Создание размера пиццы
              </Dialog.Description>
              <DoughTypeCreateForm />
            </>
          )}
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
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
