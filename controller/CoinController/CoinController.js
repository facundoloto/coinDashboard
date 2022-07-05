const axios = require("axios");
const { searchCoin } = require("./SearchCoin.js");

const getAllCoin = async () => {
  const host = "http://api.coincap.io/";
  const config = {
    headers: {
      'Authorization': 'Bearer ' + "ddc4d486-638c-436f-b5a8-e6fc4a5040a4"
    }
  };

  try {
    //coinApi
    const aave = await axios.get(host + "v2/assets/aave/markets", config);
    const maker = await axios.get(host + "v2/assets/maker/markets", config);
    const grt = await axios(host + "v2/assets/the-graph/markets", config);
    const kusama = await axios(host + "v2/assets/kusama/markets", config);
    const zilliqa = await axios(host + "v2/assets/zilliqa/markets", config);
    const waves = await axios(host + "v2/assets/waves/markets", config);
    const neo = await axios(host + "v2/assets/neo/markets", config);
    const fantom = await axios(host + "v2/assets/fantom/markets", config);
    const quant = await axios(host + "v2/assets/quant/markets", config);
    const dash = await axios(host + "v2/assets/dash/markets", config);

    const data = {
      aave: {
        name: "aave",
        data: await searchCoin(aave),
        date: aave.data.timestamp, //the route where get the data don't have a date of each exchange only it has a timestamp
      },
      maker: {
        name: "maker",
        data: await searchCoin(maker),
        date: maker.data.timestamp,
      },
      grt: {
        name: "the-graph",
        data: await searchCoin(grt),
        date: grt.data.timestamp,
      },
      kusama: {
        name: "kusama",
        data: await searchCoin(kusama),
        date: kusama.data.timestamp,
      },
      zil: {
        name: "zilliqa",
        data: await searchCoin(zilliqa),
        date: zilliqa.data.timestamp,
      },
      waves: {
        name: "waves",
        coins: await searchCoin(waves),
        date: waves.data.timestamp,
      },
      neo: {
        name: "neo",
        data: await searchCoin(neo),
        date: neo.data.timestamp,
      },
      fantom: {
        name: "fantom",
        data: await searchCoin(fantom),
        date: fantom.data.timestamp,
      },
      quant: {
        name: "quant",
        data: await searchCoin(quant),
        date: quant.data.timestamp,
      },
      dash: {
        name: "dash",
        data: await searchCoin(dash),
        date: dash.data.timestamp,
      },
    };

    return data;
  } catch (error) {
    console.log(error);
  }

};

async function getAllCoinHttp(req, res) {
  try {
    const data = await getAllCoin();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(203).send({ msg: "there is an error with the server,try later" });
  }
};


module.exports = { getAllCoin, getAllCoinHttp };
