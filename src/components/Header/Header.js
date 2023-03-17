import "./Header.css";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderIcon from "./HeaderIcon/HeaderIcon";
import imgFond from "../../images/fond.png";
import imgFpg from "../../images/pgrants_logo_gp.png";
import imgVK from "../../images/vk.svg";
import imgRT from "../../images/rt.svg";

function Header() {
  return (
    <header className="header">
      <HeaderLogo
        url={"https://peacefound.ru"}
        src={imgFond}
        title={"Российский Фонд Мира"}
      />
      <HeaderLogo
        url={"https://xn--80afcdbalict6afooklqi5o.xn--p1ai"}
        src={imgFpg}
        title={"Фонд Президентских Грантов"}
      />
      <div className="header__conteiner">
        <HeaderIcon
          url={"https://vk.ru/fond.mira2020"}
          src={imgVK}
          title={"ВКонтакте"}
        />
        <HeaderIcon
          url={"https://rutube.ru/channel/29206955"}
          src={imgRT}
          title={"RuTube"}
        />
        <div className="header__border"></div>
        <a className="header__button hover" href="#footer">
          Контакты
        </a>
      </div>
    </header>
  );
}

export default Header;
