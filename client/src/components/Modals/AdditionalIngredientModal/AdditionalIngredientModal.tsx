import styles from '../../../scss/modal.module.scss';
import { Dialog } from '@headlessui/react';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { useAdditionalIngredientStore } from '../../../Utils/Stores/AdditionalIngredientsStore';
import { AdditionalIngredientCreateForm } from '../../Forms/AdditionalIngredientCreateForm';
import { AdditionalIngredientEditForm } from '../../Forms/AdditionalIngredientEditForm';

export const AdditionalIngredientModal = () => {
  const { additionalIngredientModalIsOpen, setIsOpen } = useModalFramesStore(
    ({ additionalIngredientModalIsOpen, setIsOpen }) => ({
      additionalIngredientModalIsOpen,
      setIsOpen,
    }),
  );

  const { isEdit, setIsEdit } = useAdditionalIngredientStore(({ isEdit, setIsEdit }) => ({
    isEdit,
    setIsEdit,
  }));

  const onClose = () => {
    setIsEdit(false);
    setIsOpen('additionalIngredientModalIsOpen', !additionalIngredientModalIsOpen);
  };

  return (
    <div className={styles.additionalIngredientModal}>
      <Dialog open={additionalIngredientModalIsOpen} onClose={() => onClose()}>
        <div className={styles.bg} aria-hidden="true">
          <Dialog.Panel className={styles.modal}>
            <Dialog.Title className={styles.title}>Дополнительный ингредиент</Dialog.Title>
            {isEdit ? (
              <>
                <Dialog.Description className={styles.description}>
                  Изменение дополнительного ингредиента для пиццы
                </Dialog.Description>
                <AdditionalIngredientEditForm />
              </>
            ) : (
              <>
                <Dialog.Description className={styles.description}>
                  Создание дополнительного ингредиента для пиццы
                </Dialog.Description>
                <AdditionalIngredientCreateForm />
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};
