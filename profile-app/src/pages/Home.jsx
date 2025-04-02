import React, { useState, useEffect } from "react";
import ProfileList from "../components/ProfileList";
import ProfileMap from "../components/ProfileMap";
import { profiles as initialProfiles } from "../data/profiles";
import "./Home.css"; 

const Home = () => {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  useEffect(() => {
    console.log("Fetching profiles...");

    let isMounted = true;
    
    setTimeout(() => {
      if (isMounted) {
        if (initialProfiles?.length > 0) {
          console.log("Profiles loaded:", initialProfiles);
          setProfiles(initialProfiles);
          setFilteredProfiles(initialProfiles);
        } else {
          setError("Failed to load profiles.");
        }
        setLoading(false);
      }
    }, 1000);

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    applyFilters(term, filterLocation);
  };

  const handleFilter = (location) => {
    setFilterLocation(location);
    applyFilters(searchTerm, location);
  };

  const applyFilters = (term, location) => {
    let filtered = profiles;

    if (term) {
      filtered = filtered.filter((profile) =>
        profile.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter((profile) => profile.location.name === location);
    }

    setFilteredProfiles(filtered);
  };

  const handleCloseMap = () => {
    setSelectedProfile(null);
  };

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  if (error) {
    return <h2 className="error">{error}</h2>;
  }

  return (
    <div>
      {filteredProfiles.length > 0 ? (
        <ProfileList 
          profiles={filteredProfiles} 
          onViewLocation={setSelectedProfile} 
          onSearch={handleSearch} 
          onFilter={handleFilter} 
        />
      ) : (
        <h2 className="error">No profiles found.</h2>
      )}

      {selectedProfile && selectedProfile.location && (
        <div className="map-container">
          <button className="close-map-btn" onClick={handleCloseMap}>✖</button>
          <ProfileMap location={selectedProfile.location} />
        </div>
      )}
    </div>
  );
};

export default Home;
