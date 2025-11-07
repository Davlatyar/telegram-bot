import TelegramBot from "node-telegram-bot-api"

const TOKEN = "8279320933:AAFh8UHkrn6HwKUBWOBg2HWx0WsmZr4OWlA"

const bot = new TelegramBot(TOKEN, { polling: true })



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
    ])


    
    bot.on("message", async function(msg){
        const chatId = msg.chat.id;
        const text = msg.text;
      
      
        if(text === "/start") {
            return bot.sendMessage(
                chatId, 
                `Assalomu aleykum ${msg.from?.first_name}`,
              {
                reply_markup: {
                    keyboard: [
                        [{text: "Boshlash 🔥"}],
                        [{text: "Menu 🍔"}],
                        [{text: "Sozlamalar ⚙️"}],
                    ],
                    resize_keyboard: true
                }
              }  
            )
        } else if (text == "Boshlash 🔥") {
          const xabar = await bot.sendMessage(chatId, "1 sekund..");

          setTimeout(function() {
             bot.deleteMessage(chatId,xabar.message_id)
             bot.sendPhoto(
                 chatId, "./photos/bmv-m5.jpg", {
                    caption: "Siz BMV M5 sotib olishga rozimisiz? \n\ The F90 M5 is based on the G30 5 Series\n\ nand uses an all-wheel drive powertrain, being\nthe first time that an M5 has not been rear-wheel.",
                    reply_markup: {
                        inline_keyboard: [
                          [
                            { text: "Rasmlar", callback_data: "photos" },
                            { text: `Ma'lumot`, callback_data: "info" },
                          ],
                          [{ text: "Sotib olish", callback_data: "buy" }],
                        ],
                      },
                    
                },
                )
            }, 1000)
        }else if (text == "Menu 🍔") {
            bot.sendMessage(chatId, "Menuga hush kelibsiz")
            bot.sendPhoto(chatId,
                "photos/menu.jfif"
            )
        }else if (text == "Sozlamalar ⚙️") {
            bot.sendMessage(chatId,
                "Mana Malumotlar"
            )
            bot.sendPhoto(chatId,
                "./photos/settings.jpg",
            )
        }
    
        if(text === "info") {
            bot.sendPhoto(
                chatId,
                "https://images.unsplash.com/photo-1497316730643-415fac54a2af?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8"
            )
            return bot.sendMessage(
                chatId,
                `Sizning telegram username ${msg.from?.username}`
            )
        }
    })
}
    bot.on("callback_query", function(query){
        console.log(query);
        
        const chatId = query.message.chat.id;
        const data = query.data;
   

        if (data == "buy") {
            bot.sendMessage(
                chatId, "Siz 120 000$ tolashga rozimisiz?",
                {
                    reply_markup: {
                        inline_keyboard:[
                            [{text: "Ha",callback_data:"confrm"}],
                            [{text: "Yoq",callback_data:"reject"}]
                        ],
                    },
                },
            )
        }else if (data == "confrm") {
            bot.sendMessage(chatId, "Tabriklaymiz endi siz BMV M5 F90 li boldingiz!!")      
        }else if (data == "reject") {
            bot.sendMessage(chatId, "Bekor qilindi")
        }
        
        if (data == "photos") {
            bot.sendMessage(chatId, "BMV M5ning RASMLARI")
            bot.sendPhoto(chatId, "./photos/bm5-photo1.jfif")
            bot.sendPhoto(chatId, "./photos/bm5-photo2.jfif")
        }

        if(data == "info") {
            bot.sendMessage(
                chatId,
                "BMV M5 HAQIDA MALUMOT, \n\ The BMW M5 F90 is the sixth generation of the high-performance sedan produced from 2017 to 2023. \n\ A notable departure from its predecessors, it was the first M5 to come standard with a rear-biased all-wheel-drive system, called M xDrive."
            )
        }
        if(data == "info") {
            bot.sendPhoto(chatId,
                "./photos/settings.jpg"
            )
        }
    }
)

bootstrap()
console.log("Botimiz ishga tushdi");
