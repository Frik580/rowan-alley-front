import "./Video.css";

function Video({ card }) {
  return (
    <section className="video">
      <h2 className="video__title">{card.name.toUpperCase()}</h2>
      <div className="video__conteiner">
        <iframe
          className="video__iframe"
          title={card.name}
          src={card.trailerLink}
          // allow="clipboard-write; autoplay"
          // webkitallowfullscreen="true"
          // mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default Video;
