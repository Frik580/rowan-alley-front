import "./Partners.css";
import Partner from "../Partner/Partner";

function Partners() {
  return (
    <div className="partners">
      <h2 className="partners__title">НАШИ ПАРТНЁРЫ</h2>
      <ul className="partners__list">
    <Partner />
      </ul>
    </div>
  );
}

export default Partners;
