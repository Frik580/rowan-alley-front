import "./Video.css";
import Iframe from "react-iframe";

function Video({ card }) {
  return (
    <section className="video">
      <h2 className="video__title">{card.name.toUpperCase()}</h2>
      <div className="video__conteiner">
        <Iframe
          url={card.trailerLink}
          className="video__iframe"
          title={card.name}
        />
      </div>
    </section>
  );
}

export default Video;
