import { useForm, SubmitHandler } from 'react-hook-form';
import { IRegistration } from '../../Utils/interface/interface';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useUserStore } from '../../Utils/Stores/UserStore';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import styles from './RegistrationForm.module.scss';
import button from '../../scss/button.module.scss';
import 'react-toastify/dist/ReactToastify.css';

export const RegistrationForm = () => {
  const registrationUser = useUserStore((state) => state.registrationUser);
  const navigate = useNavigate();

  const onError = (e: any) => {
    toast.error(`🦄 ${e.message}`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const schema = yup
    .object({
      login: yup.string().required('Это обязательное поле'),
      email: yup.string().email().required('Это обязательное поле'),
      password: yup.string().required('Это обязательное поле'),
      address: yup.string().optional(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistration>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<IRegistration> = async (data) => {
    try {
      await registrationUser(data);
      navigate('/');
    } catch (e: any) {
      console.log('e :>> ', e);
      onError({ ...e });
    }
  };

  return (
    <div className={styles.registrationFormContainer}>
      <h1 className={styles.title}>Регистрация</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          Логин
          <input type="text" {...register('login')} placeholder="Логин" className={styles.input} />
          <p>{errors.login?.message}</p>
        </label>
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
        <label className={styles.label}>
          Адрес проживания
          <input
            type="text"
            {...register('address')}
            placeholder="Адрес"
            className={styles.input}
          />
        </label>
        <button type="submit" className={`${button.button} ${styles.button}`}>
          Зарегистрироваться
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
};
