import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";  
import Admin from "./pages/Admin";  
import ProfileDetails from "./pages/ProfileDetails";  
import NotFound from "./pages/NotFound";  
import "./App.css";

const Navbar = () => {
  const navigate = useNavigate();  // Hook for navigation

  return (
    <nav className="navbar">
      {/* Clickable "Profile Explorer" → Redirects to Home */}
      <h1 className="logo" onClick={() => navigate("/")}>Profile Explorer</h1>  
      
      <div className="nav-links">
        <button onClick={() => navigate("/", { replace: true })}>Home</button>  
        <button onClick={() => navigate("/admin")}>Admin Panel</button>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> {/* Extracted Navbar */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
