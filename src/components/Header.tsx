import React from 'react';
import '../style/Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="welcome-note">
        <h2>My Todo</h2>
      </div>
      <div className="header-actions">
        <button className="header-button">
          <span>Sign Out</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
