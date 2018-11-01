const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let botembed = new Discord.RichEmbed()

    .addField({files: ["./forests/1.jpg"]})

    message.channel.send(botembed);

  }

module.exports.help = {
  name:"forest"
}
