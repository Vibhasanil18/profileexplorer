import React, { useState } from "react";
import "./SearchFilter.css";

const SearchFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedLocation(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <select value={selectedLocation} onChange={handleFilterChange}>
        <option value="">All Locations</option>
        <option value="New York">New York</option>
        <option value="San Francisco">San Francisco</option>
        <option value="Los Angeles">Los Angeles</option>
      </select>
    </div>
  );
};

export default SearchFilter;