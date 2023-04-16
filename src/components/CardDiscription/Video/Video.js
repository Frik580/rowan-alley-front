import "./Video.css";
import Iframe from "react-iframe";

function Video({ card }) {
  return (
    <section className="video">
      {card.trailerLink !== "https://ru.ru" && (
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
      )}
    </section>
  );
}

export default Video;

<iframe
  width="720"
  height="405"
  src="https://rutube.ru/play/embed/65c28742b3c6dfd3faede82404c1ff6a"
  frameBorder="0"
  allow="clipboard-write; autoplay"
  webkitAllowFullScreen
  mozallowfullscreen
  allowFullScreen
></iframe>;
