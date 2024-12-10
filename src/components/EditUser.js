import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
  const [users, setUsers] = useState([]); // List of all users
  const [editingUser, setEditingUser] = useState(null); // User being edited
  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const usersPerPage = 4; // Number of users to show per page

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

  // Fetch all users on component mount
  useEffect(() => {
    fetchAllUsers();
  }, []);

  // Handle the change in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  // Handle the "Edit" button click with confirmation
  const handleEditClick = (user) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to edit this user?"
    );
    if (isConfirmed) {
      setEditingUser(user.email); // Set the user being edited
      setUserDetails(user); // Populate the form with user details
    }
  };

  // Handle form submission to update the user
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8081/updateUser", userDetails); // Update the user details
      alert("User updated successfully!"); // Show success message
      setEditingUser(null); // Exit editing mode
      fetchAllUsers(); // Refresh the user list
    } catch (error) {
      console.error("Error updating user!", error);
      alert("Failed to update user. Please try again.");
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
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>User Management</h2>

      {/* Display all users in a table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
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
            <tr key={user.email} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "12px" }}>{user.fname}</td>
              <td style={{ padding: "12px" }}>{user.lname}</td>
              <td style={{ padding: "12px" }}>{user.email}</td>
              <td style={{ textAlign: "center", padding: "12px" }}>
                <button
                  onClick={() => handleEditClick(user)}
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: "8px 18px",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
                >
                  Edit
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

      {/* Editing form */}
      {editingUser && (
        <div style={{ marginTop: "20px", padding: "20px", borderRadius: "12px", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)", backgroundColor: "#f9f9f9" }}>
          <h3 style={{ marginBottom: "20px" }}>Edit User</h3>
          <form onSubmit={handleUpdateSubmit}>
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="fname"
                value={userDetails.fname}
                onChange={handleInputChange}
                required
                style={{
                  marginLeft: "10px",
                  padding: "12px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  width: "100%",
                }}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lname"
                value={userDetails.lname}
                onChange={handleInputChange}
                required
                style={{
                  marginLeft: "10px",
                  padding: "12px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  width: "100%",
                }}
              />
            </div>
            <div>
              <label>Email (cannot be changed)</label>
              <input
                type="email"
                value={userDetails.email}
                readOnly
                style={{
                  marginLeft: "10px",
                  padding: "12px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  width: "100%",
                }}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={userDetails.password}
                onChange={handleInputChange}
                required
                style={{
                  marginLeft: "10px",
                  padding: "12px",
                  marginBottom: "20px",
                  borderRadius: "8px",
                  border: "1px solid #ccc",
                  width: "100%",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "12px 20px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
            >
              Update User
            </button>
          </form>
        </div>
      )}

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

export default UserManagement;
