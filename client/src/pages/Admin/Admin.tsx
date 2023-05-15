import React from 'react';
import styles from './Admin.module.scss';
import { AdminSidePanel } from '../../components/AdminSidePanel';
import { AdminController } from '../../components/AdminController';
import { RecipeModal } from '../../components/Modals/RecipeModal';
import { SizeModal } from '../../components/Modals/SizeModal';
import { DeleteModal } from '../../components/Modals/DeleteModal';
import { IngredientModal } from '../../components/Modals/IngredientModal';
import { TypeIngredientModal } from '../../components/Modals/TypeIngredientModal';
import { DoughTypeModal } from '../../components/Modals/DoughTypeModal';
import { CategoryModal } from '../../components/Modals/CategoryModal';

export const Admin = () => {
  const [controller, setController] = React.useState('Recipe');

  return (
    <div className={styles.container}>
      <AdminSidePanel setController={setController} />
      <AdminController controller={controller} />
      <RecipeModal />
      <SizeModal />
      <DeleteModal />
      <IngredientModal />
      <TypeIngredientModal />
      <DoughTypeModal />
      <CategoryModal />
    </div>
  );
};
