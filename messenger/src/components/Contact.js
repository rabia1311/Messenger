import React from "react";
import "../components/contact.css";
import dataArray from "../Data/Data";

const Contact = () => {
  const handleNameClick = (name) => {
    console.log("Clicked name:", name);
    localStorage.setItem("clickedName", name);
    window.location.reload();
  };

  return (
    <div className="chats">
      {dataArray.map((data, index) => (
        <div className="userchat-container" key={index}>
          <img
            className="img"
            src={data.image}
            alt="User"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          />

          <div className="userchatinfo">
            <span onClick={() => handleNameClick(data.name)}>{data.name}</span>
            <p>Whats up? How are you?</p>
            <hr className="divider" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
