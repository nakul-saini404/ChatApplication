import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ReplyIcon from '@mui/icons-material/Reply';

const ChatArea = () => {
  return (
    <Box sx={{ flex: "1 0 0", background: "#c2d6b9", overflowY: "auto" }}>
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
  );
};

export default ChatArea;
