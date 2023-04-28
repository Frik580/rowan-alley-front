import "./HeaderLogo.css";

function HeaderLogo({ url, src, title }) {
  return (
    <a href={url} className="logo hover" target="_blank" rel="noreferrer">
      <img src={src} className="logo__image" alt={title} />
      {/* {title === "ПКО МОФ «Российский фонд мира»" && <p className="logo__title">{title}</p>} */}
    </a>
  );
}

export default HeaderLogo;
