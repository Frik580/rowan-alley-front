import "./HeaderIcon.css";

function HeaderIcon({ url, src, title }) {
  return (
    <a href={url} className="icon hover" target="_blank" rel="noreferrer">
      <img src={src} className="icon__image" alt={title} />
    </a>
  );
}

export default HeaderIcon;