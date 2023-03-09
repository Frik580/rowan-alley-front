import "./Main.css";
import Promo from "./Promo/Promo";
import Project from "./Project/Project";
import NewsForm from "./NewsForm/NewsForm";
import Partners from "./Partners/Partners";
import Location from "./Location/Location";

function Main({
  cardsList,
  count,
  onCloseNext,
  onOpenNext,
  isButtonNext,
  onNextCards,
}) {
  return (
    <main className="main">
      <Promo />
      <Project
        cardsList={cardsList}
        count={count}
        onCloseNext={onCloseNext}
        onOpenNext={onOpenNext}
        isButtonNext={isButtonNext}
        onNextCards={onNextCards}
      />
      <NewsForm />
      <Partners />
      <Location />
    </main>
  );
}

export default Main;
