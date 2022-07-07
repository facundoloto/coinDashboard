const axios = require("axios");
const { OK, INTERNAL_SERVER_ERROR } = require("../../constants/httpCodes");
const { maximumDifferenceGeko } = require("./MaximumDifferenceGeko.js");
const { searchCoinApiGeko } = require("./SearchCoinApiGeko");

const getAllCoinGeko = async () => {
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

    const data = [
      {
        name: "aave",
        coins: await searchCoinApiGeko(aave.data.tickers),
        maximumDifference: await maximumDifferenceGeko(aave.data.tickers),
      },
       {
        name: "klay",
        coins: await searchCoinApiGeko(klay.data.tickers),
        maximumDifference: await maximumDifferenceGeko(aave.data.tickers),
      },
      {
        name: "maker",
        coins: await searchCoinApiGeko(maker.data.tickers),
        maximumDifference: await maximumDifferenceGeko1(aave.data.tickers),
      },
  ];

    return data;
  } catch (error) {
    console.log(error);
  }
};

async function getAllCoinGekoHttp(req, res) {
  try {
    const data = await getAllCoinGeko();
    res.status(OK).send(data);
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).send({
      msg: "there is an error with the server,try later",
    });
  }
}
module.exports = { getAllCoinGekoHttp };
