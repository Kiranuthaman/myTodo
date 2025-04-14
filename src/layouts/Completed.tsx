import TodoCard from '../components/TodoCard'
import "../style/Gird.scss"; // We'll add styling here

const  Completed =()=> {
  return (
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

export default Completed