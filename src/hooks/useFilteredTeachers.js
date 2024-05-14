import { useMemo } from 'react';

const useFilteredTeachers = (teachers, filters) => {
  const filteredTeachers = useMemo(() => {
    return teachers.filter(teacher => {
      const { languages, levels, price_per_hour } = filters;

      if (languages !== 'All' && levels !== 'All') {
        const languageFilterResult =
          !languages || teacher.languages.includes(languages);
        const levelsFilterResult = !levels || teacher.levels.includes(levels);
        const priceFilterResult =
          !price_per_hour || teacher.price_per_hour <= price_per_hour;

        return languageFilterResult && levelsFilterResult && priceFilterResult;
      } else if (languages === 'All' && levels === 'All') {
        const priceFilterResult =
          !price_per_hour || teacher.price_per_hour <= price_per_hour;

        return priceFilterResult;
      } else if (languages === 'All' && levels !== 'All') {
        const levelsFilterResult = !levels || teacher.levels.includes(levels);
        const priceFilterResult =
          !price_per_hour || teacher.price_per_hour <= price_per_hour;

        return levelsFilterResult && priceFilterResult;
      } else if (languages !== 'All' && levels === 'All') {
        const languageFilterResult =
          !languages || teacher.languages.includes(languages);
        const priceFilterResult =
          !price_per_hour || teacher.price_per_hour <= price_per_hour;

        return languageFilterResult && priceFilterResult;
      }
      return true;
    });
  }, [teachers, filters]);

  return filteredTeachers;
};

export default useFilteredTeachers;
