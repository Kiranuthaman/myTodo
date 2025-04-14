import TodoCard from "../components/TodoCard";
import "../style/Gird.scss"; 

const AllTodo = ()=>{
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