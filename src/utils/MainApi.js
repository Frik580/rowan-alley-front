// export const BASE_URL = "https://api.movies.arseniy.nomoredomains.club";
export const BASE_URL = "http://rowan-alley-api.ru";

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
};

export const register = (name, email) => {
  return fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  }).then(handleResponse);
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleResponse);
};

export const getContent = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then(handleResponse);
};

export const createMovie = (data) => {
  const jwt = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(handleResponse);
};

export const getAllCards = () => {
  return fetch(`${BASE_URL}/cards`, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(handleResponse);
};

export const deleteMovie = (data) => {
  const jwt = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/movies/${data._id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  }).then(handleResponse);
};

export const getUserInfo = () => {
  const jwt = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then(handleResponse);
};


export const setUserInfo = (data) => {
  const jwt = localStorage.getItem("jwt");
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(data),
  }).then(handleResponse);
};