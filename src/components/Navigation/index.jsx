import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const Navigation = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Lakukan pencarian atau tindakan lainnya dengan query
  };

  return (
    <div className="flex flex-row h-20">
      <div className="flex-none my-auto">
        <Logo />
      </div>
      <div className="flex-1 my-auto">
        <Navbar />
      </div>
      <div className="flex-end my-auto">
        <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default Navigation;
