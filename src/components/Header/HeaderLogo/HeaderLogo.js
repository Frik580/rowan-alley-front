import "./HeaderLogo.css";

function HeaderLogo({ url, src, title }) {
  return (
    <a href={url} className="logo hover" target="_blank" rel="noreferrer">
      <img src={src} className="logo__image" alt={title} />
    </a>
  );
}

export default HeaderLogo;
