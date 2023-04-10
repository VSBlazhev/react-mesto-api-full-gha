import PopupWithForm from "./PopupWithForm";
import React, { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser } = props;
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  React.useEffect(() => {
    setName(currentUser?.name ?? "");
    setDescription(currentUser?.about ?? "");
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      name="_edit-form"
      title="Редактировать профиль"
      buttonText="Сохранить"
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      children={
        <>
          <label className="popup__label">
            <input
              required
              id="name-input"
              name="name"
              className="popup__info-form-input popup__info-form-input_type_name"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              value={name}
              onChange={handleChangeName}
            />

            <span className="popup__error name-input-error"></span>
          </label>
          <label className="popup__label">
            <input
              required
              id="info-input"
              name="description"
              className="popup__info-form-input popup__info-form-input_type_info"
              type="text"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              value={description}
              onChange={handleChangeDescription}
            />

            <span className="popup__error info-input-error"></span>
          </label>
        </>
      }
    />
  );
}

export default EditProfilePopup;
