import "./Footer.css";
import imgAdds from "../../images/adds3.png";
import imgEmail from "../../images/email4.png";

function Footer() {
  const date = new Date();

  return (
    <footer className="footer">
      <div className="footer__border" />
      <div className="footer__conteiner">
        <p className="footer__text">&#169; {date.getFullYear()}</p>
        <p className="footer__text">
          <img className="footer__icon" src={imgAdds} alt="" />
          г. Пермь, ул. Ленина 51, каб. 103
        </p>
        <a href="mailto:fondmira.perm@gmail.com" className="footer__link">
          <img className="footer__icon" src={imgEmail} alt="" />
          fondmira.perm@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer;
