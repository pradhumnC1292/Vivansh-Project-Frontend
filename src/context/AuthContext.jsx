import React, { createContext, useState, useEffect } from "react";
import { login, logout } from "../services/authService.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const savedUser = JSON.parse(localStorage.getItem("user"));
        if (savedUser) {
          setUser(savedUser);
        }
      } catch (error) {
        console.error("Failed to check user authentication", error);
      }
    };
    checkUser();
  }, []);

  const handleLogin = async (email, password, role) => {
    // Accept role as parameter
    try {
      const data = await login({ email, password, role }); // Include role in login request
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const hasRole = (role) => {
    return user && user.role === role;
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, handleLogin, handleLogout, hasRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};
