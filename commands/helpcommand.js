const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("List of commands for mod:")
    .setColor("#658271")
    .addField("!commands", "Shows you all the commands that the bot has")
    .addField("!report", "Reports a member")
    .addField("!forest", "Sends random pics of forests")
    .addField("!botinfo", "Bot information")
    .addField("!commandsmod", "Shows you all the commands for moderators")

    message.channel.send(botembed);
}

module.exports.help = {
  name:"commands"
}
