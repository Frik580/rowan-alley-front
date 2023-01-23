import "./Partners.css";
import Partner from "../Partner/Partner";
import imgRus from "../../../images/logo_rus.png";
import imgGaspi from "../../../images/permgaspi.png";

function Partners() {
  return (
    <div className="partners">
      <h2 className="partners__title">НАШИ ПАРТНЁРЫ</h2>
      <ul className="partners__list">
        <Partner
          url={"https://myhistorypark.ru/"}
          src={imgRus}
          title={"Исторический парк «Россия – моя История»"}
        />
        <Partner
          url={"https://www.permgaspi.ru/"}
          src={imgGaspi}
          title={"Пермский государственных архив социально-политической истории"}
        />
      </ul>
    </div>
  );
}

export default Partners;
