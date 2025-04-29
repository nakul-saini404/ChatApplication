import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import DifferenceIcon from '@mui/icons-material/Difference';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MicIcon from '@mui/icons-material/Mic';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  return (
    <Box  sx={{p:2 ,display:'flex'}}>
        <Box sx={{display:"flex", alignItems:"center"}}>
        <Button sx={{minWidth:"auto" }}>
        <TagFacesIcon />
        </Button>
        <Button sx={{minWidth:"auto" }}>
        <DifferenceIcon />
        </Button>
        <Button sx={{minWidth:"auto"}}>
        < VideoCallIcon />
        </Button>
        <Button sx={{minWidth:"auto"}}>
        <MicIcon />
        </Button>
        <Button sx={{minWidth:"auto" }}>
        <AddToQueueIcon/>
        </Button>
        </Box>
        <Box sx={{display:"flex",flex:"1"}}>
            <TextField placeholder='Type Your Message' size='small'fullWidth/>
            <Button sx={{minWidth:"auto" }}> <SendIcon /></Button>
        </Box>
    </Box>
  )
}

export default Footer