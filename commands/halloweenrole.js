const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    var role = message.guild.roles.find(role => role.name === "S p o o k y - v i b e s");
    message.member.addRole(role);
    message.channel.send(message.author.toString() + " I gave you the **S p o o k y - v i b e s** role! 🎃");
   

}

module.exports.help = {
    name: "hr"
}
