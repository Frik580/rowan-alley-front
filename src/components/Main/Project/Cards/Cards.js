import "./Cards.css";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
// import {
//   WINDOW_SIZE,
//   MOVIES_QUANTITY,
//   MOVIES_QUANTITY_NEXT,
// } from "../../utils/Constants";

function Cards(
//   {
//       moviesList,
//       isFindMovies,
//       messageError,
//       count,
//       onCloseNext,
//       onOpenNext,
//   }
) {
  //   const [width, setWidth] = useState(window.innerWidth);
  //   const [renderMovies, setRenderMovies] = useState([]);
  //   const [quantity, setQuantity] = useState(null);

  //   useEffect(() => {
  //     const handleResizeWindow = () =>
  //       setTimeout(setWidth(window.innerWidth), 10000);

  //     window.addEventListener("resize", handleResizeWindow);

  //     return () => {
  //       window.removeEventListener("resize", handleResizeWindow);
  //     };
  //   }, []);

  //   useEffect(() => {
  //     if (width >= WINDOW_SIZE.HIGH) {
  //       setQuantity(MOVIES_QUANTITY.HIGH + count * MOVIES_QUANTITY_NEXT.HIGH);
  //     } else if (width >= WINDOW_SIZE.MIDDLE) {
  //       setQuantity(MOVIES_QUANTITY.MIDDLE + count * MOVIES_QUANTITY_NEXT.MIDDLE);
  //     } else if (width < WINDOW_SIZE.MIDDLE) {
  //       setQuantity(MOVIES_QUANTITY.SMALL + count * MOVIES_QUANTITY_NEXT.MIDDLE);
  //     }

  //     const movies = moviesList.filter(function (item, index) {
  //       return index < quantity;
  //     });
  //     setRenderMovies(movies);
  //     quantity >= moviesList.length ? onCloseNext() : onOpenNext();
  //   }, [count, moviesList, quantity, width]);

  return (
    <section className="elements">
      {/* {isFindMovies && !moviesList.length && ( */}
      <p className="elements__message">Ничего не найдено</p>
      {/* )} */}
      {/* {messageError && <p className="elements__message">{messageError}</p>} */}
      <ul className="elements__list">
        {/* {moviesList.map((card) => (
          <Card
            key={card._id}
            movie={card}
          />
        ))} */}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </ul>
    </section>
  );
}

export default Cards;
