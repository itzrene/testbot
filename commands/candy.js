const Discord = require("discord.js");
var DB = require('../DB.js');

module.exports.run = async (bot, message, args) => {
  
  DB.query(`SELECT * FROM candies WHERE id = '${message.author.id}'`, (err, result) => {
    /**if (err) {
      console.log("CANDY PROBLEM!!!);
    }**/
    let candy = result[0].candy;
    message.channel.send(message.author.toString() + ", you have **" + candy.toString() + "** candies! 🍬 🍭");
  });

}

module.exports.help = {
  name: "candy"
}
