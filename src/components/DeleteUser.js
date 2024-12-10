import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteUser = () => {
  const [users, setUsers] = useState([]); // List of all users
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const usersPerPage = 4; // Number of users to show per page
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Fetch all users from the backend
  const fetchAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8081/allusers"); // Update URL as per backend
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users!", error);
      alert("Failed to fetch users. Please try again.");
    }
  };

  // Fetch all users when component mounts
  useEffect(() => {
    fetchAllUsers();
  }, []);

  // Handle delete action
  const handleDelete = async (email) => {
    // Show confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to delete this user?");
    if (isConfirmed) {
      try {
        const response = await axios.delete("http://localhost:8081/deleteuser", {
          params: { email },
        }); // Update URL as per backend
        alert("User deleted successfully!"); // Show success message
        fetchAllUsers(); // Refresh the user list after deletion
      } catch (error) {
        console.error("Error deleting user!", error);
        alert("Failed to delete user. Please try again.");
      }
    }
  };

  // Handle pagination click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the users to display for the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Delete User</h2>

      {/* Display all users in a table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <thead style={{ backgroundColor: "#4CAF50", color: "white" }}>
          <tr>
            <th style={{ padding: "12px", textAlign: "left" }}>First Name</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Last Name</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Email</th>
            <th style={{ padding: "12px", textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.email} style={{ borderBottom: "2px solid #ddd" }}>
              <td style={{ padding: "12px" }}>{user.fname}</td>
              <td style={{ padding: "12px" }}>{user.lname}</td>
              <td style={{ padding: "12px" }}>{user.email}</td>
              <td style={{ textAlign: "center", padding: "12px" }}>
                <button
                  onClick={() => handleDelete(user.email)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "8px 18px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "red")}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            padding: "12px 20px",
            marginRight: "15px",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            borderRadius: "8px",
            border: "1px solid #4CAF50",
            backgroundColor: currentPage === 1 ? "#ddd" : "#4CAF50",
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          Prev
        </button>
        <span style={{ fontSize: "18px", marginRight: "10px" }}>
          Page {currentPage}
        </span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage * usersPerPage >= users.length}
          style={{
            padding: "12px 20px",
            cursor: currentPage * usersPerPage >= users.length ? "not-allowed" : "pointer",
            borderRadius: "8px",
            border: "1px solid #4CAF50",
            backgroundColor: currentPage * usersPerPage >= users.length ? "#ddd" : "#4CAF50",
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          Next
        </button>
      </div>

      {/* Go Back Button */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => navigate(-1)} // Navigate back to the previous page
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF6347",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
