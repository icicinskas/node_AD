const socket = require("socket.io");
const generateTickets = require("./generateTickets");
const generateMoviesList = require("./generateMovieList");

const tickets = generateTickets();
const movies = generateMoviesList();
const users = [];

const helpers = {
  getUser: (socketId) => {
    const result = users.find((x) => x.id === socketId);
    return result.user;
  },
  emitSeatsToOnlineUsers: (io) => {
    users.map((x) => {
      io.to(x.id).emit("tickets", tickets);
    });
  },
};

module.exports = (http) => {
  const io = socket(http, { cors: { origin: "http://localhost:3000" } });

  io.on("connect", (socket) => {
    socket.on("login", (user) => {
      console.log(user);
      const newUser = {
        user,
        id: socket.id,
      };
      users.push(newUser);

      socket.emit("movies", movies);
      socket.emit("tickets", tickets);
    });

    socket.on("reserve", (data) => {
      const user = helpers.getUser(socket.id);
      const { seatsIndex: seat } = data;

      tickets[seat].reserved = user.username;
      helpers.emitSeatsToOnlineUsers(io);
    });
  });
};
