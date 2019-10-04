const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(message.member.roles.find('name', 'S p o o k y - v i b e s')){
    message.channel.send(message.author.toString() + " You already have this role! 👻");
    } else {
    let role = message.guild.roles.find('name', 'S p o o k y - v i b e s');
    message.member.addRole(role.id);
    message.channel.send(message.author.toString() + " I gave you the **S p o o k y - v i b e s** role! 🎃");
    }

}

module.exports.help = {
    name: "hr"
}
