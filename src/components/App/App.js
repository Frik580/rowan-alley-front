import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Popup from "../Popup/Popup";
import CardDiscription from "../CardDiscription/CardDiscription";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { getAllCards, register } from "../../utils/MainApi";

function App() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [cardsList, setCardsList] = useState([]);
  const [queryCardsList, setQueryCardsList] = useState([]);
  const [count, setCount] = useState(null);
  const [queryCardsListText, setQueryCardsListText] = useState(null);
  const [isButtonNext, setIsButtonNext] = useState(true);
  const [isFindCards, setIsFindCards] = useState(false);

  // API даннах

  useEffect(() => {
    getAllCards()
      .then((res) => {
        setCardsList(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setMessage(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
        );
        setIsPopupOpen(true);
      })
      .finally(() => {
        // setIsPreloader(false);
      });
  }, []);

  function handleFindCards(data) {
    setIsFindCards(true);
    const query = cardsList.filter((card) =>
      card.name
        .toLowerCase()
        .includes(data.name.toLowerCase().replace(/\s+/g, ""))
    );
    setQueryCardsList(query);
    setQueryCardsListText(data.name.toLowerCase());
  }

  const onRegister = ({ name, email }) => {
    console.log({ name, email });
    console.log(name);
    register(name, email)
      .then((res) => {
        console.log(res);
        setMessage(`${res.name}, Вы подписаны на наши новости`);
        setIsPopupOpen(true);
      })
      .catch((err) => {
        console.log(err);
        if (err === "Ошибка: 409 Conflict") {
          setMessage(
            `${name}, по email ${email} уже есть подписка на наши новости`
          );
        } else if (err === "Ошибка: 400 Bad Request") {
          setMessage("Переданы некорректные данные");
        } else {
          setMessage("При подписке на новости произошла ошибка");
        }
        setIsPopupOpen(true);
      })
      .finally(() => {
        setTimeout(() => {
          setIsPopupOpen(false);
          setMessage("");
        }, 10000);
      });
  };

  return (
    <div className="root">
      <Header
        onOpenNavigation={() => setIsNavigationOpen(!isNavigationOpen)}
        isNavigationOpen={isNavigationOpen}
      />
      {isNavigationOpen && (
        <div className="root__navigation">
          <Navigation />
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main
                cardsList={isFindCards ? queryCardsList : cardsList}
                onFindCards={handleFindCards}
                queryCardsListText={queryCardsListText}
                count={count}
                onOpenNext={(data) => setIsButtonNext(data)}
                isButtonNext={isButtonNext}
                onNextCards={() => setCount(count + 1)}
                onRegister={onRegister}
              />
            </>
          }
        />

        <Route
          path="cards/:id"
          element={<CardDiscription cards={cardsList} />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Popup
        isOpen={isPopupOpen}
        onClose={() => {
          setIsPopupOpen(false);
          setMessage("");
        }}
        message={message}
      />
      <Footer />
    </div>
  );
}

export default App;
