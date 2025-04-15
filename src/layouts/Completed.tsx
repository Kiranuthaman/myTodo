import TodoCard from "../components/TodoCard";
import { getAllCompletedTodoAPI } from "../service/todoAPI";
import "../style/Gird.scss"; // We'll add styling here
import React, { useEffect, useState } from "react";

const Completed: React.FC = () => {
  const [todos, setTodos] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  //FETCHING ALL TODOS
  const getAllCompletedTodo = async () => {
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (token) {
      const reqHeader = {
        Authorization: token,
      };
      try {
        setLoading(true);
        const result = await getAllCompletedTodoAPI(user.id, reqHeader);
        if (result.status === 200) {
          setTodos(result.data);
        } else {
          alert("Failed to fetch todos");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getAllCompletedTodo();
  }, []);

  
  return (
    <div className="on-going-wrapper">
      {loading ? (
        <div>Loading...</div>
      ) : todos.length > 0 ? (
        todos.map((todo:any, index:number) => <TodoCard key={index} todo={todo} />)
      ) : (
        <div>No todos found</div>
      )}
    </div>
  );
};

export default Completed;
