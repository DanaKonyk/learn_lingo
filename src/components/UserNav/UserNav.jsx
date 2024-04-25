import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import sprite from '../../images/sprite.svg';
import css from './UserNav.module.css';

const UserNav = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.wrap}>
      <p className={css.text}>
        Welcome, <span className={css.spanText}>{user.name}</span>
      </p>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(logOut())}
      >
        <p>Log out</p>
        <svg width="20" height="20">
          <use href={`${sprite}#login`}></use>
        </svg>
      </button>
    </div>
  );
};

export default UserNav;
