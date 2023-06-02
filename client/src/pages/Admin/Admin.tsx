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
import { AdditionalIngredientModal } from '../../components/Modals/AdditionalIngredientModal';
import { useSizeStore } from '../../Utils/Stores/SizeStore';
import { useDoughTypeStore } from '../../Utils/Stores/DoughType.Store';
import { useIngredientStore } from '../../Utils/Stores/IngredientStore';
import { useTypeIngredientStore } from '../../Utils/Stores/TypeIngredientSrote';
import { useUserStore } from '../../Utils/Stores/UserStore';

export const Admin = () => {
  const [controller, setController] = React.useState('Recipe');

  const fetchSizes = useSizeStore((state) => state.fetchSizes);
  const fetchDoughTypes = useDoughTypeStore((state) => state.fetchDoughTypes);
  const fetchIngredients = useIngredientStore((state) => state.fetchIngredients);

  const fetchTypeIngredients = useTypeIngredientStore((state) => state.fetchTypeIngredients);
  const { fetchUsers, fetchRole } = useUserStore(({ fetchUsers, fetchRole }) => ({
    fetchUsers,
    fetchRole,
  }));

  const fetchData = async () => {
    try {
      fetchDoughTypes();
      fetchSizes();
      fetchIngredients();
      fetchTypeIngredients();
      fetchUsers();
      fetchRole();
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

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
      <AdditionalIngredientModal />
    </div>
  );
};
