const Discord = require("discord.js");
var DB = require('../DB.js');

module.exports.run = async (bot, message, args) => {
  
  DB.query(`SELECT * FROM candies WHERE id = '${message.author.id}'`, (err, result) => {
    /**if (err) {
      console.log("CANDY PROBLEM!!!);
    }**/
    console.log("CANDY SELECTED");
    if(result.length < 1) { 
      message.channel.send(message.author.toString() + ", you don't have any candy! 👻");
      console.log("DOESNT HAVE ANY CANDY");
    } else {
      let candy = result[0].candy;
      message.channel.send(message.author.toString() + ", you have **" + candy.toString() + "** candy! 🍬 🍭");
      console.log("HAS SOME CANDY");
    }
  });

}

module.exports.help = {
  name: "candy"
}
