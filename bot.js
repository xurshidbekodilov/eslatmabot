require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const cron = require("node-cron");

const token = process.env.BOT_TOKEN;
let bot;

// NODE_ENV ga qarab polling yoki webhook ishlatamiz
if (process.env.NODE_ENV === "production") {
    bot = new TelegramBot(token);
    // Webhook URL ni o‘rnatamiz
    const url = process.env.WEBHOOK_URL + "/bot-webhook";
    bot.setWebHook(url);
    console.log("✅ Production: Webhook o‘rnatildi:", url);
} else {
    bot = new TelegramBot(token, { polling: true });
    console.log("✅ Development: Polling ishlatilyapti");
}

// /start komandasi
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
        msg.chat.id,
        "🤖 Salom! Men har kuni avtomatik xabar yuboruvchi botman."
    );
});

// Toshkent vaqt zonasi
const timezone = "Asia/Tashkent";

// Cron xabarlar
cron.schedule(
    "0 9 * * *",
    () => {
        bot.sendMessage(process.env.CHAT_ID, "🌅 Ovqat belgilashni unutmang!");
        console.log("09:00 xabar yuborildi.");
    },
    { timezone }
);

cron.schedule(
    "30 13 * * *",
    () => {
        bot.sendMessage(process.env.CHAT_ID, "🍽 Ovqat belgilashni unutmang!");
        console.log("13:30 xabar yuborildi.");
    },
    { timezone }
);

cron.schedule(
    "0 21 * * *",
    () => {
        bot.sendMessage(process.env.CHAT_ID, "🌙 Ish vaqti tugadi!");
        console.log("21:00 xabar yuborildi.");
    },
    { timezone }
);

module.exports = bot;
