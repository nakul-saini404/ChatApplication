import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import {  Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import TagFacesIcon from '@mui/icons-material/TagFaces';
import DifferenceIcon from '@mui/icons-material/Difference';
import MicIcon from '@mui/icons-material/Mic';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SendIcon from '@mui/icons-material/Send';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import Avatar from "@mui/material/Avatar";
import {
    Box,
    Button,
    Chip,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Stack,
    TextField
  } from "@mui/material";
import React from 'react'
import { useNavigate } from "react-router-dom";


const MainChat = () => {
    const navigate = useNavigate();
  return (
    <div>
         <Paper square elevation={0} sx={{ display:"flex"}}>
         <Box sx={{width:"100%"
    ,flexDirection:"column",height:"100vh", display:{xs:"none", md:"flex"}}}>
      <Box>
      <Card sx={{ borderRadius: "0" }} elevation={0}>
      <CardHeader
          avatar={
            <>
              {" "}
              <Button sx={{minWidth:"auto", mr:2}}>
                <ArrowBackIcon onClick={() => navigate("/SideBar")} />
              </Button>
              <Avatar>R</Avatar>
            </>
          }
          action={
            <>
              <IconButton>
                <VideoCallIcon />
              </IconButton>
              <IconButton>
                <CallIcon />
              </IconButton>
            </>
          }
          title="KP"
          subheader={
            <Typography variant="caption">UI FrontEnd Developer</Typography>
          }
        />
      </Card>
      </Box>
      <Box sx={{ flex: "1 0 0", background: "#c2d6b9", overflowY: "auto" , }}>
      <Stack direction="row" justifyContent="center" sx={{py:2, position:"sticky", top:"0",zIndex:2,background:"#c2d6b9"}}>
        <Chip label="Today" />
      </Stack>
      <List sx={{ p: 0, overflowY: "auto", flex: "1 0 0" }}>
        <ListItem alignItems="flex-start" sx={{mb:2}}>
            <Box sx={{display:"flex",width:"80%"}}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <Paper sx={{width:"100%", p:1.5}}>
          <ListItemText
          sx={{m:0}}
            primary="Nakul Saini"
            secondary={
              <Typography variant="caption">FrontEnd Developer
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus, beatae totam minus rem aliquid blanditiis quibusdam earum at? Ipsum!</Typography>
            }
          />
          <Box mt={1} sx={{display: "flex",justifyContent:"space-between", alignItems:"center"}}>
            <Typography variant="body2"> 12.30 PM</Typography>
            <Box>
            <IconButton size="small">
                < ReplyIcon fontSize="small" />
              </IconButton>
              <IconButton  size="small" color="error">
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          </Paper>
          </Box>
        </ListItem>
        <ListItem sx={{flexDirection:"row-reverse" ,mb:2}} >
            <Box sx={{display:"flex",width:"80%" ,flexDirection:"row-reverse"}}>
          <ListItemAvatar
          sx={{
            display:"flex", flexDirection:"row-reverse"
          }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <Paper sx={{width:"100%", p:1.5 ,bgcolor:"#ddd5d5"}}>
          <ListItemText
          sx={{m:0}}
            primary="Nakul Saini"
            secondary={
              <Typography variant="caption">FrontEnd Developer
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus, beatae totam minus rem aliquid blanditiis quibusdam earum at? Ipsum!</Typography>
            }
          />
           <Box mt={1} sx={{display: "flex",justifyContent:"space-between", alignItems:"center" ,flexDirection:"row-reverse"}}>
            <Typography variant="body2"> 12.30 PM</Typography>
            <Box>
            <IconButton size="small">
                < ReplyIcon fontSize="small" />
              </IconButton>
              <IconButton  size="small" color="error">
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          </Paper>
          
          </Box>
        </ListItem>
        <ListItem alignItems="flex-start" sx={{mb:2}}>
            <Box sx={{display:"flex",width:"80%"}}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <Paper sx={{width:"100%", p:1.5}}>
          <ListItemText
          sx={{m:0}}
            primary="Nakul Saini"
            secondary={
              <Typography variant="caption">FrontEnd Developer
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus, beatae totam minus rem aliquid blanditiis quibusdam earum at? Ipsum!</Typography>
            }
          />
          <Box mt={1} sx={{display: "flex",justifyContent:"space-between", alignItems:"center"}}>
            <Typography variant="body2"> 12.30 PM</Typography>
            <Box>
            <IconButton size="small">
                < ReplyIcon fontSize="small" />
              </IconButton>
              <IconButton  size="small" color="error">
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          </Paper>
          </Box>
        </ListItem>
        <ListItem alignItems="flex-start" sx={{mb:2}}>
            <Box sx={{display:"flex",width:"80%"}}>
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <Paper sx={{width:"100%", p:1.5}}>
          <ListItemText
          sx={{m:0}}
            primary="Nakul Saini"
            secondary={
              <Typography variant="caption">FrontEnd Developer
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus, beatae totam minus rem aliquid blanditiis quibusdam earum at? Ipsum!</Typography>
            }
          />
          <Box mt={1} sx={{display: "flex",justifyContent:"space-between", alignItems:"center"}}>
            <Typography variant="body2"> 12.30 PM</Typography>
            <Box>
            <IconButton size="small">
                < ReplyIcon fontSize="small" />
              </IconButton>
              <IconButton  size="small" color="error">
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          </Paper>
          </Box>
        </ListItem>
        <ListItem sx={{flexDirection:"row-reverse" ,mb:2}} >
            <Box sx={{display:"flex",width:"80%" ,flexDirection:"row-reverse"}}>
          <ListItemAvatar
          sx={{
            display:"flex", flexDirection:"row-reverse"
          }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <Paper sx={{width:"100%", p:1.5 ,bgcolor:"#ddd5d5"}}>
          <ListItemText
          sx={{m:0}}
            primary="Nakul Saini"
            secondary={
              <Typography variant="caption">FrontEnd Developer
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae delectus, beatae totam minus rem aliquid blanditiis quibusdam earum at? Ipsum!</Typography>
            }
          />
           <Box mt={1} sx={{display: "flex",justifyContent:"space-between", alignItems:"center" ,flexDirection:"row-reverse"}}>
            <Typography variant="body2"> 12.30 PM</Typography>
            <Box>
            <IconButton size="small">
                < ReplyIcon fontSize="small" />
              </IconButton>
              <IconButton  size="small" color="error">
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
          </Paper>
          
          </Box>
        </ListItem>
      </List>
    </Box>
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
    </Box>
    </Paper>
    </div>
  )
}

export default MainChat