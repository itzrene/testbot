const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[1]) return message.reply(message.author.toString() + " **prayed their respect!**");

    let prayers = args.slice(0).join(" ");

    message.channel.send(message.author.toString() + + " prayed their respect for **" + prayers + "!**");

}

module.exports.help = {
    name: "f"
}
