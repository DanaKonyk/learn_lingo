import React from 'react';
import logo from '../../images/ukraine.png';
import { NavLink } from 'react-router-dom';
import AuthNav from 'components/AuthNav/AuthNav';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.titleWrap}>
        <img src={logo} alt="logo" width={28} height={28} />
        <p className={css.title}>LearnLingo</p>
      </div>
      <nav className={css.navigation}>
        <div className={css.navWrap}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/teachers">
            Teachers
          </NavLink>
        </div>
        <AuthNav />
      </nav>
    </header>
  );
};

export default Navigation;
