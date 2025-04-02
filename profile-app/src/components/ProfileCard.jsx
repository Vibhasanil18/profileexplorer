import React from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = ({ profile, onViewLocation }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>

      <div className="profile-actions">
        <button className="summary-btn" onClick={() => onViewLocation(profile)}>
          View Location
        </button>
        <Link to={`/profile/${profile.id}`} className="details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
