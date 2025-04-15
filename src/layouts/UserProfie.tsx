import { CiSettings } from 'react-icons/ci'
import '../style/Profile.scss'
import React from 'react';


const  UserProfie:React.FC = ()=> {
  return (
    <div className="page-wrapper">
    <div className="profile-container">
      <div className="profile-header">
        <div className="header-content">
          <div className="user-info">
            <div className="avatar">
              <span className="initials">KU</span>
            </div>
            <div className="details">
              <h1 className="name">kiran@123</h1>
              <p className="email">kiran@gmail.com</p>
            </div>
          </div>
          <button  className="settings-btn" >
            <CiSettings size={30} className="icon " />
          </button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">5</div>
          <div className="stat-label">Total Tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">3</div>
          <div className="stat-label">Ongoing Tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">4</div>
          <div className="stat-label">Completed Tasks</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserProfie