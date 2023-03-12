import "./Cards.css";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import SearchForm from "../../../SearchForm/SearchForm";
import {
  WINDOW_SIZE,
  MOVIES_QUANTITY,
  MOVIES_QUANTITY_NEXT,
} from "../../../../utils/Constants";

function Cards({
  cardsList,
  count,
  onOpenNext,
  onFindCards,
  queryCardsListText,
}) {
  const [width, setWidth] = useState(window.innerWidth);
  const [renderCards, setRenderCards] = useState([]);
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    const handleResizeWindow = () =>
      setTimeout(setWidth(window.innerWidth), 10000);

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  useEffect(() => {
    if (width >= WINDOW_SIZE.HIGH) {
      setQuantity(MOVIES_QUANTITY.HIGH + count * MOVIES_QUANTITY_NEXT.HIGH);
    } else if (width >= WINDOW_SIZE.MIDDLE) {
      setQuantity(MOVIES_QUANTITY.MIDDLE + count * MOVIES_QUANTITY_NEXT.MIDDLE);
    } else if (width >= WINDOW_SIZE.MIDDLE_2) {
      setQuantity(
        MOVIES_QUANTITY.MIDDLE_2 + count * MOVIES_QUANTITY_NEXT.MIDDLE_2
      );
    } else if (width < WINDOW_SIZE.MIDDLE_2) {
      setQuantity(MOVIES_QUANTITY.SMALL + count * MOVIES_QUANTITY_NEXT.MIDDLE);
    }

    const cards = cardsList.filter(function (item, index) {
      return index < quantity;
    });
    setRenderCards(cards);
    quantity >= cardsList.length ? onOpenNext(false) : onOpenNext(true);
  }, [cardsList, count, onOpenNext, quantity, width]);

  return (
    <section className="elements">
      <h2 className="elements__title">ГАЛЛЕРЕЯ ГЕРОЕВ</h2>
      <SearchForm
        onFindCards={onFindCards}
        queryCardsListText={queryCardsListText}
      />
      {!cardsList.length && (
        <p className="elements__message">Ничего не найдено</p>
      )}
      {/* {messageError && <p className="elements__message">{messageError}</p>} */}
      <ul className="elements__list">
        {renderCards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </ul>
    </section>
  );
}

export default Cards;
