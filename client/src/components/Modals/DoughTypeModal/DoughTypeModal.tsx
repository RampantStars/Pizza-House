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
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
