import { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";
import { getAllFavouriteTodoAPI } from "../service/todoAPI";

function Favorate() {
  const [todos, setTodos] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  //FETCHING ALL TODOS
  const getAllFavouriteTodo = async () => {
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (token) {
      const reqHeader = {
        Authorization: token,
      };
      try {
        setLoading(true);
        const result = await getAllFavouriteTodoAPI(user.id, reqHeader);
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
    getAllFavouriteTodo();
  }, []);
  
  return (
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
  );
}

export default Favorate;
