import React from 'react';
import { Field, Formik } from 'formik';
import css from './Filters.module.css';

const initialValues = {
  languages: '',
  levels: '',
  price: '',
};

const Filters = () => {
  return (
    <div className={css.FiltersWrap}>
      <Formik initialValues={initialValues}>
        <form className={css.FiltersForm}>
          <label className={css.FiltersLabel}>
            Languages
            <Field name="languages" as="select" className={css.FiltersInput}>
              <option className={css.FiltersOption}>French</option>
              <option className={css.FiltersOption}>English</option>
              <option className={css.FiltersOption}>German</option>
              <option className={css.FiltersOption}>Ukrainian</option>
              <option className={css.FiltersOption}>Polish</option>
            </Field>
          </label>
          <label className={css.FiltersLabel}>
            Level of knowledge
            <Field name="levels" as="select" className={css.FiltersInput}>
              <option className={css.FiltersOption}>A1 Beginner</option>
              <option className={css.FiltersOption}>A2 Elementary</option>
              <option className={css.FiltersOption}>B1 Intermediate</option>
              <option className={css.FiltersOption}>
                B2 Upper-Intermediate
              </option>
            </Field>
          </label>
          <label className={css.FiltersLabel}>
            Price
            <Field name="price" as="select" className={css.FiltersInput}>
              <option className={css.FiltersOption}>10$</option>
              <option className={css.FiltersOption}>20$</option>
              <option className={css.FiltersOption}>30$</option>
              <option className={css.FiltersOption}>40$</option>
            </Field>
          </label>
        </form>
      </Formik>
    </div>
  );
};

export default Filters;
