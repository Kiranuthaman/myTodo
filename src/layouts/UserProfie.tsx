import "../style/Profile.scss";
import React, { useEffect, useState } from "react";
import { getAllTodoAPI } from "../service/todoAPI";
import DeleteProfile from "../components/UI/DeleteProfile";
import { FaTrash } from "react-icons/fa";
import { removeUserAPI } from "../service/userAPI";
import { useNavigate } from "react-router-dom";

interface Todo {
  id: string;
  title: string;
  status: "ongoing" | "completed";
}

const UserProfile: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const getAllTodo = async () => {
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (token) {
      const reqHeader = {
        Authorization: token,
      };
      try {
        const result = await getAllTodoAPI(user.id, reqHeader);
        if (result.status === 200) {
          setTodos(result.data);
        } else {
          alert("Failed to fetch todos");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    getAllTodo();
  }, []);

  // number of tasks
  const totalTasks = todos.length;
  const ongoingTasks = todos.filter((todo) => todo.status == "ongoing").length;
  const completedTasks = todos.filter(
    (todo) => todo.status == "completed"
  ).length;

  // personal details
  const data = JSON.parse(localStorage.getItem("user") || "{}");
  const fullName = `${data.fname || ""} ${data.mname || ""} ${
    data.lname || ""
  }`.trim();
  const firstLetter = `${data.fname?.[0] || ""}${
    data.lname?.[0] || ""
  }`.toUpperCase();

  const handleDelete = async () => {
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    if (token) {
      const reqHeader = {
        Authorization: token,
      };
      try {
        const result = await removeUserAPI(data?.id, reqHeader);
        if (result.status === 200) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/");
        } else{
          alert("Failed to delete account !");
        }
      } catch (error) {
        console.error("ERROR IN ACCOUNT DELETE :", error);
      }
    }
    console.log("Account permanently deleted");
    setShowModal(false);
  };

  return (
    <div className="page-wrapper">
      <div className="profile-container">
        <div className="profile-header">
          <div className="header-content">
            <div className="user-info">
              <div className="avatar">
                <span className="initials">{firstLetter}</span>
              </div>
              <div className="details">
                <h1 className="name">{fullName}</h1>
                <p className="email">{data.email}</p>
              </div>
            </div>
            <button className="settings-btn" onClick={() => setShowModal(true)}>
              <FaTrash style={{ color: "#3b82f6" }} size={18} />
            </button>
            <DeleteProfile
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              onDelete={handleDelete}
            />
          </div>
        </div>

        {todos.length === 0 ? (
          <p className="loading">No tasks...</p>
        ) : (
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{totalTasks}</div>
              <div className="stat-label">Total Tasks</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{ongoingTasks}</div>
              <div className="stat-label">Ongoing Tasks</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{completedTasks}</div>
              <div className="stat-label">Completed Tasks</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
