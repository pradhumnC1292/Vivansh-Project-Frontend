import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, handleLogout, hasRole } = useContext(AuthContext); // Get hasRole from context
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    await handleLogout();
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {user ? (
        <>
          <p>
            Welcome, {user.name}! Role: {user.role}
          </p>
          {hasRole("Admin") && <p>You have admin privileges!</p>}
          <button onClick={handleLogoutClick}>Logout</button>
        </>
      ) : (
        <p>Please log in to view your dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
