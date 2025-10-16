// 1️⃣ Kutubxonalarni chaqiramiz
require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const cron = require("node-cron");

// 2️⃣ Botni ishga tushiramiz
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// 3️⃣ Guruh ID
const chatId = process.env.CHAT_ID;

// 4️⃣ Oddiy /start komandasi
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🤖 Salom! Men har kuni avtomatik xabar yuboruvchi botman.");
});

// 5️⃣ Toshkent vaqt zonasi
const timezone = "Asia/Tashkent";

// 6️⃣ Har kuni soat 09:00 da xabar
cron.schedule("0 9 * * *", () => {
  const message = "🌅 Ovqat belgilashni unutmang!";
  bot.sendMessage(chatId, message);
  console.log("09:00 xabar yuborildi.");
}, { timezone });

// 7️⃣ Har kuni soat 13:30 da xabar
cron.schedule("0 13 * * *", () => {
  const message = "🍽 Ovqat belgilashni unutmang!";
  bot.sendMessage(chatId, message);
  console.log("13:30 xabar yuborildi.");
}, { timezone });

// 8️⃣ Har kuni soat 21:00 da xabar
cron.schedule("0 21 * * *", () => {
  const message = "🌙 Ish vaqti tugadi!";
  bot.sendMessage(chatId, message);
  console.log("21:00 xabar yuborildi.");
}, { timezone });

// ✅ Konsolda ishga tushganini ko‘rsatish
console.log("Bot ishga tushdi ✅");
