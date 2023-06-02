import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';

import { useUserStore } from '../../Utils/Stores/UserStore';
import { onErrorToast, onSuccessToast } from '../../Utils/toast';
import { ILogin } from '../../Utils/interface/interface';
import { Error } from '../../Utils/types/types';

import styles from './LoginForm.module.scss';
import button from '../../scss/button.module.scss';

export const LoginForm = () => {
  const logIn = useUserStore((state) => state.logIn);
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup.string().email('Не корректный email').required('Это обязательное поле'),
      password: yup.string().required('Это обязательное поле'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    try {
      await logIn(data);
      navigate('/');
      onSuccessToast('Вход выполнен успешно');
    } catch (e: any) {
      const error = { ...(e as Error) };
      onErrorToast({ ...error });
    }
  };

  return (
    <div className={styles.loginFormContainer}>
      <h1 className={styles.title}>Вход</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          Email
          <input type="email" {...register('email')} placeholder="Email" className={styles.input} />
          <p>{errors.email?.message}</p>
        </label>
        <label className={styles.label}>
          Пароль
          <input
            type="password"
            {...register('password')}
            placeholder="Пароль"
            className={styles.input}
          />
          <p>{errors.password?.message}</p>
        </label>

        <p className={styles.registration}>
          У вас нет аккаунта? <Link to="/registration">Зарегистрироваться </Link>
        </p>
        <button type="submit" className={`${button.button} ${styles.button}`}>
          Войти
        </button>
      </form>
    </div>
  );
};
