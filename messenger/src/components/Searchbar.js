import React from "react";
import "../components/sidebar.css";
const Searchbar = () => {
  return (
    <div className="sidebar">
      <div className="navbar">
        <div className="user">
          <div
            className="search"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="searchform"
              style={{
                width: "300px",
                height: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                type="text"
                placeholder="Search Chats"
                style={{
                  flex: 1,
                  border: "none",
                  width: "300px",
                  color: "black",
                  height: "40px",
                  outline: "none",
                  paddingLeft: "6px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  borderRadius: "4px",
                  transition: "box-shadow 0.3s ease",
                }}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
