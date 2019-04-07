const Discord = require("discord.js");
const config = require("./quotes.js");

module.exports.run = async (bot, message, args, member) => {
    message.channel.send("*" + randomQuote() + "*");

}

module.exports.help = {
    name: "quote"
}
