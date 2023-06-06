import "./CardDiscription.css";
import { useParams, Link } from "react-router-dom";
import Video from "./Video/Video";
import About from "./About/About";
import Awards from "./Awards/Awards";

function CardDiscription({ cards }) {
  const getCardById = (cards, id) => cards.find((card) => card._id === id);
  const { id } = useParams();
  const card = getCardById(cards, id);

  return (
    <section className="discription">
      <h2 className="discription__title">{card.name.toUpperCase()}</h2>
      <Video card={card} />
      <About card={card} />
      <Awards card={card} />
      <Link to="/" className="discription__button hover-button">
        Назад
      </Link>
      <div className="discription__image_num_1" />
      <div className="discription__image_num_2" />
      <div className="discription__image_num_3" />
    </section>
  );
}

export default CardDiscription;
