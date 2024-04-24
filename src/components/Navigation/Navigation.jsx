import React from 'react';
import logo from '../../images/ukraine.png';
import { NavLink } from 'react-router-dom';
import AuthNav from 'components/AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';
import UserNav from 'components/UserNav/UserNav';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <div className={css.titleWrap}>
        <img src={logo} alt="logo" width={28} height={28} />
        <p className={css.title}>LearnLingo</p>
      </div>
      <nav className={css.navigation}>
        <div className={css.navWrap}>
          <NavLink
            className={css.navLink}
            style={({ isActive }) => ({
              borderRadius: isActive ? '10px' : '0px',
              background: isActive ? '#F4C8BA' : 'transparent',
              padding: isActive ? '5px' : '5px',
              fontWeight: isActive ? '500' : '400',
            })}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={css.navLink}
            style={({ isActive }) => ({
              borderRadius: isActive ? '10px' : '0px',
              background: isActive ? '#F4C8BA' : 'transparent',
              padding: isActive ? '5px' : '5px',
              fontWeight: isActive ? '500' : '400',
            })}
            to="/teachers"
          >
            Teachers
          </NavLink>
          {isLoggedIn && (
            <NavLink
              className={css.navLink}
              style={({ isActive }) => ({
                borderRadius: isActive ? '10px' : '0px',
                background: isActive ? '#F4C8BA' : 'transparent',
                padding: isActive ? '5px' : '5px',
                fontWeight: isActive ? '500' : '400',
              })}
              to="/teachers"
            >
              Favorites
            </NavLink>
          )}
        </div>
      </nav>
      {isLoggedIn ? <UserNav /> : <AuthNav />}
    </header>
  );
};

export default Navigation;
