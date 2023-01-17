import "./Main.css";
import Promo from "./Promo/Promo";
import Project from "./Project/Project";
import NewsForm from "./NewsForm/NewsForm";
import Partners from "./Partners/Partners";

function Main() {
  return (
    <main className="main">
      <Promo />
      <Project />
      {/* <Cards />
      <NewsForm />
      <Partners /> */}
    </main>
  );
}

export default Main;
