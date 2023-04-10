import api from "../utils/Api.js";
import React, { useState } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const {
    cards,
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick,
    onCardLike,
    onDelete,
  } = props;

  return (
    <main>
      <section className="profile">
        <div className="profile__info-container">
          <div className="profile__pic-container">
            <button
              className="profile__pic-button"
              type="button"
              onClick={props.onEditAvatar}
            ></button>
            <img
              className="profile__pic"
              src={currentUser.avatar}
              alt="Фотография профиля"
            />
          </div>
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__info">{currentUser.about}</p>
          <button
            className="profile__edit-button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        { 
        cards.map((item) => (
          <Card
            card={item}
            key={item._id}
            handleCardClick={props.onCardClick}
            handleCardLike={props.onCardLike}
            handleDeleteCard={props.onDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
