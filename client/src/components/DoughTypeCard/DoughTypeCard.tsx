import React from 'react';
import styles from './DoughTypeCard.module.scss';
import { DoughType } from '../../Utils/types/types';
import { useModalFramesStore } from '../../Utils/Stores/ModalFramesStore';
import { useDoughTypeStore } from '../../Utils/Stores/DoughType.Store';

export const DoughTypeCard = (doughType: DoughType) => {
  const { deleteDoughType, setEdit, setIsEdit } = useDoughTypeStore(
    ({ deleteDoughType, setEdit, setIsEdit }) => ({ deleteDoughType, setEdit, setIsEdit }),
  );

  const { setDeleteObject, deleteModalIsOpen, setIsOpen, doughTypeModalIsOpen } =
    useModalFramesStore(
      ({ setDeleteObject, deleteModalIsOpen, setIsOpen, doughTypeModalIsOpen }) => ({
        setDeleteObject,
        deleteModalIsOpen,
        setIsOpen,
        doughTypeModalIsOpen,
      }),
    );

  const onDelete = () => {
    setDeleteObject({
      action: () => {
        deleteDoughType(doughType.id);
      },
      name: doughType.name,
    });
    setIsOpen('deleteModalIsOpen', !deleteModalIsOpen);
  };

  const onEdit = async (id: number) => {
    await setEdit(id);
    setIsEdit(true);
    setIsOpen('doughTypeModalIsOpen', !doughTypeModalIsOpen);
  };

  return (
    <div className={styles.doughTypeCard}>
      <h3>{doughType.name}</h3>
      <p className={styles.price}>Цена: {doughType.price} руб</p>
      <div className={styles.btn__container}>
        <button
          onClick={() => onEdit(doughType.id)}
          className={`${styles.btn} ${styles.btn__edit} `}>
          <svg
            className={styles.btn__svg}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z"
              fill="#000000"
            />
          </svg>
        </button>
        {!!doughType.pizzaVariations && (
          <button onClick={() => onDelete()} className={`${styles.btn} ${styles.btn__delete}`}>
            <svg
              className={styles.btn__svg}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 11V17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 11V17"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 7H20"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
