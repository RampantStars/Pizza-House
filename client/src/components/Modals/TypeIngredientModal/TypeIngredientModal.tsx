import React from 'react';
import styles from '../../../scss/modal.module.scss';
import { Dialog } from '@headlessui/react';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { TypeIngredientCreateForm } from '../../Forms/TypeIngredientCreateForm';
import { useTypeIngredientStore } from '../../../Utils/Stores/TypeIngredientSrote';
import { TypeIngredientEditForm } from '../../Forms/TypeIngredientEditForm';

export const TypeIngredientModal = () => {
  const { typeIngredientModalIsOpen, setIsOpen } = useModalFramesStore(
    ({ typeIngredientModalIsOpen, setIsOpen }) => ({ typeIngredientModalIsOpen, setIsOpen }),
  );
  const { setIsEdit, isEdit } = useTypeIngredientStore(({ setIsEdit, isEdit }) => ({
    setIsEdit,
    isEdit,
  }));

  const onClose = () => {
    setIsEdit(false);
    setIsOpen('typeIngredientModalIsOpen', !typeIngredientModalIsOpen);
  };
  return (
    <Dialog open={typeIngredientModalIsOpen} onClose={() => onClose()}>
      <div className={styles.bg} aria-hidden="true">
        <Dialog.Panel className={styles.modal}>
          <Dialog.Title className={styles.title}>Тип ингредиента</Dialog.Title>
          {isEdit ? (
            <>
              <Dialog.Description className={styles.description}>
                Изменение типа ингредиента для пиццы
              </Dialog.Description>
              <TypeIngredientEditForm />
            </>
          ) : (
            <>
              <Dialog.Description className={styles.description}>
                Создание типа ингредиента для пиццы
              </Dialog.Description>
              <TypeIngredientCreateForm />
            </>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
