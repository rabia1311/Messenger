import React from "react";
import "../components/sidebar.css";
const Searchbar = () => {
  return (
    <div className="sidebar">
      <div className="navbar">
        <div className="user">
          <div className="search">
            <div className="searchform">
              <input type="text" placeholder="Search Chats" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
