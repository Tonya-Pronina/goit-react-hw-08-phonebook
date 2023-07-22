import React from 'react';
import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { UseAuth } from '../Hooks/UseAuth';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const { isLoggedIn, user } = UseAuth();
  const dispatch = useDispatch();

//   const onLogoutClick = () => {
//     dispatch(logoutUser());
//   };

  return (
    <nav className={css.navWrapper}>
      {isLoggedIn ? (
        <div className={css.userWrapper}>
          <p className={css.welcomeName}>Welcome, {user.name}!</p>
          <button
            type="button"
            className={css.userMenuBtn}
            onClick={() => dispatch(logout())}
          >
            Log Out
          </button>
        </div>
      ) : null}
    </nav>
  );
};