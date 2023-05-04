import React, { FC } from 'react';
import styles from './DeleteModal.module.scss';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { Dialog } from '@headlessui/react';
import { onErrorToast, onSuccessToast } from '../../../Utils/toast';
import { Error } from '../../../Utils/types/types';

export const DeleteModal = () => {
  const { deleteModalIsOpen, setIsOpen } = useModalFramesStore(
    ({ deleteModalIsOpen, setIsOpen }) => ({ deleteModalIsOpen, setIsOpen }),
  );

  const deleteObject = useModalFramesStore((state) => state.deleteObject);

  const onClick = () => {
    try {
      deleteObject.action();
      setIsOpen('deleteModalIsOpen', !deleteModalIsOpen);
      onSuccessToast(`Удаление ${deleteObject.name} прошло успешно`);
    } catch (e) {
      const error = { ...(e as Error) };
      onErrorToast({ ...error });
    }
  };

  return (
    <Dialog
      open={deleteModalIsOpen}
      onClose={() => setIsOpen('deleteModalIsOpen', !deleteModalIsOpen)}>
      <div className={styles.bg} aria-hidden="true">
        <Dialog.Panel className={styles.modal}>
          <Dialog.Title className={styles.title}>Удаление {deleteObject.name}</Dialog.Title>
          <div>
            <h1 className={styles.text}>Вы точно хотите удалить {deleteObject.name}?</h1>
            <div className={styles.btn__container}>
              <button
                onClick={() => onClick()}
                className={`${styles.btn} ${styles.success}`}
                type="submit">
                Да
              </button>
              <button
                className={`${styles.btn} ${styles.cancel}`}
                onClick={() => setIsOpen('deleteModalIsOpen', !deleteModalIsOpen)}
                type="button">
                Нет
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
