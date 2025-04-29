import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import ChatArea from './ChatArea'
import Footer from './Footer'

const ChatBox = () => {
  return (
    <Box sx={{width:"50vw"
    ,flexDirection:"column",height:"100vh", display:{xs:"none", md:"flex"}}}>
      <Header/>
      <ChatArea />
      <Footer/>
    </Box>
  )
}

export default ChatBox