import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Create a separate CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="go-home">Go to Home</Link>
    </div>
  );
};

export default NotFound;
