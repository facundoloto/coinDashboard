async function searchCoin(coins) { //search coin in array and return the price of each market
    let coin = [];

    if (coins.data.data.length > 0) {
    await coins.data.data.map(function (coins) {

        //Filter coins in different markets and targets in usdt
      if (coins.exchangeId === "Binance" && coins.quoteSymbol === "USDT") {
        coin.push({
          market: "binance",
          price: coins.priceUsd,
        });
      }
  
      if (coins.exchangeId=== "Kucoin"  && coins.quoteSymbol === "USDT") {
        coin.push({
          market: "kucoin",
          price: coins.priceUsd,
        });
      }
  
      if (coins.exchangeId === "Gate" && coins.quoteSymbol === "USDT") {
        coin.push({
          market: "gate.io",
          price: coins.priceUsd,
        });
      }
      
    }
  
    );
    }

    return coin;
    
  };

module.exports = { searchCoin };