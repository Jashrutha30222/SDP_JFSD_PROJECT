import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FeedbackView = () => {
  const [feedbacks, setFeedbacks] = useState([]); // List of all feedbacks
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const feedbacksPerPage = 4; // Number of feedbacks to show per page
  const navigate = useNavigate();

  // Fetch all feedbacks from the backend
  const fetchAllFeedbacks = async () => {
    try {
      const response = await axios.get("http://localhost:8081/getfeedback"); // Update URL as per backend
      setFeedbacks(response.data);
    } catch (error) {
      console.error("Error fetching feedbacks!", error);
      alert("Failed to fetch feedbacks. Please try again.");
    }
  };

  // Fetch all feedbacks on component mount
  useEffect(() => {
    fetchAllFeedbacks();
  }, []);

  // Handle pagination click
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the feedbacks to display for the current page
  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstFeedback, indexOfLastFeedback);

  // Handle Send Mail button click
  const handleSendMail = async (email, feedbackId) => {
    if (window.confirm(`Are you sure you want to send a response to ${email}?`)) {
      try {
        const response = await axios.get(`http://localhost:8081/email/send`, {
          params: { email }, // Pass the email as a query parameter
        });
        if (response.status === 200) {
          alert(`Email successfully sent to ${email}`);
          // Update the feedback to set sent to true
          const updatedFeedbacks = feedbacks.map((feedback) => 
            feedback.id === feedbackId ? { ...feedback, sent: true } : feedback
          );
          setFeedbacks(updatedFeedbacks);
        } else {
          alert(`Failed to send email to ${email}`);
        }
      } catch (error) {
        console.error(`Error sending email to ${email}:`, error);
        alert("An error occurred while sending the email. Please try again.");
      }
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Feedback View</h2>

      {/* Display all feedbacks in a table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          border: "3px solid #4CAF50", // Thick border for the table
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <thead style={{ backgroundColor: "#4CAF50", color: "white" }}>
          <tr>
            <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Email</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Rating</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Comments</th>
            <th style={{ padding: "12px", textAlign: "center" }}>Response</th>
           
          </tr>
        </thead>
        <tbody>
          {currentFeedbacks.map((feedback) => (
            <tr key={feedback.email} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "12px" }}>{feedback.name}</td>
              <td style={{ padding: "12px" }}>{feedback.email}</td>
              <td style={{ padding: "12px" }}>{feedback.rating}</td>
              <td style={{ padding: "12px" }}>{feedback.comments}</td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                <button
                  onClick={() => handleSendMail(feedback.email, feedback.id)}
                  style={{
                    padding: "8px 16px",
                    backgroundColor: feedback.sent ? "#ddd" : "#FF6347",
                    color: "white",
                    border: "none",
                    cursor: feedback.sent ? "not-allowed" : "pointer",
                    borderRadius: "5px",
                  }}
                  disabled={feedback.sent}
                >
                  {feedback.sent ? "Already Sent" : "Send Mail"}
                </button>
              </td>
              <td style={{ padding: "12px", textAlign: "center" }}>
                {feedback.sent}
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
          disabled={currentPage * feedbacksPerPage >= feedbacks.length}
          style={{
            padding: "12px 20px",
            cursor: currentPage * feedbacksPerPage >= feedbacks.length ? "not-allowed" : "pointer",
            borderRadius: "8px",
            border: "1px solid #4CAF50",
            backgroundColor: currentPage * feedbacksPerPage >= feedbacks.length ? "#ddd" : "#4CAF50",
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          Next
        </button>
      </div>

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

export default FeedbackView;
