const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const { getAllCoin } = require("./controller/CoinController/CoinController.js");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//websockets
const socketIO = require("socket.io")(http, {
  origins: ["http://localhost:3000"],
});

socketIO.on("connection", (socket) => {
  let data;

  console.log(`user connected: ${socket.id}`);

  interval = setInterval(async () => {
  data = await getAllCoin(); //get data from api
    socket.emit("getAllCoins", data); //send data to client in realtime each 5 seconds
  }, 5000);

  socket.on("disconnect", () => {
    console.log("El usuario se ha desconectado");
  });

});

//routes
app.get("/", getAllCoin); //it's to get all coins only one time beacuse after we'll send data with socket.io

module.exports = app;
