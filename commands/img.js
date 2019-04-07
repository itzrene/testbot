const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member) => {

    

    message.channel.send("", {file: "images/wallpaper.jpg"});

}

module.exports.help = {
    name: "img"
}
