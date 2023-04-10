import { Link, Route, Routes } from "react-router-dom";
import logo from "../images/logo_white.svg";
function Header(props) {
  const { email, onSignout } = props;

  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип" />

        <Routes>
          <Route
            path="/"
            element={
              <div className="header__info-container">
                <p className="header__email">{props.email}</p>
                <Link
                  className="header__signout"
                  to="/sign-in"
                  onClick={props.onSignout}
                >
                  Выйти
                </Link>
              </div>
            }
          ></Route>
          <Route
            path="/sign-in"
            element={
              <Link to="/sign-up" className="header__link">
                Регистрация
              </Link>
            }
          ></Route>

          <Route
            exact
            path="/sign-up"
            element={
              <Link exact to="/sign-in" className="header__link">
                Войти
              </Link>
            }
          ></Route>
        </Routes>
      </header>
    </>
  );
}

export default Header;
