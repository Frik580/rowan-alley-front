import React from "react";
import "./Popup.css";

function Popup({ isOpen, onClose, message }) {
  return (
    <div onClick={onClose} className={`popup ${isOpen && "popup_opened"}`}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        // className="popup__conteiner"
        className={`popup__conteiner ${isOpen && "popup__conteiner_opened"}`}
      >
        <button
          onClick={onClose}
          className="popup__close-button"
          type="button"
        />
        <p className="popup__text">{message}</p>
      </div>
    </div>
  );
}

export default React.memo(Popup);
