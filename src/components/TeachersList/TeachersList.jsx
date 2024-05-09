import { useSelector } from 'react-redux';
import {
  getFilter,
  getTotal,
  selectTeachers,
} from '../../redux/teachers/selectors';
import { useState } from 'react';
import TeachersCard from 'components/TeachersCard/TeachersCard';
import css from './TeachersList.module.css';

const TeachersList = () => {
  const teachers = useSelector(selectTeachers);
  const [page, setPage] = useState(4);
  const total = useSelector(getTotal);
  const filters = useSelector(getFilter);

  const filteredTeachers = teachers.filter(teacher => {
    const { languages, levels, price_per_hour } = filters;
    if (!languages && !levels && !price_per_hour) {
      return true;
    }
    const languageFilterResult =
      !languages || teacher.languages.includes(languages);
    const levelsFilterResult = !levels || teacher.levels.includes(levels);
    const priceFilterResult =
      !price_per_hour || teacher.price_per_hour <= price_per_hour;
    return languageFilterResult && levelsFilterResult && priceFilterResult;
  });

  const handleMore = () => {
    setPage(prevState => prevState + 4);
  };
  const teachersData = filteredTeachers.slice(0, page);

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
