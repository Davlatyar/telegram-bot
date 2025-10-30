import TelegramBot from "node-telegram-bot-api"

const TOKEN = "8279320933:AAFh8UHkrn6HwKUBWOBg2HWx0WsmZr4OWlA"

const bot = new TelegramBot(TOKEN, { polling: true })

bot.on("message", function(msg){
    const chatId = msg.chat.id;
    const text = msg.text;

    // bot.sendMessage(chatId, `Salom --> ${text}`);
    if(text === "/start") {
        bot.sendMessage(
            chatId,
            "Assalomu Aleykum Davlatyorni telegram botiga hush kelibsiz"
        )
    }
    console.log("Xabar keldi");
    console.log(msg);    
})

console.log("Botimiz ishga tushdi");
