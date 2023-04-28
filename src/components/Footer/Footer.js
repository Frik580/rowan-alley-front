import "./Footer.css";
import imgAdds from "../../images/adds3.png";
import imgEmail from "../../images/email4.png";

function Footer() {
  const date = new Date();

  return (
    <footer className="footer" id={"footer"}>
      <div className="footer__conteiner">
        <p className="footer__copyright">&#169; {date.getFullYear()}</p>
        <div className="footer__contacts">
          <p className="footer__text">
            Контакты ПКО МОФ «Российский фонд мира»:
          </p>
          <a href="mailto:fondmira.perm@gmail.com" className="footer__link">
            <img className="footer__icon" src={imgEmail} alt="" />
            fondmira.perm@gmail.com
          </a>
          <p className="footer__text">
            <img className="footer__icon" src={imgAdds} alt="" />
            Пермь, ул. Ленина 51, каб. 103
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
