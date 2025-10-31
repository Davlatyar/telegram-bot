import TelegramBot from "node-telegram-bot-api"

const TOKEN = "8279320933:AAFh8UHkrn6HwKUBWOBg2HWx0WsmZr4OWlA"

const bot = new TelegramBot(TOKEN, { polling: true })

bot.setMyCommands([
    {
        command: "/start",
        description: "Bot haqida ma'lumot"
    },
    {
        command: "info",
        description: "Ozingiz haqida malumot"
    }
])


bot.on("message", function(msg){
    const chatId = msg.chat.id;
    const text = msg.text;
  
  
    if(text === "/start") {
        return bot.sendMessage(
            chatId, 
            `Assalomu aleykum ${msg.from?.first_name}`
        )
    }

    if(text === "/info") {
        bot.sendPhoto(
            chatId,
            "https://images.unsplash.com/photo-1497316730643-415fac54a2af?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
        )
        return bot.sendMessage(
            chatId,
            `Sizning telegram username ${msg.from?.username}`
        )
    }

    console.log("Xabar keldi");
    console.log(msg);    
})

console.log("Botimiz ishga tushdi");
