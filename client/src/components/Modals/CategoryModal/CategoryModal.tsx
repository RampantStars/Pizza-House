import styles from '../../../scss/modal.module.scss';
import { Dialog } from '@headlessui/react';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { CategoryCreateForm } from '../../Forms/CategoryCreateForm';

export const CategoryModal = () => {
  const { categoryModalIsOpen, setIsOpen } = useModalFramesStore(
    ({ categoryModalIsOpen, setIsOpen }) => ({
      categoryModalIsOpen,
      setIsOpen,
    }),
  );

  const onClose = () => {
    setIsOpen('categoryModalIsOpen', !categoryModalIsOpen);
  };
  return (
    <Dialog open={categoryModalIsOpen} onClose={() => onClose()}>
      <div className={styles.bg} aria-hidden="true">
        <Dialog.Panel className={styles.modal}>
          <Dialog.Title className={styles.title}>Размер пиццы</Dialog.Title>
          <Dialog.Description className={styles.description}>
            Создание размера пиццы
          </Dialog.Description>
          <CategoryCreateForm />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
