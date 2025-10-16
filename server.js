require("dotenv").config();
const express = require("express");
const bot = require("./bot"); // bot.js ni import qilamiz

const app = express();
const PORT = process.env.PORT || 3000;

// Oddiy root endpoint
app.get("/", (req, res) => {
    res.send("Server ishlayapti ✅ Bot esa fon rejimida xabar yuboradi.");
});

// Serverni ishga tushiramiz
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} da ishga tushdi`);
});
