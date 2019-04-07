const Discord = require("discord.js");
const config = require("./quotes.js");

module.exports.run = async (bot, message, args, member) => {

    var quotes = config.quotes;

    function randomQuote() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    };

    message.channel.send("*" + quotes + "*");

}

module.exports.help = {
    name: "quote"
}
