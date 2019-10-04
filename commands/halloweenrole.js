const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.member.roles.find("name", "S p o o k y - v i b e s")){
    message.channel.send(message.author.toString() + " You already have this role! 👻");
    } else {
    let memberRole = message.member.guild.roles.find(role => role.id == "629825175210426381");
    message.member.addRole(memberRole);
    message.channel.send(message.author.toString() + " I gave you the **S p o o k y - v i b e s** role! 🎃");
    }

}

module.exports.help = {
    name: "hr"
}
