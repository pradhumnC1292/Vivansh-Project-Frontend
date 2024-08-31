import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Select a page to navigate:</p>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <br />
        <Link to="/admin-dashboard">Admin Dashboard</Link>
      </nav>
    </div>
  );
};

export default Home;
