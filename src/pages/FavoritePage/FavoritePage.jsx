import React from 'react';
import { useSelector } from 'react-redux';
import { getFavorites } from '../../redux/teachers/selectors';
import TeachersCard from 'components/TeachersCard/TeachersCard';
import css from './FavoritePage.module.css';

const FavoritePage = () => {
  const favorites = useSelector(getFavorites);

  return (
    <div className={css.wrap}>
      <div className={css.wrapList}>
        {favorites.length > 0 ? (
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
