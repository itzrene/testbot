const Discord = require("discord.js");
const config = require("./quotes.json");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
        message.channel.send("hi");

}

module.exports.help = {
    name: "quote"
}
