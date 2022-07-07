//Calculate the percentage difference between the highest and lowest price
//agregar 
function maxDiff(num1, num2) {
  let stepOne = (num1 / num2) * 100;
  let stepTwo = stepOne - 100;
  let result = "+" + stepTwo + "%";
  return result;
}

async function maximumDifference(coins) {
  let coin = [];
  let percentageMaxDiff;
  let maxPrice;
  let minPrice;

  if (coins.data.data.length > 0) {
    await coins.data.data.map(function (coins) {
      //Filter coins in different markets and targets in usdt

      if (coins.exchangeId === "binance" && coins.quoteSymbol === "USDT") {
        coin.push({
          market: coins.exchangeId,
          price: coins.priceUsd,
        });
      }

      if (coins.exchangeId === "kucoin" && coins.quoteSymbol === "USDT") {
        coin.push({
          market: coins.exchangeId,
          price: coins.priceUsd,
        });
      }

      if (coins.exchangeId === "gate" && coins.quoteSymbol === "USDT") {
        coin.push({
          market: coins.exchangeId+"IO",
          price: coins.priceUsd,
        });
      }
    });
    maxPrice = [...coin]; //copy the array
    minPrice = [...coin];
    maxPrice.sort((a, b) => b.price - a.price);
    minPrice.sort((a, b) => a.price - b.price);
    
    percentageMaxDiff={
      marketPriceHight: maxPrice[0].market,
      marketPriceMedium: maxPrice[1].market,
      marketPriceLow: minPrice[0].market,
      percentageMarketDiffLow: maxDiff(maxPrice[0].price, minPrice[0].price),
      percentageMarketDiffMedium: maxDiff(maxPrice[0].price, maxPrice[1].price),
    };
  }

  return percentageMaxDiff;
}

module.exports = { maximumDifference };
