import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import profile from "../../../assets/images/profile.jpg"

const Profile = () => {
  return (
    <Box sx={{bgcolor:"#ccc", width:"25vw" , display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
      <Avatar src={profile} sx={{width:"200px", height:"200px"}}/>
      <Typography variant='h4' sx={{textTransform:"uppercase" ,color:"primary.light"}}>Nakul Saini</Typography>
      <Typography variant='subtitle1'>UI FrontEnd Developer</Typography>
      <Typography variant='body2'>Nakul.saini404@gmail.com</Typography>
    </Box>
  )
}

export default Profile