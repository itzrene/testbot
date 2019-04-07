const Discord = require("discord.js");
const config = require("./quotes.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

        var quotes = config.quotes;

        function randomQuote() {
            return quotes[Math.floor(Math.random() * quotes.length)];
        };

        message.channel.send(randomQuote());

}

module.exports.help = {
    name: "quote"
}