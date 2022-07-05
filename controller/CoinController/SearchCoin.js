function maxDiff (num1, num2) {
  let stepOne = num1 / num2;
  let stepTwo = stepOne * 100;
  let stepThree = stepTwo - 100;
  let result = "+"+stepThree+"%";
  return result;
}

async function searchCoin(coins) { //search coin in array and return the price of each market
    let coin = [];

    if (coins.data.data.length > 0) {
    await coins.data.data.map(function (coins) {
    let binance = 0;
    let gateIO = 0;
    let kucoin = 0;
        //Filter coins in different markets and targets in usdt
      if (coins.exchangeId === "Binance" && coins.quoteSymbol === "USDT") {
        binance = coins.price;
        coin.push({
          binance:{
          price: coins.priceUsd,
        }});
      }
  
      if (coins.exchangeId=== "Kucoin"  && coins.quoteSymbol === "USDT") {
        kucoin = coins.price;
        coin.push( {
          kukoin:{
          price: coins.priceUsd,
        }
      });
      }
  
      if (coins.exchangeId === "Gate" && coins.quoteSymbol === "USDT") {
        gateIO = coins.price;
        coin.push({
          gateIo:{
          price: coins.priceUsd,
          }
        });
      } 

      console.log(maxDiff(binance,kucoin));
    }
  
   

    );
    }

    return coin;
    
  };

module.exports = { searchCoin };