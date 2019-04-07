const Discord = require("discord.js");
var config = require("/quotes.json");
var quotes = config.quotes;


module.exports.run = async (bot, message, args, member) => {

    message.channel.send("ok");

}

module.exports.help = {
    name: "quote"
}
