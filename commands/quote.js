const Discord = require("discord.js");
const quotes = require("./quotes.js");

module.exports.run = async (bot, message, args, member) => {

    message.channel.send(quotes.quotes);

}

module.exports.help = {
    name: "quote"
}
