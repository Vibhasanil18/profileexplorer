import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { profiles } from "../data/profiles";
import "./ProfileDetails.css";

const ProfileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const foundProfile = profiles.find((p) => p.id === id);
    setProfile(foundProfile || false);
  }, [id]);

  if (profile === null) return <h2 className="loading">Loading...</h2>;
  if (profile === false) return <h2 className="error">Profile Not Found</h2>;

  return (
    <div className="profile-details-card">
      <div className="profile-image-container">
        <img src={profile.photo} alt={profile.name} className="profile-image" />
      </div>
      <div className="profile-info">
        <h2>{profile.name}</h2>
        <p>{profile.description}</p>
        <p>
          <strong>Location:</strong> {profile.location.city}, {profile.location.country}
        </p>
        <button onClick={() => navigate("/")} className="back-button">
          ⬅ Back to Profiles
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
