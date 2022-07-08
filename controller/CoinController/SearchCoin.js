async function searchCoin(coins) {
  let coin = [];
  
  if (coins.data.data.length > 0) {
    await coins.data.data.map(function (coins) { //Filter coins in different markets and targets in usdt

      if (coins.exchangeId === "binance" && coins.quoteSymbol === "USDT") {
        coin.push({
          market: coins.exchangeId,
          price: coins.priceUsd,
          date: coins.updated,
        });
      }

      if (coins.exchangeId === "kucoin" && coins.quoteSymbol === "USDT") {
        coin.push({
          market: coins.exchangeId,
          price: coins.priceUsd,
          date: coins.updated,
        });
      }
      
      if (coins.exchangeId === "gate" && coins.quoteSymbol === "USDT") {
        coin.push({
          market: coins.exchangeId+"IO",
          price: coins.priceUsd,
          date: coins.updated,
        });
      }

    });
  }

  return coin;
}

module.exports = { searchCoin };