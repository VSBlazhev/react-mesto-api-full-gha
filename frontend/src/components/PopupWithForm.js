function PopupWithForm(props) {
  const { title, name, children, buttonText, isOpen, onClose, onSubmit } =
    props;

  return (
    <div
      className={`popup popup_content-type${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <form
          name={`${props.name}`}
          className="popup__form popup__info-form "
          onSubmit={props.onSubmit}
        >
          <h2 className="popup__heading">{props.title}</h2>
          {props.children}

          <button
            className="popup__button"
            type="submit" 
          >
            {props.buttonText}
          </button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
