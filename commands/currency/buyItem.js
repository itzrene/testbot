const Discord = require("discord.js");
const db = require("quick.db");
const config = require("../../botconfig.json");
let color = config.color;

module.exports.run = async (bot, message, args) => {

    let author = db.get(`currency_${message.author.id}`);

    let target = message.mentions.members.first();

    function notEnoughMoney(){
        let embed = new Discord.RichEmbed()
            .setAuthor( "ERROR", message.author.avatarURL)
            .setDescription("`You don't have enough money!`")
            .setColor(color)

        message.channel.send(embed).then(m => m.delete(5000));
    }

    if (args[0]) {
        if (args[1] == null) {
            let embed = new Discord.RichEmbed()
                .setAuthor( "ERROR", message.author.avatarURL)
                .setDescription("`Please specify an item!`")
                .setColor(color)

            message.channel.send(embed).then(m => m.delete(5000));
        } else if (args[1] == 'potato') {

            if (author < 10) {
                notEnoughMoney();
            }

            if (author >= 10) {
                db.add(`inventoryPotato_${target.id}`, 1);
                db.subtract(`currency_${message.author.id}`, 10);
                let embed = new Discord.RichEmbed()
                    .setDescription(target + ',** ' + message.author.username + '** bought you a **Potato** 🥔!')
                message.channel.send(embed);
            }
        } else if (args[1] == 'grape') {

            if (author < 50) {
                notEnoughMoney();
            }

            if (author >= 50) {
                db.add(`inventoryGrape_${target.id}`, 1);
                db.subtract(`currency_${message.author.id}`, 50);
                let embed = new Discord.RichEmbed()
                    .setDescription(target + ',** ' + message.author.username + '** bought you a **Grape** 🍇!')
                message.channel.send(embed);
            }
        } else if (args[1] == 'cactus') {

            if (author < 150) {
                notEnoughMoney();
            }

            if (author >= 150) {
                db.add(`inventoryCactus_${target.id}`, 1);
                db.subtract(`currency_${message.author.id}`, 150);
                let embed = new Discord.RichEmbed()
                    .setDescription(target + ',** ' + message.author.username + '** bought you a **Cactus** 🌵!')
                message.channel.send(embed);
            }
        }
        else if (args[1] == 'rose') {

            if (author < 300) {
                notEnoughMoney();
            }

            if (author >= 300) {
                db.add(`inventoryRose_${target.id}`, 1);
                db.subtract(`currency_${message.author.id}`, 300);
                let embed = new Discord.RichEmbed()
                    .setDescription(target + ',** ' + message.author.username + '** bought you a **Rose** 🌹!')
                message.channel.send(embed);
            }
        } else if (args[1] == 'shell') {

            if (author < 650) {
                notEnoughMoney();
            }

            if (author >= 650) {
                db.add(`inventoryShell_${target.id}`, 1);
                db.subtract(`currency_${message.author.id}`, 650);
                let embed = new Discord.RichEmbed()
                    .setDescription(target + ',** ' + message.author.username + '** bought you a **Shell** 🐚!')
                message.channel.send(embed);
            }
        } else if (args[1] == 'unicorn') {

            if (author < 1250) {
                notEnoughMoney();
            }

            if (author >= 1250) {
                db.add(`inventoryUnicorn_${target.id}`, 1);
                db.subtract(`currency_${message.author.id}`, 1250);
                let embed = new Discord.RichEmbed()
                    .setDescription(target + ',** ' + message.author.username + '** bought you a **Unicorn** 🦄!')
                message.channel.send(embed);
            }
        } else if (args[1] == 'diamond') {

            if (author < 3000) {
                notEnoughMoney();
            }

            if (author >= 3000) {
                db.add(`inventoryDiamond_${target.id}`, 1);
                db.subtract(`currency_${message.author.id}`, 3000);
                let embed = new Discord.RichEmbed()
                    .setDescription(target + ',** ' + message.author.username + '** bought you a **Diamond** 💎!')
                message.channel.send(embed);
            }
        } else if (args[1] == 'ring') {

            if (author < 7000) {
                notEnoughMoney();
            }

            if (author >= 7000) {
                db.add(`inventoryRing_${target.id}`, 1);
                db.subtract(`currency_${message.author.id}`, 7000);
                let embed = new Discord.RichEmbed()
                    .setDescription(target + ',** ' + message.author.username + '** bought you a **Ring** 💍!')
                message.channel.send(embed);
            }
        } else if (args[1] == 'boat') {

            if (author < 15000) {
                notEnoughMoney();
            }

            if (author >= 15000) {
                db.add(`inventoryBoat_${target.id}`, 1);
                db.subtract(`currency_${message.author.id}`, 15000);
                let embed = new Discord.RichEmbed()
                    .setDescription(target + ',** ' + message.author.username + '** bought you a **Boat** 🛳!')
                message.channel.send(embed);
            }
        } else if (args[1] == 'castle') {

            if (author < 30000) {
                notEnoughMoney();
            }

            if (author >= 30000) {
                db.add(`inventoryCastle_${target.id}`, 1);
                db.subtract(`currency_${message.author.id}`, 30000);
                let embed = new Discord.RichEmbed()
                    .setDescription(target + ',** ' + message.author.username + '** bought you a **Castle** 🏰!')
                message.channel.send(embed);
            }
        }
    } else {
        let embed = new Discord.RichEmbed()
            .setAuthor( "ERROR", message.author.avatarURL)
            .setDescription("`Please specify a member!`")
            .setColor(color)

        message.channel.send(embed).then(m => m.delete(5000));
    }
}

module.exports.help = {
    name: "buy"
}
