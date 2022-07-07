function maxDiff(num1, num2) {
  let stepOne = (num1 / num2) * 100;
  let stepTwo = stepOne - 100;
  let result = "+" + stepTwo + "%";
  return result;
}

async function maximumDifferenceGeko(coins) {
  let coin = [];
  let percentageMaxDiff;
  let maxPrice;
  let minPrice;

  await coins.map(function (tickers) {

    if (tickers.market.name === "Binance" && tickers.target === "USDT") {
      coin.push({
        market: "binance",
        price: tickers.last,
      });
    }

    if (tickers.market.name === "KuCoin" && tickers.target === "USDT") {
      coin.push({
        market: "kucoin",
        price: tickers.last,
      });
    }

    if (tickers.market.name === "Gate.io" && tickers.target === "USDT") {
      coin.push({
        market: "gate.io",
        price: tickers.last,
      });
    }

  });

  maxPrice = [...coin]; //copy the array
  minPrice = [...coin];
  maxPrice.sort((a, b) => b.price - a.price);
  minPrice.sort((a, b) => a.price - b.price);

  percentageMaxDiff = {
    marketPriceHight: maxPrice[0].market,
    marketPriceMedium: maxPrice[1].market,
    marketPriceLow: minPrice[0].market,
    percentageMarketDiffLow: maxDiff(maxPrice[0].price, minPrice[0].price),
    percentageMarketDiffMedium: maxDiff(maxPrice[0].price, maxPrice[1].price),
  };

  return percentageMaxDiff;
}

module.exports = { maximumDifferenceGeko };
