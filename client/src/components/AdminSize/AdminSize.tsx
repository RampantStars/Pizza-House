import { useModalFramesStore } from '../../Utils/Stores/ModalFramesStore';
import { useSizeStore } from '../../Utils/Stores/SizeStore';
import { SizeCard } from '../SizeCard';
import styles from './AdminSize.module.scss';

export const AdminSize = () => {
  const sizes = useSizeStore((state) => state.sizes);
  const { setIsOpen, sizeModalIsOpen } = useModalFramesStore(({ setIsOpen, sizeModalIsOpen }) => ({
    setIsOpen,
    sizeModalIsOpen,
  }));
  return (
    <div className={styles.adminSize}>
      <button onClick={() => setIsOpen('sizeModalIsOpen', !sizeModalIsOpen)} className={styles.btn}>
        Добавить размер
      </button>
      <div className={styles.sizeList}>
        {sizes.map((size) => (
          <SizeCard {...size} />
        ))}
      </div>
    </div>
  );
};
