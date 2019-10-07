const Discord = require("discord.js");
const config = require("../../botconfig.json");
var DB = require("../DB.js");
let color = config.color;

module.exports.run = async (bot, message, args) => {

    /**
     let targetUser = message.mentions.users.first();
     let targetCurrency = currency[targetUser.id].currency;
     let userCurrency = currency[message.author.id].currency;

     if (args[0]) {

        message.channel.send(targetUser.username + "'s" + "🍵" + targetCurrency);

        if(userCurrency == null){
            userCurrency = 0;
            message.channel.send(targetUser.username + " doesn't have any 🍵!")
        }
    }

     if (!args[0]) {

        if(userCurrency == null){
            userCurrency = 0;
            message.channel.send("You don't have any 🍵!")
        }

        message.channel.send("Your 🍵" + userCurrency);
    }
     **/

    /**if(args[0]){
        let target = message.mentions.members.first();
        let targetBal = db.fetch(`currency_${target.id}`);

        if (targetBal === null) {
            targetBal = 0;
        }

        let embed = new Discord.RichEmbed()
            .setDescription(target.user.username + "'s balance is `" + targetBal + "` 🍵!")
            .setColor(color)
        message.channel.send(embed)
    } else {
        let bal = db.fetch(`currency_${message.author.id}`);

        if (bal === null) {
            bal = 0;
        }

        let embed = new Discord.RichEmbed()
            .setDescription("Your balance is `" + bal + "` 🍵!")
            .setColor(color)
        message.channel.send(embed)
    }**/
    
    
        let target = message.mentions.members.first();
    
        if(args[0]){
            DB.query(`SELECT * FROM currency WHERE id = '${target.id}'`, (err, result) => {
                 if(result.length < 1) { 
                    message.channel.send(target.username + ", doesn't have any 🍵!");
                 } else {
                    let targetBal = result[0].bal;
            
                    let embed = new Discord.RichEmbed()
                        .setDescription(target.username + "'s balance is `" + targetBal + "` 🍵!")
                        .setColor(color)
                    message.channel.send(embed);
                    console.log("TARGET HAS SOME MONEY");
                }
           });
        } else {
            DB.query(`SELECT * FROM currency WHERE id = '${message.author.id}'`, (err, result) => {
                
                if(result.length < 1) { 
                    message.channel.send(message.author.toString() + ", you don't have any 🍵!");
                } else {
                    let bal = result[0].bal;
            
                    let embed = new Discord.RichEmbed()
                        .setDescription("Your balance is `" + bal + "` 🍵!")
                        .setColor(color)
                    message.channel.send(embed);
                    console.log("HAS SOME MONEY");
                }
                
           });
        }
}

module.exports.help = {
    name: "bal"
}
