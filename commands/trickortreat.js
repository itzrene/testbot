const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let embed = new Discord.RichEmbed()
  .setColor("0xEB6123")
  .setThumbnail("https://mynorth.com/wp-content/uploads/2016/09/pumpkins-and-gourds-900x473.jpeg")
  .setTitle("Happy halloween! 🎃:")
  .addField("You got 10 candies!", "🍫 🍬 🍬 🍭 🍫 🍬 🍭")

  message.channel.send(embed);
}

module.exports.help = {
  name: "trickortreat"
}
