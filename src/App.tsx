import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import AllTodo from './layouts/AllTodo'
import OnGoing from './layouts/OnGoing'
import Completed from './layouts/Completed'
import UserProfie from './layouts/UserProfie'
import Favorate from './layouts/Favorate'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/register" element={<Auth register = {true}/>} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<OnGoing />} />
          <Route index path='alltasks' element={<AllTodo />} />
          <Route path="completed" element={<Completed />} />
          <Route path="favorate" element={<Favorate />} />
          <Route path="profile" element={<UserProfie />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
