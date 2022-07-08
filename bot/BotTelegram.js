require("dotenv").config();
const { Telegraf } = require("telegraf");
const {
  getAllCoin,
} = require("../controller/CoinController/CoinController.js");
const id = process.env.ES_CHAT_ID;

async function botTelegram() {
  try {
    let coin = [];
    let data;
    const res = await getAllCoin();

    await res.map((res) => {
      coin.push({
        name: res.name,
        marketPriceHight: res.maximumDifference.marketPriceHight,
        marketPriceLow: res.maximumDifference.marketPriceLow,
        maximumDifference: parseFloat(
          res.maximumDifference.percentageMarketDiffLow.slice(1, -1)
        ),
      });
    });

    data = [...coin];
    data.sort((a, b) => {
      return b.maximumDifference - a.maximumDifference;
    });

    const bot = new Telegraf(process.env.TOKEN_TELEGRAM_API);

    await bot.telegram.sendMessage(
      id,
      `*top 1*` +
        "```" +
        `**${data[0].name}**` +
        "```" +
        `${data[0].marketPriceHight}` +
        ">" +
        `${data[0].marketPriceLow}` +
        "```" +
        `+${data[0].maximumDifference}%` +
        "```",
      { parse_mode: "Markdown" }
    );

    await bot.telegram.sendMessage(
        id,
        `*top 2*` +
          "```" +
          `**${data[1].name}**` +
          "```" +
          `${data[1].marketPriceHight}` +
          ">" +
          `${data[1].marketPriceLow}` +
          "```" +
          `+${data[1].maximumDifference}%` +
          "```",
        { parse_mode: "Markdown" }
      );

      await bot.telegram.sendMessage(
        id,
        `*top 3*` +
          "```" +
          `**${data[0].name}**` +
          "```" +
          `${data[0].marketPriceHight}` +
          ">" +
          `${data[0].marketPriceLow}` +
          "```" +
          `+${data[0].maximumDifference}%` +
          "```",
        { parse_mode: "Markdown" }
      );

  } catch (error) {
    console.log(error);
  }
}

module.exports = { botTelegram };
