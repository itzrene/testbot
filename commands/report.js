const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Usage: !report (user) (reason)");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return errors.cantfindUser(message.channel);
    let rreason = args.join(" ").slice(22);
    if(!rreason) return errors.noReason(message.channel);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("#598267")
    .addField("Reported user:", `${rUser}`)
    .addField("Reported by:", `${message.author}`)
    .addField("Channel:", message.channel)
    .addField("When:", message.createdAt)
    .addField("Reason:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports-log");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
