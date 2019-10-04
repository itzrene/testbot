const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.member.roles.find(role => role.name === "S p o o k y - v i b e s")){
    message.channel.send(message.author.toString() + " You already have this role! 👻");
    } else {
    var role = message.guild.roles.find(role => role.name === "S p o o k y - v i b e s");
    message.author.addRole(role);
    message.channel.send(message.author.toString() + " I gave you the **S p o o k y - v i b e s** role! 🎃");
    }

}

module.exports.help = {
    name: "hr"
}
