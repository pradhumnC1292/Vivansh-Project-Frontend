// authService.js

import axios from "axios";

const API_URL = "https://vivansh-project-backend.onrender.com/api/";

export const getCsrfToken = async () => {
  const response = await axios.get(API_URL + "csrf-token", {
    withCredentials: true,
  });
  return response.data.csrfToken;
};

export const register = async (userData) => {
  const csrfToken = await getCsrfToken();
  const response = await axios.post(API_URL + "register", userData, {
    withCredentials: true,
    headers: {
      "X-CSRF-Token": csrfToken,
    },
  });
  return response.data;
};

export const login = async (userData) => {
  const csrfToken = await getCsrfToken();
  const response = await axios.post(API_URL + "login", userData, {
    withCredentials: true,
    headers: {
      "X-CSRF-Token": csrfToken,
    },
  });
  return response.data;
};

export const logout = async () => {
  const csrfToken = await getCsrfToken();
  const response = await axios.post(
    API_URL + "logout",
    {},
    {
      withCredentials: true,
      headers: {
        "X-CSRF-Token": csrfToken,
      },
    }
  );
  return response.data;
};
