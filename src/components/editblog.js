import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const UpdateBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8081/allposts'); // Adjust the endpoint based on your backend
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Handle delete post
  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:8081/deletepost`, { params: { id: postId } }); // Delete API endpoint
      setPosts(posts.filter(post => post.id !== postId)); // Remove deleted post from state
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Manage Blog Posts</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>ID</th>
            <th style={styles.tableHeader}>Title</th>
            <th style={styles.tableHeader}>Description</th>
            <th style={styles.tableHeader}>User Email</th>
            <th style={styles.tableHeader}>Image</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} style={styles.tableRow}>
              <td style={styles.tableCell}>{post.id}</td>
              <td style={styles.tableCell}>{post.title}</td>
              <td style={styles.tableCell}>{post.description}</td>
              <td style={styles.tableCell}>{post.uemail}</td>
              <td style={styles.tableCell}>
                {post.image ? (
                  <img src={`data:image/jpeg;base64,${post.image}`} alt="Post Image" style={styles.image} />
                ) : (
                  <p>No image</p>
                )}
              </td>
              <td style={styles.tableCell}>
                
                <button
                  onClick={() => handleDelete(post.id)}
                  style={styles.deleteButton}
                >
                  <FaTrash /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  header: {
    textAlign: 'center',
    fontSize: '36px',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  tableHeader: {
    borderBottom: '2px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#f4f4f4',
    fontWeight: 'bold',
    color: '#333',
  },
  tableRow: {
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '12px',
    textAlign: 'left',
    fontSize: '14px',
    color: '#333',
  },
  image: {
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  editButton: {
    padding: '8px 16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
    marginRight: '10px',
  },
  deleteButton: {
    padding: '8px 16px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default UpdateBlog;
