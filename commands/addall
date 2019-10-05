const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member) => {

    let role = message.guild.roles.find(r => r.name == 'test')

    if(!args[0]) {
    
      if (!role) return message.channel.send(`**${message.author.username}**, role not found`)

      message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role))
      message.channel.send(`**${message.author.username}**, role **${role.name}** was added to all members`)
      
    } else if(args[0] == "remove"){
    
      if (!role) return message.channel.send(`**${message.author.username}**, role not found`)

      message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role))
      message.channel.send(`**${message.author.username}**, role **${role.name}** was taken from all members`)
    
    }

}

module.exports.help = {
    name: "addall"
}
