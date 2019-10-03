const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let embed = new Discord.RichEmbed()
  .setColor("0xEB6123")
  .setThumbnail("https://mynorth.com/wp-content/uploads/2016/09/pumpkins-and-gourds-900x473.jpeg")
  .setTitle("Happy halloween! 🎃:")
  .addField("You got 10 candies!", "🍫 🍬 🍬 🍭 🍫 🍬 🍭")

  message.channel.send(embed);

  bot.on("message", function(message) {
    if (message.content.toLowerCase() == "happy halloween") {
      message.channel.send("Hello! 💓 " + message.author.toString());
    }
  });

  bot.on("message", function(message) {
      if (message.content.toLowerCase() == "trick or treat") {
        message.channel.send("Happy halloween! 🎃" + message.author.toString());
      }
    });

    bot.on("message", function(message) {
          if (message.content.toLowerCase() == "happy halloween") {
            message.channel.send("Happy halloween! 🎃" + message.author.toString());
          }
        });
}

module.exports.help = {
  name: "trickortreat"
}
