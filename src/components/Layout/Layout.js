import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Layout = () => {
  return (
    <div className={css.menuContainer}>
      <UserMenu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};