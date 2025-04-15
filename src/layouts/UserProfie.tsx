import { CiSettings } from 'react-icons/ci';
import '../style/Profile.scss';
import React, { useEffect, useState } from 'react';
import { getAllTodoAPI } from '../service/todoAPI';

interface Todo {
  id: string;
  title: string;
  status: 'ongoing' | 'completed';
}

const UserProfile: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

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
  console.log(todos);


  useEffect(() => {
    getAllTodo();
  }, []);
// number of tasks
  const totalTasks = todos.length;
  const ongoingTasks = todos.filter(todo => todo.status == 'ongoing').length;
  const completedTasks = todos.filter(todo => todo.status == 'completed').length;

  // personal details
  const data = JSON.parse(localStorage.getItem("user") || "{}");
  const fullName = `${data.fname || ''} ${data.mname || ''} ${data.lname || ''}`.trim();

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
                <h1 className="name">{fullName}</h1>
                <p className="email">kiran@gmail.com</p>
              </div>
            </div>
            <button className="settings-btn">
              <CiSettings size={30} className="icon" />
            </button>
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
