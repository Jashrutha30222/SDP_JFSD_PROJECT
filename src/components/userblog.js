import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaPlusCircle, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ViewMyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null); // For storing user's full name
  const [userProfileImage, setUserProfileImage] = useState(null); // For storing profile image

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const response = await axios.get("http://localhost:8081/loggedinuser");
        const email = response.data;
        setUserEmail(email);
      } catch (error) {
        console.error("Error fetching user email:", error);
      }
    };

    fetchUserEmail();
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!userEmail) return;

      try {
        const response = await axios.get("http://localhost:8081/getuser", {
          params: { email: userEmail },
        });
        setUserName(response.data.name); // Assuming 'name' field contains the user's full name
        setUserProfileImage(response.data.profileImage); // Assuming profileImage field in the response
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [userEmail]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (!userEmail) return;

      try {
        const response = await axios.get("http://localhost:8081/userposts", {
          params: { email: userEmail },
        });

        // Sort posts in descending order by ID
        const sortedPosts = response.data.sort((a, b) => b.id - a.id);
        setPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching user posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [userEmail]);

  const handleDelete = async (postId) => {
    try {
      await axios.delete("http://localhost:8081/deletepost", {
        params: { id: postId },
      });
      setPosts(posts.filter((post) => post.id !== postId)); // Remove the deleted post from the state
    } catch (error) {
      console.error("Error deleting the post:", error);
    }
  };

  const handleEdit = (post) => {
    // This function will handle editing a post
    const updatedPost = { ...post, isEditing: true }; // Add isEditing flag to track edit mode
    setPosts(posts.map((p) => (p.id === post.id ? updatedPost : p)));
  };

  const handleSaveEdit = async (postId, updatedPost) => {
    try {
      await axios.put("http://localhost:8081/editpost", updatedPost); // Update the post
      setPosts(posts.map((p) => (p.id === postId ? { ...updatedPost, isEditing: false } : p)));
    } catch (error) {
      console.error("Error saving post changes:", error);
    }
  };

  return (
    <div style={styles.viewMyPosts}>
      {/* Navbar */}
      <div style={styles.navbar}>
        <h1 style={styles.appName}>My Posts</h1>
        <div style={styles.navButtons}>
          <Link to="/user/addblog" style={styles.navButton}>
            <FaPlusCircle style={styles.icon} /> Add Post
          </Link>
        </div>
      </div>

      {/* Blog Feed */}
      <div style={styles.postsContainer}>
        {loading ? (
          <p style={styles.loadingText}>Loading your posts...</p>
        ) : posts.length === 0 ? (
          <p style={styles.loadingText}>You have no posts.</p>
        ) : (
          <div style={styles.postsGrid}>
            {posts.map((post) => (
              <div key={post.id} style={styles.postCard}>
                {/* Username and Profile Image */}
                <div style={styles.postHeader}>
                  <div style={styles.avatar}>
                    {userProfileImage ? (
                      <img
                        src={userProfileImage}
                        alt="Profile"
                        style={styles.avatarImage}
                      />
                    ) : (
                      <span style={styles.avatarText}>
                        {userName ? userName.charAt(0).toUpperCase() : "U"}
                      </span>
                    )}
                  </div>
                  <span style={styles.username}>{userName}</span>
                </div>

                {/* Title and Description */}
                <div style={styles.postContent}>
                  {post.isEditing ? (
                    <div>
                      <input
                        type="text"
                        defaultValue={post.title}
                        onChange={(e) =>
                          (post.title = e.target.value)
                        }
                        style={styles.editInput}
                      />
                      <textarea
                        defaultValue={post.description}
                        onChange={(e) =>
                          (post.description = e.target.value)
                        }
                        style={styles.editTextarea}
                      />
                      <button
                        onClick={() =>
                          handleSaveEdit(post.id, { ...post })
                        }
                        style={styles.saveButton}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h3 style={styles.postTitle}>{post.title}</h3>
                      <p style={styles.postDescription}>{post.description}</p>
                    </div>
                  )}
                </div>

                {/* Actions: Edit and Delete */}
                <div style={styles.actions}>
                  {post.isEditing ? (
                    <button
                      style={styles.saveButton}
                      onClick={() => handleSaveEdit(post.id, post)}
                    >
                      Save Changes
                    </button>
                  ) : (
                    <button
                      style={styles.editButton}
                      onClick={() => handleEdit(post)}
                    >
                      <FaEdit style={styles.icon} /> Edit
                    </button>
                  )}
                  <button
                    style={styles.deleteButton}
                    onClick={() => handleDelete(post.id)}
                  >
                    <FaTrash style={styles.icon} /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  /* Main Container */
  viewMyPosts: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fafafa",
    minHeight: "100vh",
    padding: "20px",
  },

  /* Navbar */
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#FFFEFA",
    color: "#333",
    marginBottom: "20px",
  },

  appName: {
    fontSize: "24px",
    color: "#007bff",
    margin: 0,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  navButtons: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },

  navButton: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    padding: "8px 15px",
    backgroundColor: "#007bff",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    display: "flex",
    alignItems: "center",
  },

  postsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  loadingText: {
    fontSize: "18px",
    color: "#555",
  },

  postsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
  },

  postCard: {
    backgroundColor: "white",
    border: "1px solid #e6e6e6",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "15px",
  },

  postHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "18px",
  },

  avatarImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  avatarText: {
    fontSize: "18px",
    color: "white",
    fontWeight: "bold",
  },

  username: {
    fontWeight: "bold",
    color: "#333",
    marginLeft: "10px",
  },

  postContent: {
    flexGrow: 1,
  },

  postTitle: {
    margin: "0 0 10px",
    fontWeight: "bold",
    color: "#007bff",
  },

  postDescription: {
    margin: "0 0 10px",
    color: "#555",
  },

  actions: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "10px",
  },

  editButton: {
    backgroundColor: "#ff9800",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "8px 12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
  },

  deleteButton: {
    backgroundColor: "#ff4d4f",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "8px 12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
  },

  saveButton: {
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "14px",
  },

  editInput: {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },

  editTextarea: {
    width: "100%",
    padding: "8px",
    height: "100px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },

  icon: {
    marginRight: "5px",
  },
};

export default ViewMyPosts;
