import { useSelector } from 'react-redux';
import {
  getFilter,
  getTotal,
  selectTeachers,
} from '../../redux/teachers/selectors';
import { useState } from 'react';
import TeachersCard from 'components/TeachersCard/TeachersCard';
import useFilteredTeachers from '../../hooks/useFilteredTeachers';
import css from './TeachersList.module.css';

const TeachersList = () => {
  const teachers = useSelector(selectTeachers);
  const [page, setPage] = useState(4);
  const total = useSelector(getTotal);
  const filters = useSelector(getFilter);

  const filteredTeachers = useFilteredTeachers(teachers, filters);

  const handleMore = () => {
    setPage(prevState => prevState + 4);
  };
  const teachersData = filteredTeachers.slice(0, page);

  return (
    <div className={css.wrapList}>
      {filteredTeachers.length > 0 ? (
        <ul className={css.list}>
          {teachersData.length > 0 &&
            teachersData.map((teacher, index) => (
              <TeachersCard key={index} card={teacher} />
            ))}
        </ul>
      ) : (
        <p className={css.teacherText}>No teachers found..</p>
      )}
      {teachersData.length < total && (
        <button className={css.buttonMore} onClick={handleMore} type="button">
          Load more
        </button>
      )}
    </div>
  );
};

export default TeachersList;
