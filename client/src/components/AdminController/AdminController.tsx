import React from 'react';
import styles from './AdminController.module.scss';
import { AdminRecipe } from '../AdminRecipe';

export const AdminController = ({ controller }: { controller: string }) => {
  return (
    <div className={styles.adminController}>
      {(() => {
        switch (controller) {
          case 'Recipe':
            return <AdminRecipe />;
          default:
            return null;
        }
      })()}
    </div>
  );
};
