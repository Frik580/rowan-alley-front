import React, { useEffect, useState } from "react";
import "./Card.css";

function Card({ card }) {
  return (
    <li className="element">
      {/* <a href={"https://api.nomoreparties.co"} className="element__link"> */}
        <img src={card.image} className="element__pic" alt={card.name} />
      {/* </a> */}
      <p className="element__title">{card.name}</p>
    </li>
  );
}

export default Card;
