const Discord = require('discord.js');
const db = require("quick.db");
const ms = require("parse-ms");
const config = require("../../botconfig.json");
let color = config.color;

exports.run = async (client, message, args, config) => {


    let timeout = 43200000; //43200000
    let amount = 250;


    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(message.author + ", you already collected your daily reward, you can come back and collect it in **" + time.hours + "h " + time.minutes + "m " + time.seconds + "s**!");
    } else {
        let embed = new Discord.RichEmbed()
            .setAuthor(`Daily`, "**" + message.author.username + "**")
            .setDescription(`**Daily Reward**`)
            .addField(`Collected`, amount)
            .setColor(color)

        message.channel.send(embed);
        db.add(`currency_${message.author.id}`, amount);
        db.set(`daily_${message.author.id}`, Date.now());

    }

}

module.exports.help = {
    name: "daily"
}
