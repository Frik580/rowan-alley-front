import "./CardDiscription.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Video from "./Video/Video";
import About from "./About/About";
import Awards from "./Awards/Awards";

function CardDiscription({ cards }) {
  const navigate = useNavigate();
  const getCardById = (cards, id) => cards.find((card) => card._id === id);
  const { id } = useParams();
  const card = getCardById(cards, id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);

  return (
    <section className="discription">
      {/* <Video card={card} /> */}
      <About card={card} />
      {/* <Awards /> */}

      <button
        onClick={() => navigate(-1)}
        className={"discription__button hover-button"}
        type="button"
      >
        Назад
      </button>
      <div className="discription__image_num_1" />
      <div className="discription__image_num_2" />
      <div className="discription__image_num_3" />
    </section>
  );
}

export default CardDiscription;
