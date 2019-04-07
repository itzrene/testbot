const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member) => {
    
    message.channel.send("quotes.json");

}

module.exports.help = {
    name: "quote"
}
