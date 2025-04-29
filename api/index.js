const { log } = require("console");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors")
const app = express();
app.use(cors())
const server = createServer(app);
const io = new Server(server,{
  cors:{
    origin:"http://localhost:5173"
  }
});

io.on("connection", (socket) => {
    console.log(socket.io);
    
  });
  
  server.listen(5000, () =>{
    console.log(5000);
    
  });
  
  
