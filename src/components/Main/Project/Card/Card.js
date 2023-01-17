import React, { useEffect, useState } from "react";
import "./Card.css";

function Card(
//     {
//   saved,
//   movie,
//   onMovieLike,
//   onMovieDelete,
//   moviesSavedList,
// }
) {
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
      <div className="element__info">
        <div className="element__text">
          <h2 className="element__title">{movie.nameRU}</h2>
          <p className="element__time">{`${movie.duration} мин`}</p>
        </div>
        {
          <button
            onClick={() => onMovieDelete(movie)}
            className={"element__delete-button"}
            type="button"
          />
        }
      </div>
      <a href={movie.trailerLink} className="element__link">
        <img
          src={url}
          className="element__pic"
          alt={`Фильм "${movie.nameRU}"`}
        />
      </a>
    </li>
  );
}

export default Card;
