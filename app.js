const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const { getAllCoinHttp } = require("./controller/CoinController/CoinControllerHttp.js");
const { getAllCoin } = require("./controller/CoinController/CoinControllerSockets.js");
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

  console.log(`user connected: ${socket.id}`);

  let data;
  interval = setInterval(async () => {
    data = await getAllCoin();
    socket.emit("getAllCoins", data); //control this to get data from api and send to client
  }, 30000); //get data each 30 seconds 

  socket.on("disconnect", () => {
    console.log("El usuario se ha desconectado");
  });

});

//routes
app.get("/", getAllCoinHttp); //it's to get all coins only one time beacuse after we'll send data with socket.io

module.exports = app;
