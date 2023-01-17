import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Footer />
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
          /> */}
          {/* <Route
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
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
