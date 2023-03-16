import "./Main.css";
import Promo from "./Promo/Promo";
import Project from "./Project/Project";
import NewsForm from "./NewsForm/NewsForm";
import Partners from "./Partners/Partners";
import Location from "./Location/Location";

function Main({
  cardsList,
  count,
  onOpenNext,
  isButtonNext,
  onNextCards,
  onFindCards,
  queryCardsListText,
}) {
  return (
    <main className="main">
      <Promo />
      <Project
        cardsList={cardsList}
        count={count}
        onOpenNext={onOpenNext}
        isButtonNext={isButtonNext}
        onNextCards={onNextCards}
        onFindCards={onFindCards}
        queryCardsListText={queryCardsListText}
      />
      <NewsForm />
      <Partners />
      <Location />
    </main>
  );
}

export default Main;
