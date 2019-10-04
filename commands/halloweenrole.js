const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    if(!args[0]) {
        
        if(message.member.roles.find("name", "S p o o k y - v i b e s")){
            message.channel.send(message.author.toString() + " You already have this role! 👻");
        } else {
            message.member.addRole("629377122195996673");
            message.channel.send(message.author.toString() + " I gave you the **S p o o k y - v i b e s** role! 🎃");
        }
        
    } else if(args[0] == "remove"){
        
        if(message.member.roles.find("name", "S p o o k y - v i b e s")){
            message.member.removeRole("629377122195996673");
            message.channel.send(message.author.toString() + " I removed you the **S p o o k y - v i b e s** role! 🎃");
            message.channel.send(message.author.toString() + " You already have this role! 👻");
        } else {
            message.channel.send(message.author.toString() + " You don't have the **S p o o k y - v i b e s** role! 🎃");
        }
    }

}

module.exports.help = {
    name: "hr"
}
