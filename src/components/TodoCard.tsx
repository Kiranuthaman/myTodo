import { useEffect, useState } from "react";
import "../style/TodoCard.scss";
import { HiHeart } from "react-icons/hi";
import { BiTrash } from "react-icons/bi";
import React from 'react';
import moment from 'moment';

interface Props {
  todo?: any;
}



const TodoCard: React.FC<Props> = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleStatus = () => {
    setIsCompleted((prev) => !prev);
  };

  useEffect(()=>{
    if (todo?.status == "ongoing") {
      setIsCompleted(false)
    }else if (todo?.status == "completed") {
      setIsCompleted(true)
    }
  },[todo])

  return (
    <div className={`todo-card ${isCompleted ? "completed" : "ongoing"}`}>
      <div className="todo-header">
        <h2 className="todo-title">{todo?.title}</h2>
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
        {todo?.content}
      </p>
      <p className="todo-status">{isCompleted ? "Completed" : "Pending"}</p>
      <p style={{fontSize:"0.8rem"}}>Created : {moment(todo?.createdAt).format("DD MMMM YYYY hh:mmA")}</p>
    </div>
  );
};

export default TodoCard;
