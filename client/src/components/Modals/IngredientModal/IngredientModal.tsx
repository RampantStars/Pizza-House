import styles from '../../../scss/modal.module.scss';
import { Dialog } from '@headlessui/react';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { IngredientCreateForm } from '../../Forms/IngredientCreateForm';
import { IngredientEditForm } from '../../Forms';
import { useIngredientStore } from '../../../Utils/Stores/IngredientStore';

export const IngredientModal = () => {
  const { ingredientModalIsOpen, setIsOpen } = useModalFramesStore(
    ({ ingredientModalIsOpen, setIsOpen }) => ({ ingredientModalIsOpen, setIsOpen }),
  );

  const { isEdit, setIsEdit } = useIngredientStore(({ isEdit, setIsEdit }) => ({
    isEdit,
    setIsEdit,
  }));

  const onClose = () => {
    setIsEdit(false);
    setIsOpen('ingredientModalIsOpen', !ingredientModalIsOpen);
  };

  return (
    <div className={styles.ingredientModal}>
      <Dialog open={ingredientModalIsOpen} onClose={() => onClose()}>
        <div className={styles.bg} aria-hidden="true">
          <Dialog.Panel className={styles.modal}>
            <Dialog.Title className={styles.title}>Ингредиент</Dialog.Title>
            {isEdit ? (
              <>
                <Dialog.Description className={styles.description}>
                  Изменение ингредиента для пиццы
                </Dialog.Description>
                <IngredientEditForm />
              </>
            ) : (
              <>
                <Dialog.Description className={styles.description}>
                  Создание ингредиента для пиццы
                </Dialog.Description>
                <IngredientCreateForm />
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};
