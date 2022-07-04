const axios = require("axios");
const { searchCoin } = require("./SearchCoin.js");
const { searchCoinApiGeko } = require("./SearchCoinApiGeko.js");

const getAllCoin = async () => {

  try {
    /*
    //coin geko
    //coin geko api has date of each exchange you can see in SearchCoinApiGeko.js
    const aave = await axios(
      `https://api.coingecko.com/api/v3/coins/aave/tickers`
    );
    const klay = await axios(
      `https://api.coingecko.com/api/v3/coins/klay-token/tickers`
    );
    const maker = await axios(
      `https://api.coingecko.com/api/v3/coins/maker/tickers`
    );
    const grt = await axios(`https://api.coingecko.com/api/v3/coins/the-graph/tickers`);
    
    const data = {
      aave: {
        name: "aave",
        coins: await searchCoin(aave.data.tickers),
      },
      klay: {
        name: "klay",
        coins: await searchCoin(klay.data.tickers),
      },
      maker: {
        name: "maker",
       coins: await searchCoin(maker.data.tickers),
      },
      
      grt:{
        name: "the graph",
        coins: await searchCoinApiGeko(grt.data.tickers),
        },
      };
      */

    //coinApi
    const host = "http://api.coincap.io/";
    const config = {
      headers: {
        'Authorization': 'Bearer ' + "ddc4d486-638c-436f-b5a8-e6fc4a5040a4"
      }
    };

    const aave = await axios.get(host + "v2/assets/aave/markets", config);
    const maker = await axios.get(host + "v2/assets/maker/markets", config);
    const grt = await axios(host + "v2/assets/the-graph/markets", config);
    const echash = await axios(host + "v2/assets/ecash/markets", config);
    const zilliqa = await axios(host + "v2/assets/zilliqa/markets", config);
    const gala = await axios(host + "v2/assets/gala/markets", config);

    const data = {
      aave: {
        name: "aave",
        data: await searchCoin(aave),
        date: aave.data.timestamp, //the route where get the data don't have a date of each exchange only it has a timestamp
      },
      maker: {
        name: "maker",
        data: await searchCoin(maker),
        date: aave.data.timestamp,
      },
      grt: {
        name: "the-graph",
        data: await searchCoin(grt),
        date: aave.data.timestamp,
      },
      echash: {
        name: "echash",
        data: await searchCoin(echash),
        date: aave.data.timestamp,
      },
      zil: {
        name: "zilliqa",
        data: await searchCoin(zilliqa),
        date: aave.data.timestamp,
      },
      gala: {
        name: "gala",
        coins: await searchCoin(gala),
        date: aave.data.timestamp,
      },
    };
   
    return data;

  } catch (error) {
    console.log(error);
  }

};

module.exports = { getAllCoin };
