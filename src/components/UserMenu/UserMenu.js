import React from 'react';
import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { UseAuth } from '../Hooks/UseAuth';
import { logout } from 'redux/auth/operations';

export const UserMenu = () => {
  const { isLoggedIn, user } = UseAuth();
  const dispatch = useDispatch();

  return (
    <nav className={css.wrapper}>
      {isLoggedIn ? (
        <div className={css.userWrapper}>
          <p className={css.title}>Welcome, {user.name}!</p>
          <button
            type="button"
            className={css.button}
            onClick={() => dispatch(logout())}
          >
            Log Out
          </button>
        </div>
      ) : null}
    </nav>
  );
};
