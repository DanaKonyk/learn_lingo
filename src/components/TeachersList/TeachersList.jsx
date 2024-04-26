import { useSelector } from 'react-redux';
import { getTotal, selectTeachers } from '../../redux/teachers/selectors';
import { useState } from 'react';
import TeachersCard from 'components/TeachersCard/TeachersCard';
import css from './TeachersList.module.css';

const TeachersList = () => {
  const teachers = useSelector(selectTeachers);
  const total = useSelector(getTotal);
  const [page, setPage] = useState(4);

  const handleMore = () => {
    setPage(prevState => prevState + 4);
  };
  const teachersData = teachers.slice(0, page);

  return (
    <div className={css.wrapList}>
      <ul className={css.list}>
        {teachersData.length > 0 &&
          teachersData.map(teacher => (
            <TeachersCard key={teacher.id} card={teacher} />
          ))}
      </ul>
      {teachersData.length < total && (
        <button className={css.buttonMore} onClick={handleMore} type="button">
          Load more
        </button>
      )}
    </div>
  );
};

export default TeachersList;
