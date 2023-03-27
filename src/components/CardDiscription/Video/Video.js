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
          // frameBorder="0"
          // width="100%"
          // height="100%"
          // display="block"
          // position="absolute"
          // allow="clipboard-write; autoplay"
          // webkitAllowFullScreen
          // mozallowfullscreen
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default Video;
