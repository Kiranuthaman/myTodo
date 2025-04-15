import { FaTasks, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";
import "../style/Sidebar.scss";
import { Link } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { HiHeart } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import {
  getAllCompletedTodoAPI,
  getAllFavouriteTodoAPI,
  getAllOngoingTodoAPI,
  getAllTodoAPI,
} from "../service/todoAPI";

const Sidebar: React.FC = () => {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [allCounts,setAllCounts] = useState<any>({
    allTodo: 0,
    completedTodo: 0,
    favouriteTodo: 0,
    ongoingTodo: 0
  })
  //FETCH ALL COUNTS
  const fetchAllCounts = async () => {
    if (token) {
      const reqHeader = {
        Authorization: token,
      };
      try {
        const allTodoResult = await getAllTodoAPI(user.id, reqHeader);
       
        const allCompletedTodoResult = await getAllCompletedTodoAPI(
          user.id,
          reqHeader
        );
        const allFavouriteTodoResult = await getAllFavouriteTodoAPI(
          user.id,
          reqHeader
        );
        const allOngoingTodoResult = await getAllOngoingTodoAPI(user.id, reqHeader);

        if (allTodoResult.status && allCompletedTodoResult.status && allFavouriteTodoResult.status && allOngoingTodoResult.status == 200 ) {
          setAllCounts({
            allTodo: allTodoResult.data.length,
            completedTodo: allCompletedTodoResult.data.length,
            favouriteTodo: allFavouriteTodoResult.data.length,
            ongoingTodo: allOngoingTodoResult.data.length
          })
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchAllCounts();
  }, []);

  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <h1>
          Hi, <span style={{color:"#0f65c7"}}>{user?.fname}</span>
        </h1>
      </div>

      {/* Task Stats */}
      <div className="task-stats">
        <Link to={"/dashboard"} className="link-dec">
          <div className="stat-item">
            <div className="stat-icon pending">
              <FaHourglassHalf size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">On Going</span>
              <span className="stat-value">{allCounts?.ongoingTodo}</span>
            </div>
          </div>
        </Link>

        <Link to={"alltasks"} className="link-dec">
          <div className="stat-item">
            <div className="stat-icon all">
              <FaTasks size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">All Tasks</span>
              <span className="stat-value">{allCounts?.allTodo}</span>
            </div>
          </div>
        </Link>

        <Link to={"completed"} className="link-dec">
          <div className="stat-item">
            <div className="stat-icon completed">
              <FaCheckCircle size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Completed</span>
              <span className="stat-value">{allCounts?.completedTodo}</span>
            </div>
          </div>
        </Link>
        <Link to={"favorate"} className="link-dec">
          <div className="stat-item">
            <div className="stat-icon favorate">
              <HiHeart size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Favorate</span>
              <span className="stat-value">{allCounts?.favouriteTodo}</span>
            </div>
          </div>
        </Link>

        <Link to={"Profile"} className="link-dec">
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
