import "./Video.css";

function Video() {
  return (
    <section className="video">
      <h2 className="video__title">СМЕТАНИН МИХАИЛ ДМИТРИЕВИЧ</h2>
      <div className="video__conteiner">
        <iframe
          className="video__iframe"
          title="This is a unique title"
          src="https://rutube.ru/play/embed/b09c6934e76f869e0174cb304c7faf63"
          allowFullScreen={true}
        />
      </div>
    </section>
  );
}

export default Video;
