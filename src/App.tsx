import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import AllTodo from "./layouts/AllTodo";
import OnGoing from "./layouts/OnGoing";
import Completed from "./layouts/Completed";
import UserProfie from "./layouts/UserProfie";
import Favorate from "./layouts/Favorate";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Auth />} />
          <Route path="/register" element={<Auth register={true} />} />
        </Route>

        {/* Protected Routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route element={<Dashboard />}>
            <Route index element={<OnGoing />} />
            <Route path="alltasks" element={<AllTodo />} />
            <Route path="completed" element={<Completed />} />
            <Route path="favorate" element={<Favorate />} />
            <Route path="profile" element={<UserProfie />} />
          </Route>
        </Route>

        {/* Catch-All */}
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
