import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const { card, handleCardClick, handleCardLike, handleDeleteCard } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked && "card__like-button_active"
  }`;

  return (
    <div className="card">
      <img
        src={props.card.link}
        alt={props.card.name}
        className="card__image"
        onClick={handleClick}
      />
      {isOwn && (
        <button
          className="card__delete-button"
          type="button"
          onClick={handleDelete}
        ></button>
      )}

      <div className="card__info-container">
        <h2 className="card__text">{props.card.name}</h2>
        <div className="card__like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLike}
          ></button>
          <span className="card__likes">{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );

  function handleClick() {
    props.handleCardClick(props.card);
  }

  function handleLike() {
    props.handleCardLike(props.card);
  }

  function handleDelete() {
    props.handleDeleteCard(props.card);
  }
}

export default Card;
