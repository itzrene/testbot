const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const red = botconfig.red;
const green = botconfig.green;
const orange = botconfig.orange;

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help"){
      message.reply("Usage: !report (user) (reason)");
      return;
    }
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Enter the user");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#658271")
    .addField("Reported user:", `${rUser}`)
    .addField("Reported by:", `${message.author}`)
    .addField("Channel:", message.channel)
    .addField("When:", message.createdAt)
    .addField("Reason:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports-log");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
