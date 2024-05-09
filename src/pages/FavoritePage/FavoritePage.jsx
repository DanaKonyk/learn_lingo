import React from 'react';
import { useSelector } from 'react-redux';
import { getFavorites, getIsLoading } from '../../redux/teachers/selectors';
import TeachersCard from 'components/TeachersCard/TeachersCard';
import css from './FavoritePage.module.css';
import Loader from 'components/Loader/Loader';

const FavoritePage = () => {
  const favorites = useSelector(getFavorites);
  const loading = useSelector(getIsLoading);

  return (
    <div className={css.wrap}>
      <div className={css.wrapList}>
        {loading ? (
          <Loader />
        ) : favorites.length > 0 ? (
          <ul className={css.favList}>
            {favorites.map(favorite => (
              <TeachersCard key={favorite.id} card={favorite} />
            ))}
          </ul>
        ) : (
          <p className={css.favText}>Nothing added yet..</p>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
