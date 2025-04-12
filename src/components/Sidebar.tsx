import React from 'react';
import { FaTasks, FaCheckCircle, FaHourglassHalf, FaCog } from 'react-icons/fa';
import '../style/Sidebar.scss';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <h1>Hi Kiran</h1>
      </div>

      {/* Task Stats */}
      <div className="task-stats">
        <div className="stat-item">
          <div className="stat-icon all">
            <FaTasks size={18} />
          </div>
          <div className="stat-info">
            <span className="stat-label">All Tasks</span>
            <span className="stat-value">24</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon completed">
            <FaCheckCircle size={18} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Completed</span>
            <span className="stat-value">12</span>
          </div>
        </div>

        <div className="stat-item">
          <div className="stat-icon pending">
            <FaHourglassHalf size={18} />
          </div>
          <div className="stat-info">
            <span className="stat-label">Pending</span>
            <span className="stat-value">12</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <button className="settings-button">
          <FaCog />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
