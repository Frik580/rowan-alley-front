import "./NextCards.css";
import React from "react";

function NextСards({ onNextCards, isButtonNext }) {
  return (
    <section className="nextcards">
      {isButtonNext && (
        <button
          onClick={onNextCards}
          className={"nextcards__button hover-button"}
          type="button"
        >
          Далее
        </button>
      )}
    </section>
  );
}

export default NextСards;
