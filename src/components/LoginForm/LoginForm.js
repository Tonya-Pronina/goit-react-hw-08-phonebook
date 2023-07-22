import { useDispatch } from 'react-redux';
import css from '../LoginForm/LoginForm.module.css';
import { NavLink } from 'react-router-dom';
import { login } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h1 className={css.title}>Login form 👋</h1>
        <div className={css.labels}>
          <label className={css.label}>
            <p className={css.text}>Email</p>
            <input className={css.input} type="email" name="email" required />
          </label>
          <label className={css.label}>
            <p className={css.text}>Password</p>
            <input
              className={css.input}
              type="password"
              name="password"
              required
            />
          </label>
        </div>
        <button className={css.button} type="submit">
          SIGN IN
        </button>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
      </form>
    </div>
  );
};
