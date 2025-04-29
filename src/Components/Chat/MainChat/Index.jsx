import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import ChatArea from './ChatArea'
import Footer from './Footer'

const ChatBox = () => {
  return (
    <Box sx={{width:"50vw", display:"flex",flexDirection:"column",height:"100vh"}}>
      <Header/>
      <ChatArea/>
      <Footer/>
    </Box>
  )
}

export default ChatBox