import TelegramBot from "node-telegram-bot-api"

const TOKEN = "8279320933:AAFh8UHkrn6HwKUBWOBg2HWx0WsmZr4OWlA"

const bot = new TelegramBot(TOKEN, { polling: true })

const obj = {}

const gameOptions = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: "1",
                    callback_data: "1",
                },
                {
                    text: "2",
                    callback_data: "2",
                },
                {
                    text: "3",
                    callback_data: "3",
                },
            ],
            [
                {
                    text: "4",
                    callback_data: "4",
                },
                {
                    text: "5",
                    callback_data: "5",
                },
                {
                    text: "6",
                    callback_data: "6",
                },
            ],
            [
                
                {
                    text: "7",
                    callback_data: "7",
                },
                {
                    text: "8",
                    callback_data: "8",
                },
                {
                    text: "9",
                    callback_data: "9",
                },
            ],
            [
                {
                    text: "0",
                    callback_data: "0",
                },
                
            ]

        ]
    }
}

const bootstrap = () => {
    bot.setMyCommands([
        {
            command: "/start",
            description: "Bot haqida ma'lumot"
        },
        {
            command: "info",
            description: "Ozingiz haqida malumot"
        },
        {
            command: "/game",
            description: "O'yin o'ynash"
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
        if (text === "/game") {
           bot.sendMessage(
                chatId,
                "Birdan 1 dan 10 gacha sonni toping",
                gameOptions
            );
            const randomNumber =  Math.floor(Math.random() * 10);
            obj[chatId] = randomNumber;
            return randomNumber
            // console.log(randomNumber);
          }
          

        return bot.sendMessage(
            chatId,
            "Uzur men sizning gapingizga tushunmadim"
        )
    })
}
    bot.on("callback_query", msg => {
     const data = msg.data;
     const chatId = msg.message.chat.id;

     if(data == obj[chatId]) {
         return bot.sendMessage(chatId,
            `Tabriklaymiz siz togri toptingiz, javob ${obj[chatId]} edi `)
            
        }else{
            return bot.sendMessage(
                chatId, `siz ${data}ni tanladinggiz bu hato, togri javod ${obj[chatId]} edi`
            )
     }
})

bootstrap()
console.log("Botimiz ishga tushdi");
