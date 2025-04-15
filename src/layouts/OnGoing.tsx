import TodoCard from "../components/TodoCard";
import TodoForm from "../components/UI/TodoForm";
import { createTodoResponseContext, updateTodoResponseContext } from "../contexts/responses/todo/ResponseShare";
import { getAllOngoingTodoAPI } from "../service/todoAPI";
import "../style/Gird.scss"; // We'll add styling here
import React, { useContext, useEffect, useState } from "react";

const OnGoing: React.FC = () => {
  // CONTEXTS
  const context = useContext(createTodoResponseContext);
  const { createTodoResponse } = context;
  const context2 = useContext(updateTodoResponseContext);
  const { updateTodoResponse } = context2;

  const [todos, setTodos] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  //FETCHING ALL TODOS
  const getAllOngoingTodo = async () => {
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (token) {
      const reqHeader = {
        Authorization: token,
      };
      try {
        setLoading(true);
        const result = await getAllOngoingTodoAPI(user.id, reqHeader);
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
    getAllOngoingTodo();
  }, [createTodoResponse,updateTodoResponse]);

  return (
    <>
      <TodoForm />

      <div className="on-going-wrapper">
        {loading ? (
          <div>Loading...</div>
        ) : todos.length > 0 ? (
          todos.map((todo: any, index: number) => (
            <TodoCard key={index} todo={todo} />
          ))
        ) : (
          <div>No todos found</div>
        )}
      </div>
    </>
  );
};

export default OnGoing;
