import styles from './AdminController.module.scss';
import { AdminRecipe } from '../AdminRecipe';
import { AdminIngredient } from '../AdminIngredient';

export const AdminController = ({ controller }: { controller: string }) => {
  return (
    <div className={styles.adminController}>
      {(() => {
        switch (controller) {
          case 'Recipe':
            return <AdminRecipe />;
          case 'Ingredient':
            return <AdminIngredient />;
          default:
            return null;
        }
      })()}
    </div>
  );
};
