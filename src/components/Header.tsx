import React from "react";
import "../style/Header.scss";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    }
  };

  return (
    <header className="header-container">
      <div className="welcome-note">
        <h2>My Todo</h2>
      </div>
      <div className="header-actions">
        <button onClick={handleLogout} className="header-button">
          <span>Logout</span><MdLogout size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
