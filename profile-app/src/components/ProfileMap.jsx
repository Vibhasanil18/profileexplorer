import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./ProfileMap.css";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const ProfileMap = ({ location, onClose }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (!location?.lat || !location?.lng) {
      setError("Invalid location data. Cannot load map.");
    }
  }, [location]);

  if (loadError) return <p className="error">Error loading maps.</p>;
  if (!isLoaded) return <p className="loading">Loading map...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✖</button>
        
        <GoogleMap mapContainerStyle={mapContainerStyle} center={location} zoom={12}>
          <Marker position={location} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default ProfileMap;
