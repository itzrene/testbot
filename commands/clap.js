const Discord = require("discord.js");
const config = require("../botconfig.json");
let color = config.color;

module.exports.run = async (bot, message, args, member) => {

    let randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

    if (args.length < 1) {
        let embed = new Discord.RichEmbed()
            .setAuthor( "ERROR", message.author.avatarURL)
            .setDescription("`Missing arguments!`")
            .setColor(color)

        message.channel.send(embed).then(m => m.delete(5000));
    } else {
        message.channel.send(args.map(randomizeCase).join(':clap:'));
    }

}

module.exports.help = {
    name: "clap"
}

