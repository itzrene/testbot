const Discord = require("discord.js");
var Jimp = require('jimp');
const config = require("../botconfig.json");
let color = config.color;


module.exports.run = async (bot, message, args, member) => {

    let youtube = args.slice(0).join('+');

    let link = `https://www.youtube.com/results?search_query=` + youtube;
    if(!youtube){
        let embed = new Discord.RichEmbed()
            .setAuthor( "ERROR", message.author.avatarURL)
            .setDescription("`Missing arguments!`")
            .setColor(color)

        message.channel.send(embed).then(m => m.delete(5000));
    } else {
        let embed = new Discord.RichEmbed()
            .setDescription(link)
            .setColor(color);
        message.channel.send(embed);
    }

}


module.exports.help = {
    name: "yt"
}

