const axios = require("axios");
const { OK, INTERNAL_SERVER_ERROR } = require("../../constants/httpCodes");
const { searchCoin } = require("./SearchCoin.js");

const getAllCoin = async () => {
  const host = "http://api.coincap.io/v2/markets?baseId=";
  const config = {
    headers: {
      Authorization: "Bearer " + "ddc4d486-638c-436f-b5a8-e6fc4a5040a4",
    },
  };

  try {
    //coinApi
    const aave = await axios.get(host + "aave", config);
    const maker = await axios.get(host + "maker", config);
    const grt = await axios(host + "the-graph", config);
    const kusama = await axios(host + "kusama", config);
    const zilliqa = await axios(host + "zilliqa", config);
    const waves = await axios(host + "waves", config);
    const neo = await axios(host + "neo", config);
    const fantom = await axios(host + "fantom", config);
    const quant = await axios(host + "quant", config);
    const dash = await axios(host + "dash", config);

    const data = [
      {
        name: "aave",
        data: await searchCoin(aave),
      },
      {
        name: "maker",
        data: await searchCoin(maker),
      },
      {
        name: "the-graph",
        data: await searchCoin(grt),
      },
      {
        name: "kusama",
        data: await searchCoin(kusama),
      },
      {
        name: "zilliqa",
        data: await searchCoin(zilliqa),
      },
      {
        name: "waves",
        coins: await searchCoin(waves),
      },
      {
        name: "neo",
        data: await searchCoin(neo),
      },
      {
        name: "fantom",
        data: await searchCoin(fantom),
      },
      {
        name: "quant",
        data: await searchCoin(quant),
      },
      {
        name: "dash",
        data: await searchCoin(dash),
      },
    ];

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

async function getAllCoinHttp(req, res) {
  try {
    const data = await getAllCoin();
    res.status(OK).send(data);
  } catch (error) {
    console.log(error);
    res
      .status(INTERNAL_SERVER_ERROR)
      .send({ msg: "there is an error with the server,try later" });
  }
}

module.exports = { getAllCoinHttp };
