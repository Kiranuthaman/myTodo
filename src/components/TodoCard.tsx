import { useState } from "react";
import "../style/TodoCard.scss";
import { HiHeart } from "react-icons/hi";
import { BiTrash } from "react-icons/bi";
import React from 'react';


const TodoCard:React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleStatus = () => {
    setIsCompleted((prev) => !prev);
  };

  return (
    <div className={`todo-card ${isCompleted ? "completed" : "ongoing"}`}>
      <div className="todo-header">
        <h2 className="todo-title">Work</h2>
        <button className="status-toggle" onClick={toggleStatus}>
          {isCompleted ? "✓" : ""}
        </button>
        <button className="favotate-toggle">
           <HiHeart/>
        </button>
        <button className="delete-btn">
           <BiTrash/>
        </button>
      </div>
      <p className="todo-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam facilis praesentium laboriosam aliquid ipsam nobis unde eveniet iure nam?
      </p>
      <p className="todo-status">{isCompleted ? "Completed" : "Pending"}</p>
    </div>
  );
};

export default TodoCard;
