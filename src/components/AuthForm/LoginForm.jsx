import { Formik } from 'formik';
import { Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';
import css from './Form.module.css';
import { useState } from 'react';

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const schema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegExp, 'Enter a valid Email*')
    .email('Enter a valid Email*')
    .required('Email is required*'),
  password: Yup.string()
    .matches(/^(?=.*[a-z])/, 'Password must meet the requirements*')
    .min(8, 'Password must be at least 6 characters')
    .max(64, 'Password must be no more than 16 characters')
    .required('Password is required*'),
});

const LoginForm = ({ onClose }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleClickPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={css.formWrap}>
      <h2 className={css.formTitle}>Log In</h2>
      <p className={css.formText}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <button className={css.formCloseButton} type="button">
        <svg className={css.iconClose} width="20" height="20">
          <use href={`${sprite}#x`} />
        </svg>
      </button>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
      >
        <Form className={css.form} autoComplete="off">
          <label className={css.formLabel}>
            <Field
              className={css.formInput}
              name="email"
              type="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="p" />
          </label>
          <label className={css.formLabel}>
            <Field
              className={css.formInput}
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
            />
            <ErrorMessage name="password" component="p" />
          </label>
          <button className={css.submitButton} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
