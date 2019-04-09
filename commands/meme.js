const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    message.channel.send("Img sent! ok", {file: "images/meme/meme.png"});
    console.log("Meme!");

}

module.exports.help = {
    name: "meme"
}
