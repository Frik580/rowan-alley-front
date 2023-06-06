import "./Navigation.css";
import HeaderIcon from "../HeaderIcon/HeaderIcon";
import imgVK from "../../images/vk.svg";
import imgRT from "../../images/rt.svg";

function Navigation() {
  return (
    <section className="navigation">
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
      <div className="navigation__border"></div>
      <a className="navigation__button hover" href="#footer">
        Контакты
      </a>
    </section>
  );
}

export default Navigation;
