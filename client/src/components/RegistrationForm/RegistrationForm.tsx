import { useForm, SubmitHandler } from 'react-hook-form';
import { IRegistration } from '../../Utils/interface/interface';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useUserStore } from '../../Utils/Stores/UserStore';
import { useNavigate } from 'react-router-dom';

import styles from './RegistrationForm.module.scss';
import button from '../../scss/button.module.scss';
import { Error } from '../../Utils/types/types';
import { onErrorToast } from '../../Utils/toast';

export const RegistrationForm = () => {
  const registrationUser = useUserStore((state) => state.registrationUser);
  const navigate = useNavigate();

  const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  const schema = yup
    .object({
      login: yup.string().required('Это обязательное поле'),
      FCs: yup.string().required('Это обязательное поле'),
      email: yup.string().email('Не корректный email').required('Это обязательное поле'),
      telephone: yup
        .string()
        .matches(phoneRegExp, {
          message: 'Невалидный номер телефона',
          excludeEmptyString: false,
        })
        .required('Это обязательное поле'),
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
      const error = { ...(e as Error) };
      onErrorToast({ ...error });
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
          ФИО
          <input type="text" {...register('FCs')} placeholder="ФИО" className={styles.input} />
          <p>{errors.FCs?.message}</p>
        </label>
        <label className={styles.label}>
          Телефон
          <input type="tel" {...register('telephone')} placeholder="+7" className={styles.input} />
          <p>{errors.telephone?.message}</p>
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
          Адрес для доставки
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
    </div>
  );
};
