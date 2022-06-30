const axios = require("axios");
const {searchCoin} = require("./SearchCoin.js");

const getAllCoin = async () => {

  try {
    const aave = await axios(
      `https://api.coingecko.com/api/v3/coins/aave/tickers`
    );
    const klay = await axios(
      `https://api.coingecko.com/api/v3/coins/klay-token/tickers`
    );
    const maker = await axios(
      `https://api.coingecko.com/api/v3/coins/maker/tickers`
    );
    
    /*
    const grt = await axios(`https://api.coingecko.com/api/v3/coins/the-graph/tickers`);
    /*
    const echash = await axios(`https://api.coingecko.com/api/v3/coins/ecash/tickers`);
    const zilliqa = await axios(`https://api.coingecko.com/api/v3/coins/zilliqa/tickers`);
    const gsm = await axios(`https://api.coingecko.com/api/v3/coins/gsmcoin/tickers`);
    
    const gala = await axios(`https://api.coingecko.com/api/v3/coins/gala/tickers`);
    const stepn = await axios(`https://api.coingecko.com/api/v3/coins/stepn/tickers`);
    const rune = await axios(`https://api.coingecko.com/api/v3/coins/thorchain/tickers`);
     */

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
      /*
      klay:{
        binance:,
        kucoin:,
        gateIo:,
        },
      maker:{
        binance:,
        kucoin:,
        gateIo:,
        }
      /*
      echash: echash.data.tickers,
      zilliqa: zilliqa.data.tickers,
      gsm: gsm.tickers,
      /*
      gala: gala.tickers,
      stepn: stepn.tickers,
      rune: rune.tickers,
      */
    };

    console.log(data);//when the back-end will be finish you will need deleted it.
     //if there's an error with code 1015 or similar, it's because the api is down for do many requests
    return data;

  } catch (error) {
    console.log(error);
  }

};

module.exports = { getAllCoin };
