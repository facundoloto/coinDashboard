const express = require("express");
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const { getAllCoinHttp } = require("./controller/CoinController/CoinController.js");
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//routes
app.get("/", getAllCoinHttp); //it's to get all coins only one time beacuse after we'll send data with socket.io

module.exports = app;
