import { useState } from 'react'
import './App.css'
import Chat from './Components/Chat/index'
import Login from './Components/LoginPage/Login'
import Register from './Components/RegistrationPage/Register'
import SideBar from './Components/Chat/SideBar/Index'
import ChatBox from "./Components/Chat/MainChat/Index"
import Profile from './Components/Chat/Profile/Index'
import MainProfile from './Components/SmallScreen/MainProfile'
import MainChat from './Components/SmallScreen/MainChat'
import {  Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/app" element={<Chat />} />
    <Route path="/SideBar" element={<SideBar />} />
    <Route path="/ChatBox" element={<ChatBox />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/MainChat" element={<MainChat />} />
    <Route path="/MainProfile" element={<MainProfile />} />
  </Routes>
  </>
  )
}

export default App
