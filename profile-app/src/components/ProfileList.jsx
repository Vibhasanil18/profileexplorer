import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import ProfileMap from "./ProfileMap";
import SearchFilter from "./SearchFilter"; 
import "./ProfileList.css";

const ProfileList = ({ profiles }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const handleViewLocation = (profile) => {
    if (!profile.location || !profile.location.lat || !profile.location.lng) {
      setError("Invalid location data.");
      return;
    }
    setError(null);
    setLoading(true);
    setTimeout(() => {
      setSelectedLocation(profile.location);
      setLoading(false);
    }, 1000);
  };

  // Filtering profiles based on search and location
  const filteredProfiles = profiles.filter((profile) => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filterLocation ? profile.location.name === filterLocation : true;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="profile-list-container">
      {/* Integrated Search and Filter Component */}
      <SearchFilter onSearch={setSearchTerm} onFilter={setFilterLocation} />

      <div className="profile-list">
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} onViewLocation={handleViewLocation} />
          ))
        ) : (
          <div className="no-results">No profiles found.</div>
        )}
      </div>

      {loading && <div className="loading">Loading map...</div>}
      {error && <div className="error">{error}</div>}
      {selectedLocation && <ProfileMap location={selectedLocation} onClose={() => setSelectedLocation(null)} />}
    </div>
  );
};

export default ProfileList;