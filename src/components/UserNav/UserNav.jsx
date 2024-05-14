import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../images/sprite.svg';
import css from './UserNav.module.css';
import { clearFavorites } from '../../redux/teachers/teachersSlice';
import { getFavorites } from '../../redux/teachers/selectors';

const UserNav = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const { user } = useAuth();

  const handleLogOut = () => {
    dispatch(clearFavorites(favorites));
    dispatch(logOut());
  };

  return (
    <div className={css.wrap}>
      <p className={css.text}>
        Welcome, <span className={css.spanText}>{user.name}</span>
      </p>
      <button type="button" className={css.button} onClick={handleLogOut}>
        <p>Log out</p>
        <svg width="20" height="20">
          <use href={`${sprite}#login`}></use>
        </svg>
      </button>
    </div>
  );
};

export default UserNav;
