const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const ACTIONS = require("./Actions");
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json());
const server = http.createServer(app);
const sendOTP = async (userEmail, userName, roomId) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "bvrit25@gmail.com",
      pass: "sftf qyxo twwd qinb",
    },
  });

  const options = {
    from: "HackMate <bvrit25@gmail.com>",
    to: userEmail,
    subject: `Join my room`,
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
    <div style="background-color: white;text-align: center;">
      <img src="https://biz.prlog.org/qualizeal/logo.png" alt="QualiZeal Logo" style="max-width: 150px;">
    </div>
    <div style="padding: 20px; background-color: #ffffff;">
      <h2 style="color: #4285f4; text-align: center; font-size: 20px; margin-bottom: 20px;">Room Invitation</h2>
      <p style="color: #333;">Hi,</p>
      <p style="color: #333;">You have been invited to join a collaborative coding room. Click the link below to join:</p>
      <p style="font-size: 18px; color: #4285f4; text-align: center; border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: fit-content; margin: 20px auto;">
        <a style="text-decoration: none; color: #4285f4;">${roomId}</a>
      </p>
      <p style="color: #333;">If you did not expect this invitation, please ignore this email.</p>
      <p style="color: #333;">Sincerely,<br />QualiZeal Team</p>
    </div>
  </div>`,
  };

  try {
    await transporter.sendMail(options);
    console.log("Invitation email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

app.post("/addUser", (req, res) => {
  const { userEmail, userName, roomId } = req.body;
  sendOTP(userEmail, userName, roomId);
});

const io = new Server(server);

const userSocketMap = {};
const getAllConnectedClients = (roomId) => {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        username: userSocketMap[socketId],
      };
    }
  );
};

io.on("connection", (socket) => {
  // console.log('Socket connected', socket.id);
  socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
    userSocketMap[socket.id] = username;
    socket.join(roomId);
    const clients = getAllConnectedClients(roomId);
    // notify that new user join
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit(ACTIONS.JOINED, {
        clients,
        username,
        socketId: socket.id,
      });
    });
  });

  // sync the code
  socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
    socket.in(roomId).emit(ACTIONS.CODE_CHANGE, { code });
  });
  // when new user join the room all the code which are there are also shows on that persons editor
  socket.on(ACTIONS.SYNC_CODE, ({ socketId, code }) => {
    io.to(socketId).emit(ACTIONS.CODE_CHANGE, { code });
  });

  // leave room
  socket.on("disconnecting", () => {
    const rooms = [...socket.rooms];
    // leave all the room
    rooms.forEach((roomId) => {
      socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
        socketId: socket.id,
        username: userSocketMap[socket.id],
      });
    });

    delete userSocketMap[socket.id];
    socket.leave();
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
