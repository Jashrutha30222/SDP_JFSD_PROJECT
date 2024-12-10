import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  const navigate = useNavigate();

  // Function to fetch users from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8081/allusers"); // Update with your backend endpoint
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users!", error);
      alert("Failed to fetch users. Please try again.");
    }
  };

  // Fetch users when the component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        background: "linear-gradient(to right, #FFDEE9, #B5FFFC)", // Light gradient background
        minHeight: "100vh", // Ensure full page height
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "800px", padding: "20px", textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: "bold",
            color: "#333",
            fontSize: "2rem",
          }}
        >
          View Users
        </Typography>
        {users.length > 0 ? (
          <>
            <table
              border="1"
              cellPadding="10"
              style={{
                width: "100%",
                textAlign: "left",
                borderCollapse: "collapse",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <th style={{ padding: "12px" }}>First Name</th>
                  <th style={{ padding: "12px" }}>Last Name</th>
                  <th style={{ padding: "12px" }}>Email</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers.map((user, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#f1f1f1",
                    }}
                  >
                    <td style={{ padding: "10px" }}>{user.fname}</td>
                    <td style={{ padding: "10px" }}>{user.lname}</td>
                    <td style={{ padding: "10px" }}>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                sx={{
                  marginRight: "10px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                Previous
              </Button>

              {[...Array(Math.ceil(users.length / usersPerPage))].map((_, index) => (
                <Button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  sx={{
                    margin: "0 5px",
                    backgroundColor: currentPage === index + 1 ? "#4CAF50" : "#ddd",
                    color: currentPage === index + 1 ? "white" : "#333",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  {index + 1}
                </Button>
              ))}

              <Button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === Math.ceil(users.length / usersPerPage)}
                sx={{
                  marginLeft: "10px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                  cursor: currentPage === Math.ceil(users.length / usersPerPage) ? "not-allowed" : "pointer",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                Next
              </Button>
            </div>
          </>
        ) : (
          <p>No users found.</p>
        )}

        {/* Go Back Button */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            onClick={() => navigate(-1)} // Navigate back to the previous page
            sx={{
              backgroundColor: "#FF6347",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            Go Back
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default ViewUser;
