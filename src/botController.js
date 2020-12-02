const TelegramBot = require('node-telegram-bot-api');
const token = '1482476937:AAHo-h_-GXrzAY_NdVo5iz3jC57nlAQoMJ4';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const {text} = msg;



    if(text === "/thapnhang") {
        try {
            bot.sendMessage(chatId, 'Lên nhang cái bờ');
            bot.sendSticker(chatId, "CAACAgUAAxkBAAEBO6FfP5SIZi23PyCfCf3I12qSV2BhiwACDQADEDxyNCKYVf9jvcm-GwQ");
        } catch (e) {

        }

    }

    if(text === "/gáy") {
        // bot.sendMessage(chatId, 'Mèo méo meo mèo meo');
        bot.sendSticker(chatId, "CAACAgUAAxUAAV-3jQ2pYBItD-wFi8sIyurY8_F_AAJlAAMvJyURMBMNgGbdE-seBA");
    }

    if(text === "/emgaimua") {
        console.log(123);
        bot.getStickerSet("emgaimua").then(res => {
            let {stickers} = res;
            let idx = getRandomInt(0, stickers.length);
            bot.sendSticker(chatId, stickers[idx].file_id);
        });
    }
});


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}