import React from 'react';
import { Formik } from 'formik';
import { Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './BookTrialForm.module.css';
import sprite from '../../images/sprite.svg';

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegExp = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);
const initialValues = {
  reason: '',
  name: '',
  email: '',
  number: '',
};

const schema = Yup.object().shape({
  reason: Yup.string().required('Please choose a reason for learning English'),
  name: Yup.string()
    .min(4, 'Name must be at least 4 characters')
    .max(32, 'Name must be no more than 16 characters')
    .required('Name is required'),
  email: Yup.string()
    .matches(emailRegExp, 'Enter a valid email')
    .email('Enter a valid email')
    .required('Email is required'),
  number: Yup.string()
    .required('Phone is required')
    .matches(phoneRegExp, 'Phone number must be digits and dashes.'),
});

const BookTrialForm = ({ onClose, card }) => {
  const { avatar_url, name, surname } = card;

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form values:', values);
    console.log('form log');
    resetForm();
    onClose();
  };
  return (
    <div className={css.formWrap}>
      <h2 className={css.formTitle}>Book trial lesson</h2>
      <p className={css.formText}>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <button
        className={css.formCloseButton}
        type="button"
        onClick={() => onClose()}
      >
        <svg className={css.iconClose} width="20" height="20">
          <use href={`${sprite}#x`} />
        </svg>
      </button>
      <div className={css.teacherWrap}>
        <div>
          <img
            className={css.avatar}
            src={avatar_url}
            alt="avatar"
            width={44}
          />
        </div>
        <div>
          <span className={css.teacherSpan}>Your teacher</span>
          <p className={css.teacherText}>
            {name} {surname}
          </p>
        </div>
      </div>
      <h3 className={css.formSubtitle}>
        What is your main reason for learning English?
      </h3>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.radioWrap} id="my-radio=group">
            <div
              className={css.radioGroup}
              role="group"
              aria-labelledby="my-radio-group"
            >
              <label className={css.radioLabel}>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="reason"
                  value="Career and business"
                />
                Career and business
              </label>
              <label className={css.radioLabel}>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="reason"
                  value="Lesson for kids"
                />
                Lesson for kids
              </label>
              <label className={css.radioLabel}>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="reason"
                  value="Living abroad"
                />
                Living abroad
              </label>
              <label className={css.radioLabel}>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="reason"
                  value="Exams and coursework"
                />
                Exams and coursework
              </label>
              <label className={css.radioLabel}>
                <Field
                  className={css.radioInput}
                  type="radio"
                  name="reason"
                  value="Culture, travel or hobby"
                />
                Culture, travel or hobby
              </label>
            </div>
          </div>
          <label className={css.infoLabel}>
            <Field
              className={css.infoInput}
              name="name"
              type="text"
              placeholder="Full Name"
            />
            <ErrorMessage name="name" component="p" />
          </label>
          <label className={css.infoLabel}>
            <Field
              className={css.infoInput}
              name="email"
              type="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="p" />
          </label>
          <label className={css.infoLabel}>
            <Field
              className={css.infoInput}
              name="number"
              type="tel"
              placeholder="Phone"
            />
            <ErrorMessage name="number" component="p" />
          </label>
          <button className={css.submitButton} type="submit">
            Book
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookTrialForm;
