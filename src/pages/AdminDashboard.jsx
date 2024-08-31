import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user || user.role !== "Admin") {
    return (
      <p>
        Access denied. You do not have the necessary permissions to view this
        page.
      </p>
    );
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.name}. This is the admin-specific content.</p>
      {/* Add more admin-specific functionality here */}
    </div>
  );
};

export default AdminDashboard;
