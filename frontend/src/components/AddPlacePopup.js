import PopupWithForm from "./PopupWithForm";
import React, { useState } from "react";

function AddPlacePopup(props) {
  const { isOpen, onClose, onAddCard } = props;
  const [placeName, setPlaceName] = React.useState("");
  const [placeLink, setPlaceLink] = React.useState("");

  function handleChangePlaceName(e) {
    setPlaceName(e.target.value);
  }

  function handleChangePlaceLink(e) {
    setPlaceLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddCard({
      name: placeName,
      link: placeLink,
    });
  }

  return (
    <PopupWithForm
      name="_add-place"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <label className="popup__label">
            <input
              required
              id="place-input"
              name="place_name"
              className="popup__info-form-input popup__info-form-input_type_place-name"
              type="text"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              value={placeName}
              onChange={handleChangePlaceName}
            />
            <span className="popup__error place-input-error"></span>
          </label>
          <label className="popup__label">
            <input
              required
              id="link-input"
              name="place_link"
              className="popup__info-form-input popup__info-form-input_type_place-link"
              type="url"
              placeholder="Ссылка на картинку"
              value={placeLink}
              onChange={handleChangePlaceLink}
            />
            <span className="popup__error link-input-error"></span>
          </label>
        </>
      }
    />
  );
}

export default AddPlacePopup;
