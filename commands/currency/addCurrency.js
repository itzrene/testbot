const Discord = require("discord.js");
const config = require("../../botconfig.json");
var DB = require("../../DB.js");
let color = config.color;

module.exports.run = async (bot, message, args) => {
    
    if (!message.member.hasPermission('ADMINISTRATOR')) {
        let embed = new Discord.RichEmbed()
            .setAuthor("ERROR", message.author.avatarURL)
            .setDescription("`Insufficient permissions`")
            .setColor(color);
        message.channel.send(embed).then(msg => msg.delete(5000));
    } else {
        let target = message.mentions.members.first() || message.author

        if(!args[0]){
            let embed = new Discord.RichEmbed()
                .setAuthor("ERROR", message.author.avatarURL)
                .setDescription("`Please specify a player!`")
                .setColor(color);
            message.channel.send(embed).then(msg => msg.delete(5000));
        } else {
            if (isNaN(args[1])) {
                let embed = new Discord.RichEmbed()
                    .setAuthor("ERROR", message.author.avatarURL)
                    .setDescription("`Please specify an amount!`")
                    .setColor(color)
                message.channel.send(embed).then(msg => msg.delete(5000));
            } else {
                let balToAdd = Number(args[1]);
                var sql;
                DB.query(`SELECT * FROM currency WHERE id = '${target.id}'`, (err, result) => {
                    if(result.length < 1){
                        sql = `INSERT INTO currency (id, bal) VALUES ('${target.id}', ${balToAdd})`;
                    } else {
                        let currBal = result[0].bal;
                        sql = `UPDATE currency SET bal = ${currBal + balToAdd} WHERE id = '${target.id}'`;

                        let embed = new Discord.RichEmbed()
                            .setDescription(target.user + " `has been awarded " + args[1] + "` 🍵`!`")
                            .setColor(color)

                        message.channel.send(embed).then(m => m.delete(5000));
                    }
                    DB.query(sql, "ADDED RECORD CURRENCY");
                });
            }
        }
    }

}

module.exports.help = {
    name: "award"
}
