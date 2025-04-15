import { useEffect, useState } from "react";
import "../style/TodoCard.scss";
import { HiHeart } from "react-icons/hi";
import { BiTrash } from "react-icons/bi";
import React from "react";
import moment from "moment";
import {
  deleteTodoAPI,
  updateIsFavouriteAPI,
  updateTodoStatusAPI,
} from "../service/todoAPI";

interface Props {
  todo?: any;
}

const TodoCard: React.FC<Props> = ({ todo }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFavourite, setIsFavourite] = useState(todo?.isFavourite);
  const token = JSON.parse(localStorage.getItem("token") || "{}");

  const toggleStatus = async () => {
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    const id = todo?.id;

    if (token) {
      const reqHeader = {
        Authorization: token,
      };

      let reqBody = { data: "" };

      if (todo?.status === "ongoing") {
        reqBody.data = "completed";
      } else if (todo?.status === "completed") {
        reqBody.data = "ongoing";
      }

      try {
        await updateTodoStatusAPI(id, reqBody, reqHeader);
      } catch (error) {
        console.error(error);
      } finally {
        setIsCompleted((prev) => !prev);
      }
    }
  };

  const toggleFavourite = async () => {
    if (token) {
      const reqHeader = {
        Authorization: token,
      };
      let reqBody = { data: "" };

      if (todo?.isFavourite) {
        reqBody.data = "false";
      } else if (!todo?.isFavourite) {
        reqBody.data = "true";
      }
      try {
        await updateIsFavouriteAPI(todo?.id, reqBody, reqHeader);
      } catch (error) {
        console.error("MARK AS FAVOURITE ERROR :", error);
      } finally {
        setIsFavourite((prev: any) => !prev);
      }
    }
  };

  const handleDeleteTodo = async () => {
    if (token) {
      const reqHeader = {
        Authorization: token,
      };
      try {
        const result = await deleteTodoAPI(todo?.id, reqHeader);
        if (result.status == 200) {
          alert("Todo Deleted !");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (todo?.status == "ongoing") {
      setIsCompleted(false);
    } else if (todo?.status == "completed") {
      setIsCompleted(true);
    }
  }, [todo]);

  return (
    <div className={`todo-card ${isCompleted ? "completed" : "ongoing"}`}>
      <div className="todo-header">
        <h2 className="todo-title">{todo?.title}</h2>
        <button className="status-toggle" onClick={toggleStatus}>
          {isCompleted ? "✓" : ""}
        </button>
        <button className="favourite-toggle" onClick={toggleFavourite}>
          <HiHeart color={isFavourite ? "red" : "gray"} />
        </button>
        <button onClick={handleDeleteTodo} className="delete-btn">
          <BiTrash />
        </button>
      </div>
      <p className="todo-description">{todo?.content}</p>
      <p className="todo-status">{isCompleted ? "Completed" : "Pending"}</p>
      <p style={{ fontSize: "0.8rem" }}>
        Created : {moment(todo?.createdAt).format("DD MMMM YYYY hh:mmA")}
      </p>
    </div>
  );
};

export default TodoCard;
