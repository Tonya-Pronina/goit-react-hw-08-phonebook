import css from './Pages.module.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.bgWrapper}>
        <h1 className={css.title}>PHONEBOOK 📱✏️</h1>
        <p className={css.text}>
          Please, Sign Up or Sign In if you already have an account{' '}
        </p>
        <div className={css.linksWrapper}>
          <NavLink to="/register" className={css.link}>
            Sign Up
          </NavLink>
          <NavLink to="/login" className={css.link}>
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
