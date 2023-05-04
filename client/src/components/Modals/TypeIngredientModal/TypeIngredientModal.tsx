import React from 'react';
import styles from './TypeIngredientModal.module.scss';
import { Dialog } from '@headlessui/react';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { TypeIngredientCreateForm } from '../../Forms/TypeIngredientCreateForm';

export const TypeIngredientModal = () => {
  const { typeIngredientModalIsOpen, setIsOpen } = useModalFramesStore(
    ({ typeIngredientModalIsOpen, setIsOpen }) => ({ typeIngredientModalIsOpen, setIsOpen }),
  );
  return (
    <Dialog
      open={typeIngredientModalIsOpen}
      onClose={() => setIsOpen('typeIngredientModalIsOpen', !typeIngredientModalIsOpen)}>
      <div className={styles.bg} aria-hidden="true">
        <Dialog.Panel className={styles.modal}>
          <Dialog.Title className={styles.title}>Создание типа ингредиента</Dialog.Title>
          <Dialog.Description className={styles.description}>
            Создание типа ингредиента для пиццы
          </Dialog.Description>
          <TypeIngredientCreateForm />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
