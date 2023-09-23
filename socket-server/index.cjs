const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

//New imports
const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());
app.use(express.json());

const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5173",
  },
});

const { formatMessage, formatNotice } = require("./utils/messages.cjs");
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require("./utils/users.cjs");

//test-socket server
app.get("/api", (req, res) => {
  res.json({
    message: "Hello from Anonymous Chat!",
  });
});

// Run when client connects
socketIO.on("connection", (socket) => {
  socket.on("join-room", ({ username, room }) => {
    console.log(`socketid⚡: ${socket.id}, user :${username} just connected!`);
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit("messageChannel", formatNotice("Welcome to Anon Chat! 💬"));

    // Broadcast when a user connects
    socket.broadcast.to(user.room).emit("messageChannel", formatNotice(`${user.username} has joined the chat`));

    // Send users and room info
    socketIO.to(user.room).emit("users", getRoomUsers(user.room));
  });

  // Listen for message
  socket.on("message", async (message) => {
    const user = getCurrentUser(socket.id);
    // console.log("msg", message);
    // console.log("user", user);s
    if (user) {
      let messages = await formatMessage(user, message);
      messages.forEach((formattedMessage) => {
        socketIO.to(user.room).emit("messageChannel", formattedMessage);
      });
    }
  });

  // Listen for typing event
  socket.on("typing", (isTyping) => {
    const user = getCurrentUser(socket.id);

    if (user) {
      const users = getRoomUsers(user.room);

      users.map((u) => {
        if (u.id === user.id) {
          u.typing = isTyping;
        }
      });

      // Send users and room info
      socket.broadcast.to(user.room).emit("users", users);
    }
  });

  // Listen for forceDisconnect
  socket.on("leave", () => {
    disconnectUser(socket.id, socket);
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    disconnectUser(socket.id, socket);
  });
});

function disconnectUser(id) {
  const user = getCurrentUser(id);
  userLeave(id);
  if (user) {
    console.log(`🔥 user : ${user.username} disconnected`);
    socketIO.to(user.room).emit("messageChannel", formatNotice(`${user.username} has left the chat`));

    // Send users and room info
    socketIO.to(user.room).emit("users", getRoomUsers(user.room));
  }
}

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
