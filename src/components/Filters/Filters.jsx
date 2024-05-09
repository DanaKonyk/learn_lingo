import React from 'react';
import { Field, Formik } from 'formik';
import data from './filtersData.json';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/teachers/teachersSlice';
import css from './Filters.module.css';

const initialValues = {
  languages: '',
  levels: '',
  price: '',
};

const Filters = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.FiltersWrap}>
      <Formik initialValues={initialValues}>
        {props => (
          <>
            <form className={css.FiltersForm}>
              <label className={css.FiltersLabel}>
                Languages
                <Field
                  name="languages"
                  as="select"
                  className={css.FiltersInput}
                  onChange={e => {
                    props.setFieldValue('languages', e.target.value, false);
                    dispatch(
                      setFilter({ ...props.values, languages: e.target.value })
                    );
                  }}
                >
                  {data.language.map(el => (
                    <option className={css.FiltersOption} key={el} value={el}>
                      {el}
                    </option>
                  ))}
                </Field>
              </label>
              <label className={css.FiltersLabel}>
                Level of knowledge
                <Field
                  name="levels"
                  as="select"
                  className={css.FiltersInput}
                  onChange={e => {
                    props.setFieldValue('levels', e.target.value, false);
                    dispatch(
                      setFilter({ ...props.values, levels: e.target.value })
                    );
                  }}
                >
                  {data.levels.map(el => (
                    <option className={css.FiltersOption} key={el} value={el}>
                      {el}
                    </option>
                  ))}
                </Field>
              </label>
              <label className={css.FiltersLabel}>
                Price
                <Field
                  name="price"
                  as="select"
                  className={css.FiltersInput}
                  onChange={e => {
                    props.setFieldValue('price', e.target.value, false);
                    dispatch(
                      setFilter({ ...props.values, price: e.target.value })
                    );
                  }}
                >
                  {data.price.map(el => (
                    <option className={css.FiltersOption} key={el} value={el}>
                      {`${el} $`}
                    </option>
                  ))}
                </Field>
              </label>
            </form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Filters;
