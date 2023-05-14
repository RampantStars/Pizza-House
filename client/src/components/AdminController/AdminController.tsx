import styles from './AdminController.module.scss';
import { AdminRecipe } from '../AdminRecipe';
import { AdminIngredient } from '../AdminIngredient';
import { AdminSize } from '../AdminSize';
import { AdminUser } from '../AdminUser';
import { AdminDoughType } from '../AdminDoughType';

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
