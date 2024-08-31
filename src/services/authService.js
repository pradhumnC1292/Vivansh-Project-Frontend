// authService.js

import axios from "axios";

const API_URL = "https://vivansh-project-backend.onrender.com";

export const getCsrfToken = async () => {
  const response = await axios.get(API_URL + "/api/csrf-token", {
    withCredentials: true,
  });
  return response.data.csrfToken;
};

export const register = async (userData) => {
  const csrfToken = await getCsrfToken();
  const response = await axios.post(API_URL + "/api/register", userData, {
    withCredentials: true,
    headers: {
      "X-CSRF-Token": csrfToken,
    },
  });
  return response.data;
};

export const login = async (userData) => {
  const csrfToken = await getCsrfToken();
  const response = await axios.post(API_URL + "/api/login", userData, {
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
    API_URL + "/api/logout",
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
