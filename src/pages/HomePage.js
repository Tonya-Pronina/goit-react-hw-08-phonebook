import css from './Pages.module.css';
import { NavLink } from 'react-router-dom';

 const Home = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>PHONEBOOK</h1>
      <p className={css.text}>Please, Sign Up or Sign In </p>
      <div className={css.linksWrapper}>
        <NavLink to="/register" className={css.link}>
          Sign Up
        </NavLink>
        <NavLink to="/login" className={css.link}>
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default Home;