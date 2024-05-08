import TeachersList from 'components/TeachersList/TeachersList';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTeachers } from '../../redux/teachers/operations';
import Filters from 'components/Filters/Filters';

const TeachersPage = () => {
  const dispatch = useDispatch();

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
      <TeachersList />
    </div>
  );
};

export default TeachersPage;
