import Success from "../images/Success.svg";
import Error from "../images/Error.svg";

function InfoTooltip(props) {
  const { isOpen, isSuccesfull, onClose } = props;

  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          src={props.isSuccesfull ? Success : Error}
        ></img>
        <h2 className="popup__text">
          {`${
            props.isSuccesfull
              ? "Вы успешно зарегистрировались!"
              : "Что-то пошло не так ! Попробуйте ещё раз."
          }`}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
