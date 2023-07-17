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
                  color: "whitesmoke",
                  height: "40px",
                  outline: "none",
                  paddingLeft: "6px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
