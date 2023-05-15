import React from 'react';
import styles from './AdminDoughType.module.scss';
import { useModalFramesStore } from '../../Utils/Stores/ModalFramesStore';
import { useDoughTypeStore } from '../../Utils/Stores/DoughType.Store';
import { DoughTypeCard } from '../DoughTypeCard';

export const AdminDoughType = () => {
  const doughTypes = useDoughTypeStore((state) => state.doughTypes);
  const { setIsOpen, doughTypeModalIsOpen } = useModalFramesStore(
    ({ setIsOpen, doughTypeModalIsOpen }) => ({
      setIsOpen,
      doughTypeModalIsOpen,
    }),
  );
  return (
    <div className={styles.adminDoughType}>
      <button
        onClick={() => setIsOpen('doughTypeModalIsOpen', !doughTypeModalIsOpen)}
        className={styles.btn}>
        Добавить тип теста
      </button>
      <div className={styles.doughTypeList}>
        {doughTypes.map((doughType) => (
          <DoughTypeCard key={doughType.id} {...doughType} />
        ))}
      </div>
    </div>
  );
};
