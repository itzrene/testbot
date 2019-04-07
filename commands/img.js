const Discord = require("discord.js");
var Jimp = require('jimp');

module.exports.run = async (bot, message, args, member) => {

    let image = await Jimp.read("images/wallpaper.jpg");

    Jimp.read("images/wallpaper.jpg").then(image =>{
        image.resizeBy(50,50)
        image.write("wallpaper.jpg")
    })
    
    message.channel.send("", {file: "images/wallpaper.jpg"});
}

module.exports.help = {
    name: "img"
}
