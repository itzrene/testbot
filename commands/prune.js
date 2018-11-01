const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "MANAGE_MESSAGES");
  message.channel.bulkDelete(args[0]).then(() => {

    let botembed = new Discord.RichEmbed()
    .setColor("#658271")
    .addField(`Cleared ${args[0]} messages.`, "Yikes!")

    message.channel.send(botembed).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "prune"
}
