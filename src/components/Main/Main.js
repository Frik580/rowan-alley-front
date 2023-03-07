import "./Main.css";
import Promo from "./Promo/Promo";
import Project from "./Project/Project";
import NewsForm from "./NewsForm/NewsForm";
import Partners from "./Partners/Partners";
import Location from "./Location/Location";

function Main({cardsList}) {
  return (
    <main className="main">
      <Promo />
      <Project cardsList={cardsList} />
      <NewsForm />
      <Partners />
      <Location />
    </main>
  );
}

export default Main;
