import { Dialog } from '@headlessui/react';

import styles from './SizeModal.module.scss';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { SizeCreateForm } from '../../Forms';

export const SizeModal = () => {
  const { sizeModalIsOpen, setIsOpen } = useModalFramesStore(({ sizeModalIsOpen, setIsOpen }) => ({
    sizeModalIsOpen,
    setIsOpen,
  }));
  return (
    <Dialog open={sizeModalIsOpen} onClose={() => setIsOpen('sizeModalIsOpen', !sizeModalIsOpen)}>
      <div className={styles.bg} aria-hidden="true">
        <Dialog.Panel className={styles.modal}>
          <Dialog.Title className={styles.title}>Создание рецепта</Dialog.Title>
          <Dialog.Description className={styles.description}>
            Создание размера пиццы
          </Dialog.Description>
          <SizeCreateForm />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
