import React, { useEffect, useState } from "react";
import photo from "../../../../images/Rect.png";
import "./Card.css";

function Card({ card }) //     {
//   saved,
//   movie,
//   onMovieLike,
//   onMovieDelete,
//   moviesSavedList,
// }
{
  console.log(card.image);

  //   const [url, setUrl] = useState("");
  //   const [liked, setLiked] = useState("");
  //   useEffect(() => {
  //     if (saved) {
  //       setUrl(movie.image);
  //     } else {
  //       setUrl(`https://api.nomoreparties.co${movie.image.url}`);
  //       const isLiked = moviesSavedList.some(
  //         (item) => item.movieId === movie.id.toString()
  //       );
  //       setLiked(isLiked);
  //     }
  //   }, [saved, moviesSavedList, movie, onMovieLike]);

  return (
    <li className="element">
      {/* <div className="element__info">
          <p className="element__time">Иванов Иван Иванович</p>
      </div> */}
      <a href={"https://api.nomoreparties.co"} className="element__link">
        <img
          src={card.image}
          className="element__pic"
          alt={card.name}
        />
      </a>
      <p className="element__title">{card.name}</p>
    </li>
  );
}

export default Card;
