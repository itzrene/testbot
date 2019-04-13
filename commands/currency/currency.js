const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../botconfig.json");
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

    if(args[0]){
        let target = message.mentions.members.first();
        let targetBal = db.get(`currency_${target.id}`);

        if (targetBal === null) {
            targetBal = 0;
        }

        let embed = new Discord.RichEmbed()
            .setDescription(target.user.username + "'s balance is `" + targetBal + "` 🍵!")
            .setColor(color)
        message.channel.send(embed)
    } else {
        let bal = db.get(`currency_${message.author.id}`);

        if (bal === null) {
            bal = 0;
        }

        let embed = new Discord.RichEmbed()
            .setDescription("Your balance is `" + bal + "` 🍵!")
            .setColor(color)
        message.channel.send(embed)
    }

}

module.exports.help = {
    name: "bal"
}