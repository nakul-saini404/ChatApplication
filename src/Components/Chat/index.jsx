import { Paper } from '@mui/material'
import React, { useEffect } from 'react'
import SideBar from './SideBar/Index.jsx'
import ChatBox from './MainChat/Index.jsx'
import Profile from './Profile/Index.jsx'
import socket from './socket.js'

const Chat = () => {
  useEffect(()=>{
    console.log(socket);
  },[socket])
  return (
    <>
    <Paper square elevation={0} sx={{ display:"flex"}}>
        <SideBar/>
        <ChatBox /> 
        <Profile/>
    </Paper>
    
    </>
  )
}

export default Chat