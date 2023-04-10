import React from "react";

function Login(props) {
  const { onLogin } = props;
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
    props.onLogin({ email: formValue.email, password: formValue.password });
  }

  return (
    <div className="login__container">
      <h1 className="login__tittle">Вход</h1>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__form-label">
          <input
            required
            id="email-input"
            name="email"
            type="email"
            value={formValue.email}
            onChange={handleChange}
            placeholder="Email"
            className="login__form-input"
          />
        </label>

        <label className="login__form-label">
          <input
            id="password-input"
            name="password"
            type="password"
            value={formValue.password}
            onChange={handleChange}
            placeholder="Пароль"
            className="login__form-input"
          />
        </label>
        <button className="login__form-button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
