const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../botconfig.json");
let color = config.color;

module.exports.run = async (bot, message, args) => {

    let receiver = message.mentions.members.first();

    let sender = db.get(`money_${message.author.id}`);

    if (!args[0]) {
        let embed = new Discord.RichEmbed()
            .setAuthor( "ERROR", message.author.avatarURL)
            .setDescription("`Please specify a member!`")
            .setColor(color)

        message.channel.send(embed).then(m => m.delete(5000));
    } else if (message.content.includes('-')) {
        let embed = new Discord.RichEmbed()
            .setAuthor( "ERROR", message.author.avatarURL)
            .setDescription("`Negative money can't be paid!`")
            .setColor(color)

        message.channel.send(embed).then(m => m.delete(5000));
    } else if (sender < args[1]) {
        let embed = new Discord.RichEmbed()
            .setAuthor( "ERROR", message.author.avatarURL)
            .setDescription("`That's more than you have!`")
            .setColor(color)

        message.channel.send(embed).then(m => m.delete(5000));
    } else if (isNaN(args[1])){
        let embed = new Discord.RichEmbed()
            .setAuthor( "ERROR", message.author.avatarURL)
            .setDescription("`Please specify an amount!`")
            .setColor(color)

        message.channel.send(embed).then(m => m.delete(5000));
    } else {
        let embed = new Discord.RichEmbed()
            .setDescription(message.author.username + ", **" + args[1] + "** 🍵 successfully transferred to " + receiver.user)
            .setColor(color)
        message.channel.send(embed).then(m => m.delete(5000));
        db.add(`currency_${receiver.id}`, args[1]);
        db.subtract(`currency_${message.author.id}`, args[1]);

    }

}

module.exports.help = {
    name: "pay"
}
