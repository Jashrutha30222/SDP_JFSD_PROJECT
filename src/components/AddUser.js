import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

const AddUser = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // State for success message visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to add this user?");
    if (isConfirmed) {
      try {
        const response = await axios.post("http://localhost:8081/signup", user); // Update the URL as per your backend endpoint
        console.log(response.data);
        setSuccessMessage("User added successfully!"); // Show success message
        setUser({
          fname: "",
          lname: "",
          email: "",
          password: "",
        });

        // Automatically hide success message after 3 seconds
        setTimeout(() => setSuccessMessage(""), 3000);
      } catch (error) {
        console.error("There was an error adding the user!", error);
        alert("Failed to add user. Please try again.");
      }
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        {/* Profile Avatar */}
        <div style={styles.profile}>
          <Avatar
            alt="User Avatar"
            src="https://www.w3schools.com/w3images/avatar2.png" // Replace with actual image URL
            sx={styles.profileImage}
          />
        </div>

        <h2 style={styles.heading}>Add User</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputContainer}>
            <label style={styles.label}>First Name</label>
            <input
              type="text"
              name="fname"
              value={user.fname}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Last Name</label>
            <input
              type="text"
              name="lname"
              value={user.lname}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.submitButton}>
            Add User
          </button>
        </form>

        {/* Success Message */}
        {successMessage && (
          <div style={styles.successMessage}>
            {successMessage}
          </div>
        )}

        {/* Go Back Button */}
        <div style={styles.goBackButtonContainer}>
          <button
            onClick={() => navigate(-1)} // Navigate back to the previous page
            style={styles.goBackButton}
          >
            Go Back
          </button>
        </div>
      </div>

      {/* CSS for animation */}
      <style>
        {`
          @keyframes slideUp {
            from {
              bottom: -50px;
              opacity: 0;
            }
            to {
              bottom: 20px;
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to bottom, #f6d365, #fda085)", // Light peach gradient background
    fontFamily: "'Arial', sans-serif",
  },
  formContainer: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
  },
  profile: {
    width: "100px",
    height: "100px",
    margin: "0 auto 20px",
    borderRadius: "50%", // Circle shape for avatar
    backgroundColor: "#FF4C00", // Background color of the profile shape
    overflow: "hidden",
    position: "relative",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
    fontSize: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputContainer: {
    textAlign: "left",
  },
  label: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    boxSizing: "border-box",
    outline: "none",
    transition: "0.3s",
  },
  submitButton: {
    backgroundColor: "#FF4C00", // Deep red-orange color for button
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  },
  submitButtonHover: {
    backgroundColor: "#feb47b",
  },
  successMessage: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    animation: "slideUp 1s",
  },
  goBackButtonContainer: {
    marginTop: "20px",
  },
  goBackButton: {
    padding: "10px 20px",
    backgroundColor: "#FF6347",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
  },
};

export default AddUser;
