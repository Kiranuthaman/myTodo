import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import AllTodo from './pages/AllTodo'
import OnGoing from './pages/OnGoing'
import Completed from './pages/Completed'
import Profile from './pages/Profile'

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
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>

    </>
  )
}

export default App
