import TodoCard from "../components/TodoCard";
import TodoForm from "../components/UI/TodoForm";
import "../style/Gird.scss"; // We'll add styling here
import React from 'react';

const OnGoing:React.FC = () => {
  return (
    <>
          <TodoForm/>

    <div className="on-going-wrapper">
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    
    </div>
    </>
  );
};

export default OnGoing;
