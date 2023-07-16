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
          <div className="userchat-container">
            <img
              className="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCdNmtztTKaA5i1KqIOpcWm4tT57g9FHsgYWJCCkMaqQgptbctIp_miL7xaIASSW_rFmM&usqp=CAU"
              alt="User"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            />
            <div className="userchatinfo">
              <span>Townsend Seary</span>
              <hr className="divider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
