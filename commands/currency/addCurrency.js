const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../botconfig.json");
let color = config.color;

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        let embed = new Discord.RichEmbed()
            .setAuthor("ERROR", message.author.avatarURL)
            .setDescription("`Insufficient permissions`")
            .setColor(color);
        message.channel.send(embed).then(msg => msg.delete(5000));
    } else {
        let target = message.mentions.members.first() || message.author

        if(!args[0]){
            let embed = new Discord.RichEmbed()
                .setAuthor("ERROR", message.author.avatarURL)
                .setDescription("`Please specify a player!`")
                .setColor(color);
            message.channel.send(embed).then(msg => msg.delete(5000));
        } else {
            if (isNaN(args[1])) {
                let embed = new Discord.RichEmbed()
                    .setAuthor("ERROR", message.author.avatarURL)
                    .setDescription("`Please specify an amount!`")
                    .setColor(color)
                message.channel.send(embed).then(msg => msg.delete(5000));
            } else {
                db.add(`currency_${target.id}`, args[1]);

                let embed = new Discord.RichEmbed()
                    .setDescription(target.user + " `has been awarded " + args[1] + "` 🍵`!`")
                    .setColor(color)

                message.channel.send(embed).then(m => m.delete(5000));
            }
        }
    }

}

module.exports.help = {
    name: "awar"
}
