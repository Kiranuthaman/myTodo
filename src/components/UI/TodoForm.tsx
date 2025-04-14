import React, { useState } from 'react';
import { BiPlusCircle, BiX } from 'react-icons/bi';
import '../style/TodoForm.scss';

interface Todo {
  name: string;
  title: string;
}

const TodoForm = () => {
  const [todo, setTodo] = useState<Todo>({ name: '', title: '' });
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Todo:', todo);
    setTodo({ name: '', title: '' });
    setIsOpen(false);
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
            <button className="close-modal" onClick={() => setIsOpen(false)}>
              <BiX size={24} />
            </button>

            <form className="todo-form" onSubmit={handleSubmit}>
              <h2 className="form-title">
                <BiPlusCircle className="icon" />
                Create New Todo
              </h2>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={todo.name}
                  onChange={(e) => setTodo({ ...todo, name: e.target.value })}
                  placeholder="Enter todo name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  value={todo.title}
                  onChange={(e) => setTodo({ ...todo, title: e.target.value })}
                  placeholder="Enter todo title"
                  required
                />
              </div>

              <button className="submit-button">Create Todo</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoForm;
