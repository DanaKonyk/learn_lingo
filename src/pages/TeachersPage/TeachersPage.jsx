import TeachersList from 'components/TeachersList/TeachersList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations';
import Filters from 'components/Filters/Filters';
import Loader from 'components/Loader/Loader';
import { getIsLoading } from '../../redux/teachers/selectors';

const TeachersPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getIsLoading);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchTeachers({ signal: controller.signal }));
    return () => {
      return controller.abort();
    };
  }, [dispatch]);

  return (
    <div style={{ backgroundColor: '#f8f8f8' }}>
      <Filters />
      {loading ? <Loader /> : <TeachersList />}
    </div>
  );
};

export default TeachersPage;
