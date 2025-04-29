import React from "react";
import Header from "./Header";
import { Box, Tab, Tabs } from "@mui/material";
import Person4Icon from "@mui/icons-material/Person4";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
const SideBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{width:"25vw",display:"flex", flexDirection:"column", height:"100vh"}}>
      <Header />
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant="fullWidth"
      >
        <Tab icon={<ChatBubbleIcon />} iconPosition="start" label="Chat List" />
        <Tab icon={<Person4Icon />} iconPosition="start" label="User" />
      </Tabs>
      {value === 0 && (
        <List sx={{p:0, overflowY:"auto",flex:"1 0 0"}}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Nakul Saini"
              secondary={
                <Typography variant="caption">FrontEnd Developer</Typography>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Nakul Saini"
              secondary={
                <Typography variant="caption">FrontEnd Developer</Typography>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Nakul Saini"
              secondary={
                <Typography variant="caption">FrontEnd Developer</Typography>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Nakul Saini"
              secondary={
                <Typography variant="caption">FrontEnd Developer</Typography>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Nakul Saini"
              secondary={
                <Typography variant="caption">FrontEnd Developer</Typography>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Nakul Saini"
              secondary={
                <Typography variant="caption">FrontEnd Developer</Typography>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Nakul Saini"
              secondary={
                <Typography variant="caption">FrontEnd Developer</Typography>
              }
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nakul Saini"
          secondary={
          
              <Typography
                variant="caption"
              >
               FrontEnd Developer
              </Typography>
          }
        />
      </ListItem>
      <Divider component="li" />
 
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nakul Saini"
          secondary={
          
              <Typography
                variant="caption"
              >
               FrontEnd Developer
              </Typography>
          }
        />
      </ListItem>
      <Divider component="li" />
 
        </List>
      )}
      {value === 1 && <div>1</div>}
    </Box>
  );
};

export default SideBar;
