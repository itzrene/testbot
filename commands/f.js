const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!args[2]) return message.channel.send("**" + message.user.username + "** has paid their respects!");

    let prayers = args.slice(0).join(" ");

    message.channel.send("**" + message.user.username + "** has paid their respects for **" + prayers + "!**");

}

module.exports.help = {
    name: "f"
}
