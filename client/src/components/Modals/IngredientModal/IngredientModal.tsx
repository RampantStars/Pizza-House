import React from 'react';
import styles from './IngredientModal.module.scss';
import { Dialog } from '@headlessui/react';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { IngredientCreateForm } from '../../Forms/IngredientCreateForm';

export const IngredientModal = () => {
  const { ingredientModalIsOpen, setIsOpen } = useModalFramesStore(
    ({ ingredientModalIsOpen, setIsOpen }) => ({ ingredientModalIsOpen, setIsOpen }),
  );

  return (
    <div className={styles.ingredientModal}>
      <Dialog
        open={ingredientModalIsOpen}
        onClose={() => setIsOpen('ingredientModalIsOpen', !ingredientModalIsOpen)}>
        <div className={styles.bg} aria-hidden="true">
          <Dialog.Panel className={styles.modal}>
            <Dialog.Title className={styles.title}>Создание ингредиента</Dialog.Title>
            <Dialog.Description className={styles.description}>
              Создание ингредиента для пиццы
            </Dialog.Description>
            <IngredientCreateForm />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};
