import React from "react";
import { Link } from "react-router-dom";

const AdminBlog = () => {
  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h1 style={styles.header}>Admin Blog Dashboard</h1>
        <p style={styles.subHeader}>Manage blog posts with ease</p>
      </div>
      <div style={styles.buttonsContainer}>
        <Link to="/admin/blog/add" style={{ ...styles.button, ...styles.buttonAdd }}>
          Add New Post
        </Link>
        <Link to="/admin/blog/update" style={{ ...styles.button, ...styles.buttonUpdate }}>
          Manage Posts
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundImage: "linear-gradient(to bottom, #f8efd4, #f9d29d, #f39c42)",
    color: "#fff",
    fontFamily: "'Poppins', sans-serif",
  },
  headerContainer: {
    textAlign: "center",
    marginBottom: "30px",
  },
  header: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#2c3e50",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  subHeader: {
    fontSize: "18px",
    fontStyle: "italic",
    color: "#34495e",
  },
  buttonsContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    display: "inline-block",
    padding: "15px 40px",
    fontSize: "20px",
    fontWeight: "bold",
    borderRadius: "8px",
    textDecoration: "none",
    textAlign: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
  },
  buttonAdd: {
    backgroundImage: "linear-gradient(to right, #6a11cb, #2575fc)",
    color: "#fff",
  },
  buttonUpdate: {
    backgroundImage: "linear-gradient(to right, #ff512f, #dd2476)",
    color: "#fff",
  },
  buttonHover: {
    transform: "scale(1.05)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
  },
};

export default AdminBlog;
