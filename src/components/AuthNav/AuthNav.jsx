import { NavLink } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={css.linkLog} to="login">
            <svg className={css.iconLogo} width="20" height="20">
              <use href={`${sprite}#login`} />
            </svg>
            <p>Log in</p>
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
