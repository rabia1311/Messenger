import React from "react";
import { FaHome, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <button>
            <FaHome />
          </button>
        </li>
        <li>
          <button>
            <FaUser />
          </button>
        </li>
        <li>
          <button>
            <FaCog />
          </button>
        </li>
        <li>
          <button>
            <FaSignOutAlt />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
