import "./Location.css";
import Iframe from "react-iframe";

function Location() {
  return (
    <section className="location">
      <h2 className="location__title">АЛЛЕЯ ГЕРОЕВ НА КАРТЕ ГОРОДА</h2>
      <div className="location__conteiner">
        <Iframe
          url="https://yandex.ru/map-widget/v1/?um=constructor%3A5921e65bea3aab8234ffe1da1b2801af6856bc5e6341743e4c111ad3807436f4&amp;source=constructor"
          title="Рябиновая аллея Героев"
          width="100%"
          height="400"
          frameBorder="0"
        />
      </div>
    </section>
  );
}

export default Location;
