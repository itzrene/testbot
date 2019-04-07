const Discord = require("discord.js");
const quotes = require("./quotes.json");

module.exports.run = async (bot, message, args, member) => {

    function randomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    };

    message.channel.send("*" + randomQuote() + "*");

}

module.exports.help = {
    name: "quote"
}
