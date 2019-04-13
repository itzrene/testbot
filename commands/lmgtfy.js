const Discord = require("discord.js");
const config = require("../botconfig.json");
let color = config.color;

module.exports.run = async (bot, message, args) => {

    if (!args[0]) {
        message.channel.send(message.author + " **ERROR** `Missing arguments!`")
    }

    if (args.length >= 0) {
    if (args[0]) {
        let arg = args.slice(0).join(" ").replace(" ", "%20");
        let embed = new Discord.RichEmbed()
            .addField(message.author.username,"http://lmgtfy.com/?q=" + arg)
            .setColor(color)
        message.channel.send(embed);
    }
}

}

module.exports.help = {
    name: "lmgtfy"
}
