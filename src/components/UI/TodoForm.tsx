import React, { useState } from "react";
import { BiPlusCircle, BiX } from "react-icons/bi";
import "../style/TodoForm.scss";
import { createTodoAPI } from "../../service/todoAPI";

interface Todo {
  title: string;
  content: string;
}

const TodoForm = () => {
  const [todo, setTodo] = useState<Todo>({ title: "", content: "" });
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = ()=>{
    setIsOpen(false);
    setTodo({ title: "", content: "" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = JSON.parse(localStorage.getItem("token") || "{}");
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (token) {
      const reqHeader = {
        Authorization: token,
      };
      const reqBody = {
        data: {
          creatorId: user.id,
          title: todo.title,
          content: todo.content,
        },
        entity: "todo",
      };
      try {
        const result = await createTodoAPI(reqBody, reqHeader);
        if (result.status === 201) {
          alert("Todo Created !");
        } else {
          alert(result.response.data.error);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setTodo({ title: "", content: "" });
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      <button className="open-modal-btn" onClick={() => setIsOpen(true)}>
        <BiPlusCircle size={24} />
        Create Todo
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={() => handleClose()}>
              <BiX size={35} />
            </button>

            <form className="todo-form" onSubmit={handleSubmit}>
              <h2 className="form-content">
                <BiPlusCircle className="icon" />
                Create New Todo
              </h2>

              <div className="form-group">
                <label htmlFor="title">title</label>
                <input
                  type="text"
                  id="title"
                  value={todo.title}
                  onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                  placeholder="Enter todo title"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="content">content</label>
                <input
                  type="text"
                  id="content"
                  value={todo.content}
                  onChange={(e) =>
                    setTodo({ ...todo, content: e.target.value })
                  }
                  placeholder="Enter todo content"
                  required
                />
              </div>
              <button className="submit-button">Save</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoForm;
