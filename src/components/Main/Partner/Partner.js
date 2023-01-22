import "./Partner.css";

function Partner({ url, src, title }) {
  return (
    <a href={url} className="logo-partner hover" target="_blank" rel="noreferrer">
      <img src={src} className="logo-partner__image" alt={title} />
    </a>
  );
}

export default Partner;
