import React, { useState } from "react";
import AdminDashboard from "../components/AdminDashboard";
import { profiles as initialProfiles } from "../data/profiles";
import "./Admin.css"; 

const Admin = () => {
  const [profiles, setProfiles] = useState(initialProfiles);

  return (
    <div>
      
      <AdminDashboard profiles={profiles} setProfiles={setProfiles} />
    </div>
  );
};

export default Admin;
