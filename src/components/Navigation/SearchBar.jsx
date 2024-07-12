import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
        className="border border-gray-300 p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <button
        onClick={handleSearch}
        className="bg-transparent border border-red-500 text-red-500 p-2 rounded-r-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
