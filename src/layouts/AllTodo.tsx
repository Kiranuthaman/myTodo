import TodoCard from "../components/TodoCard";
import "../style/Gird.scss"; 
import React from 'react';


const AllTodo: React.FC = ()=>{
    return(
        <div className="on-going-wrapper">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />   
      </div>
    )
}

export default AllTodo