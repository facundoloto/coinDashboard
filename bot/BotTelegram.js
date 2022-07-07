require('dotenv').config();
const { Telegraf } = require('telegraf');
const { getAllCoin } = require("../controller/CoinController/CoinController.js");
const id = process.env.ES_CHAT_ID;

async function botTelegram() {
    try {
        let coin = [];
        let data;
        const res = await getAllCoin();

        await res.map((res) => {
            coin.push({
                name: res.name
                , data: res.data
                , maximumDifference: parseFloat(res.maximumDifference.percentageMarketDiffLow.slice(1, -1))
            }
            )
        })

        data = [...coin];
        data.sort((a, b) => { return b.maximumDifference - a.maximumDifference })

        const bot = new Telegraf(process.env.TOKEN_TELEGRAM_API);
        bot.telegram.sendMessage(id, `top-1-${data[0].name}-${data[0].maximumDifference}%` + "top-2" + `-${data[1].name}-${data[1].maximumDifference}%` + "top-3" + `-${data[2].name}-${data[2].maximumDifference}%`);
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = { botTelegram };
