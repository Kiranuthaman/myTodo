import { FaTasks, FaCheckCircle, FaHourglassHalf, FaBars, FaTimes } from "react-icons/fa";
import "../style/Sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import { ImProfile } from "react-icons/im";
import { HiHeart } from "react-icons/hi";
import React, { useContext, useEffect, useState } from "react";
import {
  getAllCompletedTodoAPI,
  getAllFavouriteTodoAPI,
  getAllOngoingTodoAPI,
  getAllTodoAPI,
} from "../service/todoAPI";
import {
  createTodoResponseContext,
  updateTodoResponseContext,
} from "../contexts/responses/todo/ResponseShare";
import { MdLogout } from "react-icons/md";

const Sidebar: React.FC = () => {
  const context = useContext(createTodoResponseContext);
  const { createTodoResponse } = context;
  const context2 = useContext(updateTodoResponseContext);
  const { updateTodoResponse } = context2;

  const token = JSON.parse(localStorage.getItem("token") || "{}");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [allCounts, setAllCounts] = useState<any>({
    allTodo: 0,
    completedTodo: 0,
    favouriteTodo: 0,
    ongoingTodo: 0,
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const fetchAllCounts = async () => {
    if (token) {
      const reqHeader = { Authorization: token };
      try {
        const [allTodoResult, allCompletedTodoResult, allFavouriteTodoResult, allOngoingTodoResult] = await Promise.all([
          getAllTodoAPI(user.id, reqHeader),
          getAllCompletedTodoAPI(user.id, reqHeader),
          getAllFavouriteTodoAPI(user.id, reqHeader),
          getAllOngoingTodoAPI(user.id, reqHeader),
        ]);

        if (
          allTodoResult.status === 200 &&
          allCompletedTodoResult.status === 200 &&
          allFavouriteTodoResult.status === 200 &&
          allOngoingTodoResult.status === 200
        ) {
          setAllCounts({
            allTodo: allTodoResult.data.length,
            completedTodo: allCompletedTodoResult.data.length,
            favouriteTodo: allFavouriteTodoResult.data.length,
            ongoingTodo: allOngoingTodoResult.data.length,
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };


  useEffect(() => {
    fetchAllCounts();
  }, [createTodoResponse, updateTodoResponse]);

  return (
    <>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h1>
            Hi, <span style={{ color: "#0f65c7" }}>{user?.fname}</span>
          </h1>
        </div>

        <div className="task-stats">
          <Link to={"/dashboard"} className="link-dec" onClick={() => setIsSidebarOpen(false)}>
            <div className="stat-item">
              <div className="stat-icon pending"><FaHourglassHalf size={18} /></div>
              <div className="stat-info">
                <span className="stat-label">On Going</span>
                <span className="stat-value">{allCounts?.ongoingTodo}</span>
              </div>
            </div>
          </Link>

          <Link to={"alltasks"} className="link-dec" onClick={() => setIsSidebarOpen(false)}>
            <div className="stat-item">
              <div className="stat-icon all"><FaTasks size={18} /></div>
              <div className="stat-info">
                <span className="stat-label">All Tasks</span>
                <span className="stat-value">{allCounts?.allTodo}</span>
              </div>
            </div>
          </Link>

          <Link to={"completed"} className="link-dec" onClick={() => setIsSidebarOpen(false)}>
            <div className="stat-item">
              <div className="stat-icon completed"><FaCheckCircle size={18} /></div>
              <div className="stat-info">
                <span className="stat-label">Completed</span>
                <span className="stat-value">{allCounts?.completedTodo}</span>
              </div>
            </div>
          </Link>

          <Link to={"favorate"} className="link-dec" onClick={() => setIsSidebarOpen(false)}>
            <div className="stat-item">
              <div className="stat-icon favorate"><HiHeart size={18} /></div>
              <div className="stat-info">
                <span className="stat-label">Favorate</span>
                <span className="stat-value">{allCounts?.favouriteTodo}</span>
              </div>
            </div>
          </Link>

          <Link to={"Profile"} className="link-dec" onClick={() => setIsSidebarOpen(false)}>
            <div className="stat-item">
              <div className="stat-icon profile"><ImProfile size={18} /></div>
              <div className="stat-info">
                <span className="stat-label">Profile</span>
              </div>
            </div>
          </Link>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          <span>Logout</span>
          <MdLogout size={22} />
        </button>
      </div>
    </>
  );
};

export default Sidebar;
