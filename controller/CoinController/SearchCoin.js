async function searchCoin(coin) { //search coin in array and return the price of each market
    let coins = [];
  
    await coin.map(function (tickers) {
  
        //Filter coins in different markets and targets in usdt
      if (tickers.market.name === "Binance" && tickers.target === "USDT") {
        coins.push({
          market: "binance",
          price: tickers.last,
        });
      }
  
      if (tickers.market.name === "KuCoin"  && tickers.target === "USDT") {
        coins.push({
          market: "kucoin",
          price: tickers.last,
        });
      }
  
      if (tickers.market.name === "Gate.io" && tickers.target === "USDT") {
        coins.push({
          market: "gate.io",
          price: tickers.last,
        });
      }
      
    }
   
    );
  
    return coins;
    
  };

module.exports = { searchCoin };