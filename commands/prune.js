const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");
  if(!args[0]) return message.channel.send("oof");
  message.channel.bulkDelete(args[0]).then(() => {
    
    let embed = new Discord.RichEmbed()
    .setColor("##598267")
    .addField(`Cleared ${args[0]} messages`, "Yikes!");

  message.channel.send(embed).then(msg => {msg.delete(5000)});

  });
}

module.exports.help = {
  name: "prune"
}
