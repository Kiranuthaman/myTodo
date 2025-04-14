import TodoCard from "../components/TodoCard";
import "../style/Gird.scss"; // We'll add styling here

const OnGoing = () => {
  return (
    <div className="on-going-wrapper">
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    
    </div>
  );
};

export default OnGoing;
