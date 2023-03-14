import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ card, id }) {
  return (
    <Link to={`cards/${id}`} className="link">
      <li className="element">
        <img src={card.image} className="element__pic" alt={card.name} />
        <p className="element__title">{card.name}</p>
      </li>
    </Link>
  );
}

export default Card;
