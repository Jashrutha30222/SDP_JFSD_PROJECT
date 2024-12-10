import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaDownload, FaSearch, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom"; // For navigation

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [animateHeart, setAnimateHeart] = useState(null); // For heart animation
  const [searchQuery, setSearchQuery] = useState(""); // For search input

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogResponse = await axios.get("http://localhost:8081/allposts");

        const blogsWithUsernames = await Promise.all(
          blogResponse.data.map(async (blog) => {
            try {
              const userResponse = await axios.get(
                `http://localhost:8081/getuser?email=${blog.uemail}`
              );
              return { ...blog, username: userResponse.data };
            } catch (error) {
              console.error(`Error fetching username for blog: ${blog.id}`, error);
              return { ...blog, username: "Unknown User" };
            }
          })
        );

        // Sort blogs by their ID or createdAt in descending order (last added first)
        blogsWithUsernames.sort((a, b) => b.id - a.id); // Sort by ID, change to createdAt if necessary

        setBlogs(blogsWithUsernames);
        setFilteredBlogs(blogsWithUsernames);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredBlogs(blogs); // Show all blogs if search query is empty
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      setFilteredBlogs(
        blogs.filter((blog) =>
          blog.title.toLowerCase().includes(lowerCaseQuery)
        )
      );
    }
  }, [searchQuery, blogs]);

  const toggleLike = (id) => {
    setLikedPosts((prev) =>
      prev.includes(id) ? prev.filter((postId) => postId !== id) : [...prev, id]
    );
  };

  const handleHeartClick = (id) => {
    toggleLike(id);
    setAnimateHeart(id);
    setTimeout(() => {
      setAnimateHeart(null); // Reset animation after 1 second
    }, 1000);
  };

  const downloadImage = (image, title) => {
    const link = document.createElement("a");
    link.href = `data:image/jpeg;base64,${image}`;
    link.download = `${title}.jpg`;
    link.click();
  };

  return (
    <div style={styles.viewBlogs}>
      {/* Fixed Navbar */}
      <div style={styles.navbar}>
        <h1 style={styles.appName}>Explore India</h1>
        <div style={styles.navButtons}>
          <Link to="/user/addblog" style={styles.navButton}>
            <FaPlusCircle style={styles.icon} /> Add Post
          </Link>
          <Link to="/user/userblog" style={styles.navButton}>
            <FaDownload style={styles.icon} /> View My Posts
          </Link>
        </div>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search posts by title"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          <FaSearch style={styles.searchIcon} />
        </div>
      </div>

      {/* Blog Feed */}
      <div style={styles.blogContainer}>
        {loading ? (
          <p style={styles.loadingText}>Loading blogs...</p>
        ) : filteredBlogs.length === 0 ? (
          <p style={styles.loadingText}>No blogs found.</p>
        ) : (
          <div style={styles.blogFeed}>
            {filteredBlogs.map((blog, index) => (
              <div
                key={index}
                style={styles.blogCard}
                onDoubleClick={() => handleHeartClick(blog.id)}
              >
                {/* User Info */}
                <div style={styles.blogHeader}>
                  <div style={styles.avatar}>
                    {blog.username ? blog.username.charAt(0).toUpperCase() : "U"}
                  </div>
                  <span style={styles.username}>
                    {blog.username || "Unknown User"}
                  </span>
                </div>

                {/* Blog Image */}
                {blog.image && (
                  <img
                    src={`data:image/jpeg;base64,${blog.image}`}
                    alt="Blog"
                    style={styles.blogImage}
                  />
                )}

                {/* Blog Details */}
                <div style={styles.blogDetails}>
                  <h3 style={styles.blogTitle}>{blog.title}</h3>
                  <p style={styles.blogDescription}>{blog.description}</p>
                  <div style={styles.icons}>
                    <FaHeart
                      style={{
                        ...styles.icon,
                        color: likedPosts.includes(blog.id) ? "red" : "#8e8e8e",
                        transform: animateHeart === blog.id ? "scale(1.5)" : "scale(1)",
                        transition: "transform 0.2s ease-in-out",
                        animation: animateHeart === blog.id ? "heartBlink 0.5s ease-in-out" : "none",
                      }}
                      onClick={() => handleHeartClick(blog.id)}
                    />
                    <FaDownload
                      style={styles.icon}
                      onClick={() => downloadImage(blog.image, blog.title)}
                    />
                  </div>
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
  viewBlogs: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fafafa",
    minHeight: "100vh",
    padding: 0,
    display: "flex",
    flexDirection: "column",
  },

  /* Navbar (Fixed) */
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#FFFEFA",
    color: "#333",
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

  searchContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
  },

  searchInput: {
    width: "300px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },

  searchIcon: {
    fontSize: "20px",
    color: "#007bff",
    marginLeft: "10px",
    cursor: "pointer",
  },

  blogContainer: {
    marginTop: "80px",
    padding: "20px",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  blogFeed: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },

  blogCard: {
    backgroundColor: "white",
    border: "1px solid #e6e6e6",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "600px",
    paddingBottom: "20px",
  },

  blogHeader: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#FFFFFF",
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
  username: {
    fontWeight: "bold",
    color: "#333",
    marginLeft: "10px",
  },

  blogImage: {
    width: "100%",
    height: "auto",
    maxHeight: "400px",
    objectFit: "cover",
  },


  blogDetails: {
    padding: "10px 15px",
  },

  blogTitle: {
    margin: "0 0 10px",
    fontWeight: "bold",
    color: "#007bff",
  },

  blogDescription: {
    margin: "0 0 20px",
    color: "#555",
  },

  icons: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },

  icon: {
    fontSize: "20px",
    cursor: "pointer",
  },
};

export default ViewBlogs;
