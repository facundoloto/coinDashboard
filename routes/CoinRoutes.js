const express = require('express');
const router = express.Router();
const {getAllCoin} = require('../controller/CoinController/CoinControllerSockets.js');

/* GET users listing. */
router.get('/',getAllCoin);
module.exports = router;
