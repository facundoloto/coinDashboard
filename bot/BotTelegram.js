require('dotenv').config();
const {Telegraf } = require('telegraf');
const id = process.env.ES_CHAT_ID;
async function botTelegram() {
    try {
        const bot = new Telegraf(process.env.TOKEN_TELEGRAM_API);
        bot.telegram.sendMessage(id,"gol");
    }
    catch (error) {
        console.log(error);
    }
};

module.exports = { botTelegram };
