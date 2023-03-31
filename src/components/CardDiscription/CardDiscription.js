import "./CardDiscription.css";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Video from "./Video/Video";
import About from "./About/About";
import Awards from "./Awards/Awards";

function CardDiscription({ cards, onButtonHome }) {
  const getCardById = (cards, id) => cards.find((card) => card._id === id);
  const { id } = useParams();
  const card = getCardById(cards, id);


  return (
    <section className="discription">
      <Video card={card} />
      <About card={card} />
      <Awards card={card} />
      <Link to="/" className="discription__button hover-button">
        {/* <button className="discription__button hover-button" type="button"> */}
          Назад
        {/* </button> */}
      </Link>
      <div className="discription__image_num_1" />
      <div className="discription__image_num_2" />
      <div className="discription__image_num_3" />
    </section>
  );
}

export default CardDiscription;
