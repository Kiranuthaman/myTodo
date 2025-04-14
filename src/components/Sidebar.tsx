import { FaTasks, FaCheckCircle, FaHourglassHalf } from 'react-icons/fa';
import '../style/Sidebar.scss';
import { Link } from 'react-router-dom';
import { ImProfile } from 'react-icons/im';
import { FcHeatMap } from 'react-icons/fc';
import { HiHeart } from 'react-icons/hi';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <h1>Hi Kiran</h1>
      </div>

      {/* Task Stats */}
      <div className="task-stats" >
        
        <Link to={'/dashboard'} className='link-dec'>
          <div className="stat-item">
            <div className="stat-icon pending">
              <FaHourglassHalf size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">On Going</span>
              <span className="stat-value">12</span>
            </div>
          </div>
        </Link>

        <Link to={'alltasks'} className='link-dec'>
          <div className="stat-item">
            <div className="stat-icon all">
              <FaTasks size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">All Tasks</span>
              <span className="stat-value">24</span>
            </div>
          </div>
        </Link>

        <Link to={'completed'} className='link-dec'>
          <div className="stat-item">
            <div className="stat-icon completed">
              <FaCheckCircle size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Completed</span>
              <span className="stat-value">12</span>
            </div>
          </div>
        </Link>
        <Link to={'favorate'} className='link-dec'>
          <div className="stat-item">
            <div className="stat-icon favorate">
              <HiHeart size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Favorate</span>
              <span className="stat-value">12</span>
            </div>
          </div>
        </Link>

        <Link to={'Profile'} className='link-dec'>
          <div className="stat-item">
            <div className="stat-icon profile">
              <ImProfile size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Profile</span>
            </div>
          </div>
        </Link>

       
      </div>
    </div>
  );
};

export default Sidebar;
