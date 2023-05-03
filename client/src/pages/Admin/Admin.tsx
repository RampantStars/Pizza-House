import React from 'react';
import styles from './Admin.module.scss';
import { AdminSidePanel } from '../../components/AdminSidePanel';
import { AdminController } from '../../components/AdminController';

export const Admin = () => {
  const [controller, setController] = React.useState('Recipe');

  return (
    <div className={styles.container}>
      <AdminSidePanel setController={setController} />
      <AdminController controller={controller} />
    </div>
  );
};
