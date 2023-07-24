import React from "react";
import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import "../Pages/form.css";
const Homepage = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="home-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === "signup" ? "active" : ""}`}
          onClick={() => handleTabChange("signup")}
        >
          Signup
        </div>
        <div
          className={`tab ${activeTab === "login" ? "active" : ""}`}
          onClick={() => handleTabChange("login")}
        >
          Login
        </div>
      </div>
      {activeTab === "signup" ? <Signup /> : <Login />}
    </div>
  );
};

export default Homepage;
