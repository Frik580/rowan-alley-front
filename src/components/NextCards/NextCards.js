import "./NextCards.css";
import React from "react";

function NextСards({ onNextMovies, isButtonNext }) {
  return (
    <section className="nextcards">
      {/* {isButtonNext && ( */}
        <button
          onClick={onNextMovies}
          className={"nextcards__button hover-button"}
          type="button"
        >
          Далее
        </button>
      {/* )} */}
    </section>
  );
}

export default NextСards;
