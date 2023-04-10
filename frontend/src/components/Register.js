import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const { onRegister } = props;
  const [formValue, setFormValue] = React.useState({ email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister({ email: formValue.email, password: formValue.password });
  }

  return (
    <div className="register__container">
      <h1 className="register__tittle">Зарегистрироваться</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__form-label">
          <input
            required
            id="email-input"
            name="email"
            type="email"
            value={formValue.email}
            onChange={handleChange}
            placeholder="Email"
            className="register__form-input"
          />
        </label>

        <label className="register__form-label">
          <input
            id="password-input"
            name="password"
            type="password"
            value={formValue.password}
            onChange={handleChange}
            placeholder="Пароль"
            className="register__form-input"
          />
        </label>
        <button className="register__form-button" type="submit">
          Регистрация
        </button>
      </form>
      <Link to="/sign-in" className="register__link">
        Уже зарегестрированы? Войти
      </Link>
    </div>
  );
}

export default Register;
