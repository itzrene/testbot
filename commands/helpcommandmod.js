const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");

    let botembed = new Discord.RichEmbed()
    .setTitle("List of commands:")
    .setColor("#658271")
    .addField("!prune", "Deletes messages")
    .addField("!say", "Chat through the bot")

    message.channel.send(botembed);
}

module.exports.help = {
  name:"commandsmod"
}
