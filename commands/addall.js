const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member) => {

    let role = message.guild.roles.find(r => r.name == 'test')

    if(!args[0]) {
        
      message.channel.send(`01`)
      
    } else if(args[0] == "on"){
    
      message.channel.send(`1`)
    
    } else if(args[0] == "off"){
    
      message.channel.send(`0`)
    
    }

}

module.exports.help = {
    name: ""
}
