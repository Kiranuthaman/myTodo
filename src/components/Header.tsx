import React, { useEffect, useState } from "react";
import "../style/Header.scss";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";
import moment from "moment";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState<string>(
    moment().format("DD MMMM YYYY, hh:mm:ss A")
  );

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format("DD MMMM YYYY, hh:mm:ss A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header-container">
      <div className="welcome-note">
        <h2>My Todo</h2>
      </div>
      <div className="header-actions">
        <p className="live-time">{currentTime}</p>
        <button onClick={handleLogout} className="header-button">
          <span>Logout</span>
          <MdLogout size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
