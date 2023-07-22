import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h1 className={css.title}>Registration form</h1>
      <div className={css.labels}>
        <label className={css.label}>
          <p className={css.text}>Username </p>
          <input className={css.formInput} type="text" name="name" required />
        </label>
        <label className={css.label}>
          <p className={css.text}>Email </p>
          <input className={css.formInput} type="email" name="email" required />
        </label>
        <label className={css.label}>
          <p className={css.text}>Password </p>
          <input
            className={css.input}
            type="password"
            name="password"
            required
          />
        </label>
      </div>
      <button className={css.button} type="submit">
        SIGN UP
      </button>
      <p className={css.link}>
        Already registered?
        <NavLink to="/login" className={css.link}>
          SIGN IN
        </NavLink>
      </p>
    </form>
  );
};