import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";



const Header = () => {
  const navigate = useNavigate();
  return (
    <>
     <Card sx={{ bgcolor:"primary.light", borderRadius:"0",color:"primary.contrastText" }}>
      <CardHeader
        avatar={
          <Avatar onClick={() => navigate("/Profile")}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" sx={{color:"primary.contrastText" }}>
            <MoreVertIcon />
          </IconButton>
        }
        title="Nakul Saini"
        subheader={
            <Typography variant='caption'>
                UI FrontEnd Developer
            </Typography>
        }
      />
      
      </Card>
    </>
  )
}

export default Header