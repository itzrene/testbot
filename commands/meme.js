const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.channel.send("Img sent!", {file: "images/meme/meme.png"});

}

module.exports.help = {
    name: "meme"
}
