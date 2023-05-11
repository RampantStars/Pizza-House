import { Dialog } from '@headlessui/react';
import { RecipeCreateForm, RecipeEditForm } from '../../Forms';

import styles from './RecipeModal.module.scss';
import { useModalFramesStore } from '../../../Utils/Stores/ModalFramesStore';
import { useRecipeStore } from '../../../Utils/Stores/RecipeStore';

export const RecipeModal = () => {
  const { recipeModalIsOpen, setIsOpen } = useModalFramesStore(
    ({ recipeModalIsOpen, setIsOpen }) => ({ recipeModalIsOpen, setIsOpen }),
  );

  const onClose = () => {
    setIsEdit(false);
    setIsOpen('recipeModalIsOpen', !recipeModalIsOpen);
  };
  const { isEdit, setIsEdit } = useRecipeStore(({ isEdit, setIsEdit }) => ({ isEdit, setIsEdit }));

  return (
    <Dialog open={recipeModalIsOpen} onClose={() => onClose()}>
      <div className={styles.bg} aria-hidden="true">
        <Dialog.Panel className={styles.modal}>
          <Dialog.Title className={styles.title}>Рецепт</Dialog.Title>
          {isEdit ? (
            <>
              <Dialog.Description className={styles.description}>
                Изменение рецепта пиццы
              </Dialog.Description>
              <RecipeEditForm />
            </>
          ) : (
            <>
              <Dialog.Description className={styles.description}>
                Создание рецепта пиццы
              </Dialog.Description>
              <RecipeCreateForm />
            </>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
