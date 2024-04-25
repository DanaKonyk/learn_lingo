import TeachersList from 'components/TeachersList/TeachersList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeachers } from '../../redux/teachers/operations';
import { selectTeachers } from '../../redux/teachers/selectors';

const TeachersPage = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  useEffect(() => {
    const controller = new AbortController();
    dispatch(getTeachers({ signal: controller.signal }));
    return () => {
      return controller.abort();
    };
  }, [dispatch]);

  console.log(teachers);

  return (
    <div>
      <TeachersList />
    </div>
  );
};

export default TeachersPage;
