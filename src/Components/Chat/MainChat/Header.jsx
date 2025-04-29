import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const Header = () => {
  return (
    <>
      <Card sx={{ borderRadius: "0" }} elevation={0}>
        <CardHeader
          avatar={
            <>
              {" "}
              <Button sx={{minWidth:"auto", mr:2}}>
                <ArrowBackIcon />
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
    </>
  );
};

export default Header;
