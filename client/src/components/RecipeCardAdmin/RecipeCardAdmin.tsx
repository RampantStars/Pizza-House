import styles from './RecipeCardAdmin.module.scss';
import { Recipe } from '../../Utils/types/types';
import { useRecipeStore } from '../../Utils/Stores/RecipeStore';
import { useModalFramesStore } from '../../Utils/Stores/ModalFramesStore';

export const RecipeCardAdmin = (recipe: Recipe) => {
  const { setEdit, setIsEdit } = useRecipeStore(({ setEdit, setIsEdit }) => ({
    setEdit,
    setIsEdit,
  }));
  const { recipeModalIsOpen, setIsOpen } = useModalFramesStore(
    ({ recipeModalIsOpen, setIsOpen }) => ({
      setIsOpen,
      recipeModalIsOpen,
    }),
  );
  const onEdit = async (id: number) => {
    await setEdit(id);
    setIsEdit(true);
    setIsOpen('recipeModalIsOpen', !recipeModalIsOpen);
  };

  const { setInStock } = useRecipeStore(({ setInStock }) => ({ setInStock }));
  return (
    <div className={styles.recipeCardAdmin}>
      <div className={styles.btn__container}>
        <button onClick={() => onEdit(recipe.id)} className={`${styles.btn} ${styles.btn__edit} `}>
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
        <button
          onClick={() => {
            setInStock(recipe.id, !recipe.inStock);
          }}
          className={`${styles.btn} ${styles.btn__inStock} ${
            recipe.inStock ? '' : `${styles.btn__disabled}`
          }`}>
          {recipe.inStock ? 'Убрать из меню' : 'Включить в меню'}
        </button>
      </div>
      <div className={styles.info__top}>
        <img
          className={styles.img}
          src={`http://localhost:5000/${recipe.imageUrl}`}
          alt={recipe.name}
        />
        <div className={styles.recipe__info}>
          <h3>{recipe.name}</h3>
          <p>Цена {recipe.price}руб.</p>
          <p>Цена со скидкой {recipe.price * (1 - recipe.salePercent / 100)}руб.</p>
        </div>
        <div className={styles.recipe__info__ingredients}>
          <h4>Ингредиенты</h4>
          <ul className={styles.list__ingredients}>
            {recipe.ingredients.map((ingredient) => (
              <li className={styles.list__ingredients__item} key={ingredient.id}>
                {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.recipe__info}>
          <h4>Доступные размеры</h4>
          <ul className={styles.list__sizes}>
            {recipe.sizes.map((size) => (
              <li className={styles.list__sizes__item} key={size.id}>
                {size.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.recipe__info}>
          <h4>Категории</h4>
          <ul className={styles.list__categories}>
            {recipe.categories.map((category) => (
              <li className={styles.list__categories__item} key={category.id}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.info__bottom}>
        <div className={styles.recipe__info__description}>
          <h3>Описание</h3>
          <p>{recipe.description}</p>
        </div>

        <div className={styles.recipe__info}>
          <h4>Тип теста</h4>
          <ul className={styles.list__doughtTypes}>
            {recipe.doughtTypes.map((doughtType) => (
              <li className={styles.list__doughtTypes__item} key={doughtType.id}>
                {doughtType.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
