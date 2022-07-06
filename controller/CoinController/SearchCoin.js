
function maxDiff(num1, num2) { //Calculate the percentage difference between the highest and lowest price
  let stepOne = (num1 / num2) * 100;
  let stepTwo = stepOne - 100;
  let result = "+" + stepTwo + "%";
  return result;
}

async function searchCoin(coins) {
  let coin = [];
  let maxPrice;
  let minPrice;

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
          market: coins.exchangeId,
          price: coins.priceUsd,
          date: coins.updated,
        });
      }

    });
  }

  maxPrice = [...coin];//copy the array
  minPrice = [...coin];
  maxPrice.sort((a, b) => b.price - a.price);
  minPrice.sort((a, b) => a.price - b.price);

  coin.push({
    marketPriceHight: maxPrice[0].market,
    marketPriceLow: minPrice[0].market,
    percentageMaxDiff: maxDiff(maxPrice[0].price, minPrice[0].price),
  })

  return coin;
}

module.exports = { searchCoin };