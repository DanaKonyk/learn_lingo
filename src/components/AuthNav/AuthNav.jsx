import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={css.link} to="login">
            Log In
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={css.link} to="register">
            Registration
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
