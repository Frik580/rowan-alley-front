import "./Header.css";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import imgFond from "../../images/fond.png";
import imgFpg from "../../images/pgrants_logo_gp3.png";
import Navigation from "../Navigation/Navigation";

function Header({ onOpenNavigation, isNavigationOpen }) {
  return (
    <header className="header">
      <div className="header__section">
        <HeaderLogo
          url={"https://peacefound.ru"}
          src={imgFond}
          title={"ПКО МОФ «Российский фонд мира»"}
        />
        <HeaderLogo
          url={"https://xn--80afcdbalict6afooklqi5o.xn--p1ai"}
          src={imgFpg}
          title={"Фонд Президентских Грантов"}
        />
        <div className="header__conteiner">
          <Navigation />
        </div>
        <div className="header__navigation">
          <button
            onClick={onOpenNavigation}
            className={`hover ${
              isNavigationOpen
                ? "header__close-button"
                : "header__burger-button"
            }`}
            type="button"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
