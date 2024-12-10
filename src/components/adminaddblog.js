import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCamera, FaPlus } from "react-icons/fa"; // Camera icon for upload
import { Height } from "@mui/icons-material";

const AdminAddBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: null, // Handle image separately
    uemail: "", // This will be fetched from backend
  });

  // Fetch the logged-in user's email on component mount
  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const response = await axios.get("http://localhost:8081/loggedinuser");
        setBlog((prevState) => ({
          ...prevState,
          uemail: response.data, // Assuming the response contains the email
        }));
      } catch (error) {
        console.error("Error fetching user email:", error);
      }
    };

    fetchUserEmail();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlog({ ...blog, image: reader.result.split(",")[1] }); // Set base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/addpost", blog);
      alert(response.data); // Display success message
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Failed to add blog. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <FaPlus size={50} style={styles.uploadIcon} />
        <h2 style={styles.heading}>Add a New Blog</h2>
      </div>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.field}>
          <label style={styles.label}>Title:</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Description:</label>
          <textarea
            name="description"
            value={blog.description}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Add Picture:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={styles.fileInput}
            required
            id="file-upload"
          />
          <label htmlFor="file-upload" style={styles.uploadLabel}>
            <FaCamera size={40} style={styles.uploadIcon} />
            <span style={styles.uploadText}>Click to Add Image</span>
          </label>
        </div>
        <button type="submit" style={styles.button}>
          Publish Blog
        </button>
      </form>
    </div>
  );
};
const styles = {
    container: {
      width: "40%", // Further reduced width for a smaller form
      minHeight: "250px", // Reduced height
      margin: "auto",
      padding: "15px", // Smaller padding for a more compact form
      backgroundColor: "#F5F5F5", // Light background color
      borderRadius: "10px", // Smaller rounded corners
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow
      fontFamily: "'Poppins', sans-serif",
      position: "absolute", // Center form with absolute positioning
      top: "70%", // Move the form lower for better alignment
      left: "50%",
      transform: "translate(-50%, -50%)", // Center horizontally and vertically
      textAlign: "center", // Center the form content
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "15px", // Reduced margin
      backgroundColor: "#F1F1F1", // Light background for header
      padding: "10px", // Smaller padding for the header
      borderRadius: "8px", // Smaller rounded corners for header
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Shadow for header
    },
    heading: {
      color: "#343A40", // Dark text for header
      fontSize: "18px", // Smaller heading font size
      fontWeight: "600",
      marginBottom: "10px", // Reduced space below the heading
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // Center the form elements
      width: "100%",
    },
    field: {
      marginBottom: "12px", // Smaller margin for compact layout
      width: "100%",
    },
    label: {
      fontSize: "13px", // Smaller font size for label
      color: "#495057",
      fontWeight: "500",
      marginBottom: "6px",
    },
    input: {
      width: "100%",
      padding: "8px", // Reduced padding for inputs
      borderRadius: "8px",
      border: "1px solid #DEE2E6", // Light border
      fontSize: "13px", // Adjusted font size
      backgroundColor: "#FFF",
    },
    textarea: {
      width: "100%",
      padding: "8px", // Reduced padding for description field
      borderRadius: "8px",
      border: "1px solid #DEE2E6",
      fontSize: "13px", // Smaller font size
      minHeight: "80px", // Reduced height for description box
      backgroundColor: "#FFF",
    },
    fileInput: {
      display: "none",
    },
    uploadLabel: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "8px",
      border: "2px dashed #007BFF", // Dashed border for upload area
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      marginTop: "8px",
      backgroundColor: "#F1F8FF",
    },
    uploadText: {
      fontSize: "13px",
      color: "#007BFF",
      fontWeight: "bold",
    },
    button: {
      padding: "10px", // Smaller padding for the button
      backgroundColor: "#007BFF", // Blue button color
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "14px", // Smaller font size for the button
      fontWeight: "bold",
      transition: "background-color 0.3s ease",
      marginTop: "15px", // Reduced space above button
    },
  };
  
  export default AdminAddBlog;
  