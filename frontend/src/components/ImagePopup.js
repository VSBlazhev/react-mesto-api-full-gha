import React from "react";

function ImagePopup(props) {
  const { card, onClose } = props;

  return (
    <div
      className={`popup popup_content-type_figure ${
        props.card.link ? "popup_opened" : ""
      }`}
    >
      <figure className="popup__figure">
        <img
          className="popup__figure-image"
          src={props.card.link}
          alt={props.card.name}
        />
        <figcaption className="popup__figure-caption">
          {props.card.name}
        </figcaption>
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        ></button>
      </figure>
    </div>
  );
}
export default ImagePopup;
