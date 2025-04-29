import { Paper } from '@mui/material'
import React from 'react'
import SideBar from './SideBar/Index.jsx'
import ChatBox from './MainChat/Index.jsx'
import Profile from './Profile/Index.jsx'

const Chat = () => {
  return (
    <>
    <Paper square elevation={0} sx={{ display:"flex"}}>
        <SideBar/>
        <ChatBox/> 
        <Profile/>
    </Paper>
    
    </>
  )
}

export default Chat