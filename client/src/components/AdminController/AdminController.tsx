import styles from './AdminController.module.scss';
import { AdminRecipe } from '../AdminRecipe';
import { AdminIngredient } from '../AdminIngredient';
import { AdminSize } from '../AdminSize';

export const AdminController = ({ controller }: { controller: string }) => {
  return (
    <div className={styles.adminController}>
      {(() => {
        switch (controller) {
          case 'Recipe':
            return <AdminRecipe />;
          case 'Ingredient':
            return <AdminIngredient />;
          case 'Size':
            return <AdminSize />;
          default:
            return null;
        }
      })()}
    </div>
  );
};
