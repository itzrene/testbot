const Discord = require("discord.js");
var DB = require('../DB.js');

module.exports.run = async (bot, message, args) => {
  
  DB.query(`SELECT * FROM candies WHERE id = '${message.author.id}'`, (err, result) => {
    /**if (err) {
      console.log("CANDY PROBLEM!!!);
    }**/
    let candy = result[0].candy;
    if(!result.length) { 
      message.channel.send(message.author.toString() + ", you don't have any candy! 👻");
    } else {
      message.channel.send(message.author.toString() + ", you have **" + candy.toString() + "** candy! 🍬 🍭");
    }
  });

}

module.exports.help = {
  name: "candy"
}
