import { Dialog } from '@headlessui/react';
import styles from './SizeModal.module.scss';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { SizeCreateForm } from '../../Forms';
import { useSizeStore } from '../../../Utils/Stores/SizeStore';
import { SizeEditForm } from '../../Forms/SizeEditForm';

export const SizeModal = () => {
  const { setIsEdit, isEdit } = useSizeStore(({ setIsEdit, isEdit }) => ({ setIsEdit, isEdit }));
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
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
