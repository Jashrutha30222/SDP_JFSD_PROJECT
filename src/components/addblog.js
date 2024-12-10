import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCamera, FaPlus } from "react-icons/fa";

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: null,
    uemail: "",
  });

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const response = await axios.get("http://localhost:8081/loggedinuser");
        setBlog((prevState) => ({
          ...prevState,
          uemail: response.data,
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
        setBlog({ ...blog, image: reader.result.split(",")[1] });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/addpost", blog);
      alert(response.data);
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Failed to add blog. Please try again.");
    }
  };

  return (
    <div>
    <br></br>
    <br></br>
    <div style={styles.container}>
      <div style={styles.header}>
        <FaPlus size={36} style={styles.icon} />
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
            id="file-upload"
            required
          />
          <label htmlFor="file-upload" style={styles.uploadLabel}>
            <FaCamera size={32} style={styles.icon} />
            <span style={styles.uploadText}>Click to Add Image</span>
          </label>
        </div>
        <button type="submit" style={styles.button}>
          Publish Blog
        </button>
      </form>
    </div>
    </div>
  );
};

const styles = {
  container: {
    width: "30%", // Reduced container width
    padding: "20px",
    margin: "auto",
    backgroundColor: "#FFFFFF",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
  
  },
  header: {
    marginBottom: "20px",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  field: {
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "14px",
    color: "#555",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    minHeight: "80px",
  },
  fileInput: {
    display: "none",
  },
  uploadLabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    border: "2px dashed #007BFF",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: "#F9FBFF",
    transition: "background-color 0.3s ease",
  },
  uploadText: {
    marginLeft: "10px",
    fontSize: "14px",
    color: "#007BFF",
    fontWeight: "bold",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#FFF",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  icon: {
    color: "#007BFF",
  },
};

export default AddBlog;
