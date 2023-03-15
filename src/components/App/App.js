import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import CardDiscription from "../CardDiscription/CardDiscription";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { getAllCards } from "../../utils/MainApi";

function App() {
  const [messageError, setMessageError] = useState("");
  const [isPreloader, setIsPreloader] = useState(false);
  const [cardsList, setCardsList] = useState([]);
  const [queryCardsList, setQueryCardsList] = useState([]);
  const [count, setCount] = useState(null);
  const [queryCardsListText, setQueryCardsListText] = useState(null);
  const [isButtonNext, setIsButtonNext] = useState(true);
  const [isFindCards, setIsFindCards] = useState(false);

  // API даннах

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      // behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    getAllCards()
      .then((res) => {
        console.log(res);
        setCardsList(res);
      })
      .catch((err) => {
        console.log(err);
        setMessageError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
        );
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }, []);

  function handleFindCards(data) {
    setIsFindCards(true);
    const query = cardsList.filter((card) =>
      card.name
        .toLowerCase()
        .includes(data.name.toLowerCase().replace(/\s+/g, ""))
    );
    // console.log(query);
    setQueryCardsList(query);
    // setQueryUserMovies(query);
    // handleShortUserFilms(query);
    setQueryCardsListText(data.name.toLowerCase());
    // setIsFindUserMovies(true);
  }

  return (
    <div className="root">
      <Header />
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
              />
            </>
          }
        />

        <Route
          path="cards/:id"
          element={<CardDiscription cards={cardsList} />}
        />

        {/* <Route
            path="admin"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                  onLogout={onLogout}
                  onUpdateUser={handleUpdateUser}
                  messageError={messageProfile}
                />
              </ProtectedRoute>
            }
          /> */}

        {/* <Route
            path="signin"
            element={
              <ProtectedRoute loggedIn={!loggedIn}>
                <AuthForm
                  onLogin={onLogin}
                  messageError={messageError}
                  authForm="login"
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="signup"
            element={
              <ProtectedRoute loggedIn={!loggedIn}>
                <AuthForm
                  onRegister={onRegister}
                  messageError={messageError}
                  authForm="register"
                />
              </ProtectedRoute>
            }
          /> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
