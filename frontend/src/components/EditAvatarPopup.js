import PopupWithForm from "./PopupWithForm";
import React, { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup(props) {
  const { isOpen, onClose, onUpdateAvatar } = props;
  const avatarLinkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({ avatar: avatarLinkRef.current.value });
    console.log(avatarLinkRef.current.value);
  }

  return (
    <PopupWithForm
      name="_edit-pic"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <label className="popup__label">
            <input
              required
              id="pic-input"
              name="pic"
              className="popup__pic-edit-input popup__info-form-input"
              type="url"
              placeholder="Ссылка на картинку"
              ref={avatarLinkRef}
            />
            <span className="popup__error pic-input-error"></span>
          </label>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
