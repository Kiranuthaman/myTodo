import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "../style/Dashboard.scss";
import TodoForm from "../components/UI/TodoForm";
import SearchForm from "../components/UI/SearchForm";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <div className="buttons-container">
            <TodoForm />
            <SearchForm />
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
