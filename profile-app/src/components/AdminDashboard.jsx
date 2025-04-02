import React, { useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = ({ profiles, setProfiles }) => {
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    description: "",
    lat: "",
    lng: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedProfiles = profiles.map((profile, index) =>
        index === editIndex ? { ...profile, ...formData } : profile
      );
      setProfiles(updatedProfiles);
      setEditIndex(null);
    } else {
      const newProfile = { id: Date.now().toString(), ...formData };
      setProfiles([...profiles, newProfile]);
    }

    setFormData({ name: "", photo: "", description: "", lat: "", lng: "" });
  };

  const handleEdit = (index) => {
    const profile = profiles[index];
    setFormData(profile);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
  };

  return (
    <div className="admin-dashboard">
      <h3>Manage Profiles</h3>

      <form onSubmit={handleSubmit} className="admin-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="text" name="photo" placeholder="Photo URL" value={formData.photo} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="lat" placeholder="Latitude" value={formData.lat} onChange={handleChange} required />
        <input type="text" name="lng" placeholder="Longitude" value={formData.lng} onChange={handleChange} required />
        <button type="submit">{editIndex !== null ? "Update Profile" : "Add Profile"}</button>
      </form>

      <div className="profile-list">
        {profiles.map((profile, index) => (
          <div key={profile.id} className="profile-item">
            <img src={profile.photo} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
