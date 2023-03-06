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

  // API даннах

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

  return (
    <div className="root">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main cardsList={cardsList} />
              {/* <CardDiscription /> */}
              {/* <Footer /> */}
            </>
          }
        />

        {/* <Route
            path="movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <>
                  <Movies />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          /> */}

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
