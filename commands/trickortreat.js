const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  function candiesEmoji() {
    var result = "";
    var characters = "🍫🍬🍭";
    var charactersLength = characters.length;
    for (var i = 0; i <= 7; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  let candies = Math.floor(Math.random() * 50) + 1;

  let embed = new Discord.RichEmbed()
  .setColor("0xEB6123")
  .setThumbnail("https://media2.s-nbcnews.com/j/newscms/2014_40/695336/141001-halloween-candy-corn-1700_539e2169509dc704b46829727907d138.fit-760w.jpg")
  .setTitle("Happy halloween! 🎃:")
  .addField("You got " + candies.toString() + " candies!", candiesEmoji.toString())

  message.channel.send(embed);
  
}

module.exports.help = {
  name: "trickortreat"
}
