const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[2]) return message.reply("ask me a question.");
  let fortunes = [
  "Yes",
  "No",
  "Maybe",
  "Definitely!",
  "Ask me later..",
  "Fuck u",
  "I'm not sure",
  "Probably",
  "I doubt..",
  "Who? Me?",
  "Sorry, I'm too lazy to answer",
  "I thought you know the answer"
  ];

  let result = Math.floor((Math.random() * fortunes.length));
  let question = args.slice(0).join(" ");

  let embed = new Discord.RichEmbed()
  .setColor("0xb798f2")
  .setThumbnail("http://iconbug.com/data/95/256/8696325e0e7407823058632e68fb5970.png")
  .setTitle("Results:")
  .addField("Q:", question)
  .addField("A:", fortunes[result]);

  message.channel.send(embed);

}

module.exports.help = {fuck
  name: "8ball"
}
