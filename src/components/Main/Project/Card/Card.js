import React, { useEffect, useState } from "react";
import photo from "../../../../images/Rect.png"
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
      {/* <div className="element__info">
          <p className="element__time">Иванов Иван Иванович</p>
      </div> */}
      <a href={"https://api.nomoreparties.co"} className="element__link">
        <img
          src={photo}
          className="element__pic"
          alt={"Иванов Иван Иванович"}
        />
      </a>
      <p className="element__title">Иванов Иван Иванович</p>
    </li>
  );
}

export default Card;
