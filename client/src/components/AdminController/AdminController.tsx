import styles from './AdminController.module.scss';
import { AdminRecipe } from '../AdminRecipe';
import { AdminIngredient } from '../AdminIngredient';
import { AdminSize } from '../AdminSize';
import { AdminUser } from '../AdminUser';
import { AdminDoughType } from '../AdminDoughType';
import { AdminAdditionalIngredients } from '../AdminAdditionalIngredients';

export const AdminController = ({ controller }: { controller: string }) => {
  return (
    <div className={styles.adminController}>
      {(() => {
        switch (controller) {
          case 'Recipe':
            return <AdminRecipe />;
          case 'Ingredient':
            return <AdminIngredient />;
          case 'AdditionalIngredients':
            return <AdminAdditionalIngredients />;
          case 'Size':
            return <AdminSize />;
          case 'Users':
            return <AdminUser />;
          case 'DoughType':
            return <AdminDoughType />;
          default:
            return null;
        }
      })()}
    </div>
  );
};
