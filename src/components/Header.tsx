import React from 'react';
import '../style/Header.scss';
import { IoMdContact } from 'react-icons/io';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="welcome-note">
        <h2>My Todo</h2>
      </div>
      <div className="header-actions">
        <div className="profile-icon">
        <IoMdContact size={48} />       
         </div>
        <button className="header-button">
          <span>Sign Out</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
