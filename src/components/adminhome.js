import React from "react";

const AdminHome = () => {
  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <h1 style={styles.title}>Welcome, Admin</h1>
        <p style={styles.subtitle}>Manage and oversee your platform with ease.</p>
      </div>

      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Manage Blogs</h2>
          <p style={styles.cardDescription}>
            Add, update, or delete blog posts and keep your content fresh.
          </p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Analytics</h2>
          <p style={styles.cardDescription}>
            View performance insights and make data-driven decisions.
          </p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>User Management</h2>
          <p style={styles.cardDescription}>
            Oversee user activity and manage access permissions.
          </p>
        </div>
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Admin Dashboard | © {new Date().getFullYear()} Your Company
        </p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #ece9e6, #ffffff)",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
  },
  headerSection: {
    textAlign: "center",
    marginTop: "50px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: "18px",
    color: "#666",
    marginTop: "10px",
  },
  cardsContainer: {
    display: "flex",
    gap: "20px",
    marginTop: "40px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "300px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f7f7f7",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2c3e50",
  },
  cardDescription: {
    fontSize: "16px",
    color: "#7f8c8d",
    marginTop: "10px",
  },
  footer: {
    marginTop: "50px",
    textAlign: "center",
    padding: "20px",
    borderTop: "1px solid #ddd",
  },
  footerText: {
    fontSize: "14px",
    color: "#999",
  },
};

export default AdminHome;
