const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let rated = message.mentions.members.first();
    if(!rated) {
        message.channel.send("Tag someone to rate them!");
    } else {
    
    let rating = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    
    let result = Math.floor((Math.random() * rating.length));
    
    if(rated.user.id === message.author.id) {
      message.channel.send(`**${message.author.username}**, I'd give you ${result}/10 <:engine2:569170469174116363>`);
    }   else {
            message.channel.send(`I'd give **__${rated.user.username}__** ${result}/10 <:engine2:569170469174116363>`);
        }
    }
    
}

module.exports.help = {
  name: "rate"
}
